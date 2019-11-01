module gamedating.page {
    /**
     * 登录绑定注册界面
     */
    export class LoginBindPage extends game.gui.base.Page {
        static readonly TYPE_LOGIN_PASSWORD = 1; //密码登录
        static readonly TYPE_LOGIN_PHONE = 2; //手机登录
        static readonly TYPE_BIND_PHONE = 3; //手机绑定
        static readonly TYPE_RESET_PASSWORD = 4; //重置密码

        private _viewUI: ui.nqp.dating.DengLuBD1UI;
        private _inputPhone: MyTextInput;
        private _inputCode: MyTextInput;
        private _inputAccount: MyTextInput;
        private _inputPsd: MyTextInput;
        private _inputSetPsd: MyTextInput;
        private _inputSetNewPsd: MyTextInput;
        private _promptColor: string;
        private _inputColor: string;
        private _time: number = 3000;//超时所需时间

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + "denglu.atlas",
                DatingPath.atlas_dating_ui + "qukuan.atlas",
            ];
            this._delta = 1000;
            this._isNeedDuang = true;
            this._isNeedBlack = true;
            this._isClickBlack = true;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.DengLuBD1UI");
            this.addChild(this._viewUI);
            if (!WebConfig.isSingleEnter) {
                if (!this._inputAccount) {
                    this._inputAccount = new MyTextInput();
                    this._inputAccount.x = this._viewUI.txt_account.x;
                    this._inputAccount.y = this._viewUI.txt_account.y + 3;
                    this._inputAccount.width = this._viewUI.txt_account.width;
                    this._viewUI.txt_account.parent.addChild(this._inputAccount);
                    this._viewUI.txt_account.removeSelf();
                }
                if (!this._inputPsd) {
                    this._inputPsd = new MyTextInput();
                    this._inputPsd.x = this._viewUI.txt_psd.x;
                    this._inputPsd.y = this._viewUI.txt_psd.y;
                    this._inputPsd.width = this._viewUI.txt_psd.width;
                    this._viewUI.txt_psd.parent.addChild(this._inputPsd);
                    this._viewUI.txt_psd.removeSelf();
                }
            }
            if (!this._inputPhone) {
                this._inputPhone = new MyTextInput();
                this._inputPhone.x = this._viewUI.txt_phone.x;
                this._inputPhone.y = this._viewUI.txt_phone.y + 3;
                this._inputPhone.width = this._viewUI.txt_phone.width;
                this._viewUI.txt_phone.parent.addChild(this._inputPhone);
                this._viewUI.txt_phone.removeSelf();
            }
            if (!this._inputCode) {
                this._inputCode = new MyTextInput();
                this._inputCode.x = this._viewUI.txt_code.x;
                this._inputCode.y = this._viewUI.txt_code.y;
                this._inputCode.width = this._viewUI.txt_code.width;
                this._viewUI.txt_code.parent.addChild(this._inputCode);
                this._viewUI.txt_code.removeSelf();
            }
            if (!this._inputSetPsd) {
                this._inputSetPsd = new MyTextInput();
                this._inputSetPsd.x = this._viewUI.txt_set_psd.x;
                this._inputSetPsd.y = this._viewUI.txt_set_psd.y;
                this._inputSetPsd.width = this._viewUI.txt_set_psd.width;
                this._viewUI.txt_set_psd.parent.addChild(this._inputSetPsd);
                this._viewUI.txt_set_psd.removeSelf();
            }
            if (!this._inputSetNewPsd) {
                this._inputSetNewPsd = new MyTextInput();
                this._inputSetNewPsd.x = this._viewUI.txt_set_newpsd.x;
                this._inputSetNewPsd.y = this._viewUI.txt_set_newpsd.y;
                this._inputSetNewPsd.width = this._viewUI.txt_set_newpsd.width;
                this._viewUI.txt_set_newpsd.parent.addChild(this._inputSetNewPsd);
                this._viewUI.txt_set_newpsd.removeSelf();
            }

            this._promptColor = "#b4b6b9";
            this._inputColor = "#ffffff";
        }

        private _type: number;
        set dataSource(v: any) {
            this._dataSource = this._type = v;
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.btn_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_phone_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_account_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_login.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_see_psd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_see_newpsd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_see_newpsd1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set_over.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_sure.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.lab_get_code.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.lab_login_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.lab_login_account.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.lab_kefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._viewUI.ani2.on(LEvent.COMPLETE, this, this.funcAfterAni2);
            this._viewUI.ani3.on(LEvent.COMPLETE, this, this.funcAfterAni3);
            this._viewUI.ani4.on(LEvent.COMPLETE, this, this.funcAfterAni4);

            if (WebConfig.isSingleEnter) {
                let pname: string = localGetItem("txt_account");
                if (!pname || pname.toLowerCase() == "null") pname = "";
                this._viewUI.txt_account.text = pname;
                // this._viewUI.txt_psd.text = localGetItem("keyword") || ""
                this.changeToPwd();
                this._viewUI.txt_account.maxChars = 20;
                this._viewUI.txt_psd.maxChars = 20;
                this._viewUI.txt_account.on(LEvent.INPUT, this, this.onChange);
                this._viewUI.txt_account.prompt = "请输入账号…";
                this._viewUI.txt_psd.restrict = "";
                this._viewUI.txt_account.restrict = "";
                this._viewUI.btn_account_clear.visible = this._viewUI.txt_account.text.length > 0;

                this._viewUI.txt_psd.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_account.on(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_psd.on(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_account.on(LEvent.BLUR, this, this.onBlur);
                this._notStageClickUI = [this._inputPhone, this._inputCode, this._inputSetPsd, this._inputSetNewPsd];
                this._viewUI.btn_account_clear.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD && this._viewUI.txt_account.text.length > 0;
            } else {
                let pname: string = localGetItem("txt_account");
                if (!pname || pname.toLowerCase() == "null") pname = "";
                this._inputAccount.input.text = pname;
                // this._inputPsd.input.text = localGetItem("keyword") || "";

                this._inputAccount.settext(this._game, this._promptColor, "请输入手机号/账户...", this._inputColor, 26, 20, MyTextInput.TYPE_INPUT_ENGLISH);
                this._inputPsd.settext(this._game, this._promptColor, "请输入密码...", this._inputColor, 26, 20, MyTextInput.TYPE_INPUT_ENGLISH, true);
                this._notStageClickUI = [this._inputPhone, this._inputCode, this._inputAccount, this._inputPsd, this._inputSetPsd, this._inputSetNewPsd];
                this._inputAccount.input.on(LEvent.INPUT, this, this.onChange);
                this._inputAccount.on(LEvent.CLICK, this, this.onClickHandle);
                this._inputPsd.on(LEvent.CLICK, this, this.onClickHandle);
                this._viewUI.btn_account_clear.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD && this._inputAccount.input.text.length > 0;
            }
            this._inputPhone.settext(this._game, this._promptColor, "请输入手机号...", this._inputColor, 26, 11, MyTextInput.TYPE_INPUT_NUMBER, false, null, true);
            this._inputCode.settext(this._game, this._promptColor, "请输入验证码...", this._inputColor, 26, 6, MyTextInput.TYPE_INPUT_NUMBER);
            this._inputSetPsd.settext(this._game, this._promptColor, "请设置密码...", this._inputColor, 26, 10, MyTextInput.TYPE_INPUT_ENGLISH, false);
            this._inputSetNewPsd.settext(this._game, this._promptColor, "请设置新密码...", this._inputColor, 26, 10, MyTextInput.TYPE_INPUT_ENGLISH, false);
            this._inputPhone.on(LEvent.CLICK, this, this.onClickHandle);
            this._inputCode.on(LEvent.CLICK, this, this.onClickHandle);
            this._inputSetPsd.on(LEvent.CLICK, this, this.onClickHandle);
            this._inputSetNewPsd.on(LEvent.CLICK, this, this.onClickHandle);
            this._game.datingGame.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);

            this._viewUI.box_login_phone.visible = false;
            this._viewUI.box_registered.visible = false;
            this._viewUI.box_set_psd.visible = false;
            this._viewUI.box_phone.visible = this._type == LoginBindPage.TYPE_BIND_PHONE || this._type == LoginBindPage.TYPE_RESET_PASSWORD;
            this._viewUI.lab_kefu.visible = this._type == LoginBindPage.TYPE_RESET_PASSWORD;
            this._viewUI.btn_phone_clear.visible = false;
            this._viewUI.box_login_account.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD;
            this._viewUI.btn_see_psd.visible = this._type == LoginBindPage.TYPE_LOGIN_PASSWORD && !WebConfig.isSingleEnter;
            this._viewUI.box_bind.visible = this._type == LoginBindPage.TYPE_BIND_PHONE;
            this._viewUI.box_reset.visible = this._type == LoginBindPage.TYPE_RESET_PASSWORD;
            this._viewUI.btn_close.visible = true;
            if (this._type == LoginBindPage.TYPE_RESET_PASSWORD) {//重置密码界面显示已绑定手机
                this._inputPhone.input.text = WebConfig.info.mobile;
                this._inputPhone.prompt.text = "";
                //获取重置密码验证码冷却中
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime && this._game.datingGame.codeMgr.type == CodeMgr.GET_CODE_TYPE_RESET) {
                    this._inputPhone.input.text = this._game.datingGame.codeMgr.mobile;
                    this._inputPhone.prompt.text = "";
                }
            }
            if (this._viewUI.box_phone.visible) {//通用的手机获取验证码界面
                this._viewUI.btn_get_code.visible = true;
                this._viewUI.box_send_over.visible = !this._viewUI.btn_get_code.visible;
            }
            if (LoginBindPage.TYPE_BIND_PHONE) {//获取手机绑定验证码冷却中
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime && this._game.datingGame.codeMgr.type == CodeMgr.GET_CODE_TYPE_BIND) {
                    this._inputPhone.input.text = this._game.datingGame.codeMgr.mobile;
                    this._inputPhone.prompt.text = "";
                }
            }
        }

        private _notStageClickUI: Laya.Node[]; //不响应舞台点击UI对象集合
        protected onMouseClick(e: LEvent) {
            if (WebConfig.isSingleEnter) return;
            for (let index = 0; index < this._notStageClickUI.length; index++) {
                let v = this._notStageClickUI[index];
                if (v.contains(e.target)) {
                    return;
                }
            }
            if (this._viewUI == this._game.datingGame.jianPanMgr.pageUI) {
                this._game.datingGame.jianPanMgr.closeJianPan();
            }
            else if (e.target instanceof Box && e.target.parent == this._viewUI) {
                this.close();
            }
        }

        /**
		 * 黑底点击事件
		 */
        protected onBlackSpriteClick(): void {
            if (this._isClickBlack) {
                if (this._view == this._game.datingGame.jianPanMgr.pageUI) {
                    this._game.datingGame.jianPanMgr.closeJianPan();
                } else {
                    this.close();
                }
            }
        }

        private _isCheck: boolean = false;
        //文本输入更新
        private onUpdateInput() {
            //去除掉空格
            let inputPhoneInputText: string;
            if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputAccount) {
                this.onChange();
            }
            else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputPhone) {
                inputPhoneInputText = removeSpaceStr(this._inputPhone.input.text);
                this._viewUI.btn_phone_clear.visible = inputPhoneInputText.length > 0;
            }
            else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputCode) {
                if (this._inputCode.input.text.length == 6) {
                    if (this._isCheck) {
                        return;
                    }
                    this._isCheck = true;
                    inputPhoneInputText = removeSpaceStr(this._inputPhone.input.text);
                    Laya.timer.once(1000, this, () => { this._isCheck = false; })
                    if (!inputPhoneInputText || inputPhoneInputText.length < 11) {
                        this._game.showTips("请输入正确手机号码！")
                        return;
                    }

                    if (!this._inputCode.input.text) {
                        this._game.showTips("验证码不能为空");
                        return;
                    }
                    if (this._type == LoginBindPage.TYPE_BIND_PHONE) {//手机绑定
                        if (WebConfig.info) {
                            this._game.network.call_bind(WebConfig.account, Web_operation_fields.ACCOUNT_TYPE_MOBILE, "", "", "", "", inputPhoneInputText, this._inputCode.input.text, WebConfig.device, WebConfig.info.invite_code);
                            this._game.datingGame.jianPanMgr.closeJianPan();
                            this._viewUI.ani1.play(0, true);
                            this._viewUI.box_send_over.visible = false;
                            this._viewUI.btn_get_code.visible = false;
                        }
                    }
                    else if (this._type == LoginBindPage.TYPE_RESET_PASSWORD) {//手机重置密码 校验验证码
                        this._game.network.call_check_login_vf(inputPhoneInputText, this._inputCode.input.text, WebConfig.server_name);
                        this._game.datingGame.jianPanMgr.closeJianPan();
                        this._viewUI.ani1.play(0, true);
                        this._viewUI.box_send_over.visible = false;
                    }
                    else {//手机验证码登录游戏
                        let data = {
                            mobile: inputPhoneInputText,
                            code: this._inputCode.input.text,
                        };

                        this._game.sceneGame.login("LoginBindPage Mobile Login", Web_operation_fields.ACCOUNT_TYPE_MOBILE, data);
                    }
                }
            } else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputSetPsd) {
                length = this._inputSetPsd.input.text.length;
                if (length >= 6 && length <= 10) {
                    this._viewUI.btn_set_over.visible = true;
                    this._viewUI.lab_tip.visible = false;
                } else {
                    this._viewUI.btn_set_over.visible = false;
                    this._viewUI.lab_tip.visible = true;
                }
            } else if (this._game.datingGame.jianPanMgr.inputTextUI == this._inputSetNewPsd) {
                length = this._inputSetNewPsd.input.text.length;
                if (length >= 6 && length <= 10) {
                    this._viewUI.btn_sure.visible = true;
                    this._viewUI.lab_tip1.visible = false;
                } else {
                    this._viewUI.btn_sure.visible = false;
                    this._viewUI.lab_tip1.visible = true;
                }
            }
        }

        //获取焦点（单入口专用）
        private onFocus(input) {
            if (input == this._viewUI.txt_psd) {
                this._viewUI.txt_psd.text = this._dlmm;
            }
            this._viewUI.box.centerY = -200;
        }

        //失去焦点（单入口专用）
        private onBlur(input) {
            if (input == this._viewUI.txt_psd) {
                this.changeToPwd();
            }
            this._viewUI.box.centerY = 0;
        }

        private _dlmm: string;
        private changeToPwd() {
            this._dlmm = this._viewUI.txt_psd.text;
            let key: string = ""
            for (let i = 0; i < this._dlmm.length; i++) {
                key += "●";
            }
            this._viewUI.txt_psd.text = key;
        }

        private onChange() {
            if (WebConfig.isSingleEnter) {
                this._viewUI.btn_account_clear.visible = this._viewUI.txt_account.text.length > 0;
                this._viewUI.txt_psd.text = "";
                this._dlmm = "";
            } else {
                this._inputPsd.prompt.text = "请输入密码...";
                this._inputPsd.input.text = "";
                this._inputPsd.password = "";
                this._viewUI.btn_account_clear.visible = this._inputAccount.input.text.length > 0;
            }
            // localRemoveItem("keyword")
        }


        protected onBtnTweenEnd(e: any, target: any) {
            //去除掉空格
            let inputPhoneInputText: string = this._inputPhone && removeSpaceStr(this._inputPhone.input.text);
            if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_LOGIN_PHONE) {//获取登录验证码
                if (!inputPhoneInputText || inputPhoneInputText.length < 11) {
                    this._game.showTips("请输入正确手机号码！")
                    return;
                }
                //发送的是同个手机号，与上次获取的验证码类型相同，并且下次获取手机登录验证码时间还在冷却中
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime && inputPhoneInputText == this._game.datingGame.codeMgr.mobile && this._game.datingGame.codeMgr.type == CodeMgr.GET_CODE_TYPE_LOGIN) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_cold.visible = false;
                    this._viewUI.lab_get_code.visible = true;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.showTips("验证码已发送，请查看短信");
                    return;
                }
                this._game.sceneGame.connectSoctet(() => {
                    this._game.network.call_get_login_vf(WebConfig.server_name, inputPhoneInputText);
                }, "LoginBindPage get_login_code")

            }
            else if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_BIND_PHONE) {//获取绑定验证码
                if (!inputPhoneInputText || inputPhoneInputText.length < 11) {
                    this._game.showTips("请输入正确手机号码！")
                    return;
                }
                //发送的是同个手机号，与上次获取的验证码类型相同，并且下次获取手机绑定验证码时间还在冷却中
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime && inputPhoneInputText == this._game.datingGame.codeMgr.mobile && this._game.datingGame.codeMgr.type == CodeMgr.GET_CODE_TYPE_BIND) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_cold.visible = false;
                    this._viewUI.lab_get_code.visible = true;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.showTips("验证码已发送，请查看短信");
                    return;
                }
                this._game.network.call_get_bindvf(inputPhoneInputText)
            }
            else if ((target == this._viewUI.btn_get_code || target == this._viewUI.lab_get_code) && this._type == LoginBindPage.TYPE_RESET_PASSWORD) {//获取重置验证码
                if (!inputPhoneInputText || inputPhoneInputText.length < 11) {
                    this._game.showTips("请输入正确手机号码！")
                    return;
                }
                //发送的是同个手机号，与上次获取的验证码类型相同，并且下次获取重置密码验证码时间还在冷却中
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime && inputPhoneInputText == this._game.datingGame.codeMgr.mobile && this._game.datingGame.codeMgr.type == CodeMgr.GET_CODE_TYPE_RESET) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_cold.visible = false;
                    this._viewUI.lab_kefu.visible = false;
                    this._viewUI.lab_get_code.visible = true;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.showTips("验证码已发送，请查看短信");
                    return;
                }
                this._game.network.call_get_reset_code(inputPhoneInputText)
            }
            else if (target == this._viewUI.btn_set_over) {//新用户，绑定账号，设置密码
                if (!inputPhoneInputText) {
                    this._game.showTips("账号不能为空");
                    return;
                }
                let password: string = this._inputSetPsd.isPassword ? this._inputSetPsd.password : this._inputSetPsd.input.text;
                if (!password) {
                    this._game.showTips("请输入密码")
                    return;
                }
                if (password.length < 6) {
                    this._game.showTips("密码需要6~10位英文数字")
                    return;
                }
                // if (WebConfig.info) {
                this._game.network.call_bind("", Web_operation_fields.ACCOUNT_TYPE_USERNAME, "", inputPhoneInputText, password, password, "", "", WebConfig.device, "")
                // }
            }
            else if (target == this._viewUI.btn_sure) {//重置密码
                if (!inputPhoneInputText) {
                    this._game.showTips("账号不能为空");
                    return;
                }
                let new_password: string = this._inputSetNewPsd.isPassword ? this._inputSetNewPsd.password : this._inputSetNewPsd.input.text;
                if (!new_password) {
                    this._game.showTips("请输入密码")
                    return;
                }
                if (new_password.length < 6) {
                    this._game.showTips("密码需要6~10位英文数字")
                    return;
                }
                if (WebConfig.info) {
                    let data2 = {
                        server_name: WebConfig.server_name,
                        mobile: inputPhoneInputText,
                        vfcode: this._inputCode.input.text,
                        pwd1: new_password,
                        pwd2: new_password,
                    };

                    this._game.network.call_reset_pwd(data2.vfcode, data2.pwd1, data2.pwd2);
                }
            }
            else if (target == this._viewUI.btn_login) {
                if (this.onInputChanged()) return;
                if (WebConfig.isSingleEnter) {
                    let name = this._viewUI.txt_account.text;
                    let mima = this._dlmm;
                    let accout: string = name.trim();
                    let pwd: string = mima.trim();
                    if (!accout.length || accout.toLowerCase() == "null") {
                        this._game.showTips("请输入正确的账号");
                        return;
                    }
                    if (!mima.length || mima.toLowerCase() == "null") {
                        this._game.showTips("请输入密码");
                        return;
                    }
                    //写入本地缓存
                    localSetItem("txt_account", accout || "");
                    // localSetItem("keyword", pwd || "");
                    this._game.sceneGame.login("LoginBindPage Account Login", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                } else {
                    let name = this._inputAccount.input.text;
                    let mima = this._inputPsd.isPassword ? this._inputPsd.password : this._inputPsd.input.text;
                    let accout: string = name.trim();
                    let pwd: string = mima.trim();
                    if (!accout.length || accout.toLowerCase() == "null") {
                        this._game.showTips("请输入正确的账号");
                        return;
                    }
                    if (!mima.length || mima.toLowerCase() == "null") {
                        this._game.showTips("请输入密码");
                        return;
                    }
                    //写入本地缓存
                    localSetItem("txt_account", this._inputAccount.input.text || "");
                    // localSetItem("keyword", this._inputPsd.password || "");
                    this._game.sceneGame.login("LoginBindPage Account Login", Web_operation_fields.ACCOUNT_TYPE_USERNAME, { account: accout, pwd: pwd });
                }
            }
            else if (target == this._viewUI.lab_kefu) {
                this._game.uiRoot.general.open(DatingPageDef.PAGE_KEFU);
            }
            else if (target == this._viewUI.lab_login_account) {
                this._viewUI.box_login_account.visible = true;
                this._viewUI.box_login_phone.visible = false;
                this._viewUI.box_phone.visible = false;
                this._viewUI.btn_close.visible = true;
                this._type = LoginBindPage.TYPE_LOGIN_PASSWORD;
            }
            else if (target == this._viewUI.lab_login_phone) {
                this._viewUI.box_login_account.visible = false;
                this._viewUI.box_send_over.visible = false;
                this._viewUI.box_login_phone.visible = true;
                this._viewUI.box_phone.visible = true;
                this._viewUI.btn_close.visible = true;
                this._type = LoginBindPage.TYPE_LOGIN_PHONE;
                if (this._game.sync.serverTimeBys < this._game.datingGame.codeMgr.nextGetCodeTime) {
                    this._inputPhone.input.text = this._game.datingGame.codeMgr.mobile;
                    this._inputPhone.prompt.text = "";
                }
            }
            else if (target == this._viewUI.btn_see_psd) {//密码登录， 密码是否可见
                if (WebConfig.isSingleEnter) return;
                if (this._viewUI.btn_see_psd.skin == DatingPath.ui_dating + "tongyong/btn_eyeon.png") {
                    this._viewUI.btn_see_psd.skin = DatingPath.ui_dating + "tongyong/btn_eyeoff.png"
                    this._inputPsd.showPassword(true);
                } else {
                    this._viewUI.btn_see_psd.skin = DatingPath.ui_dating + "tongyong/btn_eyeon.png"
                    this._inputPsd.showPassword(false);
                }
            }
            else if (target == this._viewUI.btn_see_newpsd) {//注册设置密码， 密码是否可见
                if (this._viewUI.btn_see_newpsd.skin == DatingPath.ui_dating + "tongyong/btn_eyeon.png") {
                    this._viewUI.btn_see_newpsd.skin = DatingPath.ui_dating + "tongyong/btn_eyeoff.png"
                    this._inputSetPsd.showPassword(true);
                } else {
                    this._viewUI.btn_see_newpsd.skin = DatingPath.ui_dating + "tongyong/btn_eyeon.png"
                    this._inputSetPsd.showPassword(false);
                }
            }
            else if (target == this._viewUI.btn_see_newpsd1) {//重置密码， 密码是否可见
                if (this._viewUI.btn_see_newpsd1.skin == DatingPath.ui_dating + "tongyong/btn_eyeon.png") {
                    this._viewUI.btn_see_newpsd1.skin = DatingPath.ui_dating + "tongyong/btn_eyeoff.png"
                    this._inputSetNewPsd.showPassword(true);
                } else {
                    this._viewUI.btn_see_newpsd1.skin = DatingPath.ui_dating + "tongyong/btn_eyeon.png"
                    this._inputSetNewPsd.showPassword(false);
                }
            }
            else if (target == this._viewUI.btn_phone_clear) {
                this._inputPhone.clearInput();
                this._viewUI.btn_phone_clear.visible = false;
            }
            else if (target == this._viewUI.btn_account_clear) {
                if (WebConfig.isSingleEnter) {
                    this._viewUI.txt_account.text = "";
                    this._viewUI.btn_account_clear.visible = false;
                } else {
                    this._inputAccount.clearInput();
                    this._viewUI.btn_account_clear.visible = false;
                }
            }
        }

        //文本框点击事件
        private onClickHandle(e: LEvent) {
            if (e.currentTarget == this._inputPhone) {
                if (this._type != LoginBindPage.TYPE_RESET_PASSWORD) {
                    this.openJianPan(this._inputPhone, this._viewUI, -170);
                }
            }
            else if (e.currentTarget == this._inputCode) {
                this.openJianPan(this._inputCode, this._viewUI, -170);
            }
            else if (e.currentTarget == this._inputAccount) {
                this.openJianPan(this._inputAccount, this._viewUI, -170);
            }
            else if (e.currentTarget == this._inputPsd) {
                this.openJianPan(this._inputPsd, this._viewUI, -170);
            }
            else if (e.currentTarget == this._inputSetPsd) {
                this.openJianPan(this._inputSetPsd, this._viewUI, -170);
            }
            else if (e.currentTarget == this._inputSetNewPsd) {
                this.openJianPan(this._inputSetNewPsd, this._viewUI, -170);
            }
        }

        private onInputChanged() {
            if (WebConfig.isSingleEnter) {
                if (this._viewUI.txt_account.text.indexOf("@debugasdf") != -1) {
                    this._game.showTips("GM打开")
                    WebConfig.gameGmOpen = true;
                    WebConfig.VConsole();
                    return true;
                }
            } else {
                if (this._inputAccount.input.text.indexOf("@debugasdf") != -1) {
                    this._game.showTips("GM打开")
                    WebConfig.gameGmOpen = true;
                    WebConfig.VConsole();
                    return true;
                }
            }
        }

        private openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
            this._game.datingGame.jianPanMgr.openJianPan(textUI, viewUI, centerY);
        }

        private onOptHandler(optcode: number, msg: any): void {
            if (msg.type == Operation_Fields.OPRATE_WEB) {//与web交互操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_WEB_FAIL_RESULT:     // web返回的错误信息
                        if (msg.data == 24) {//绑定验证码错误
                            this._viewUI.ani1.gotoAndStop(0);
                            this._viewUI.ani2.play(0, false);
                            this._inputCode.visible = false;
                            this._inputCode.clearInput();
                            this._viewUI.box_send_over.visible = true;
                        }
                        else if (msg.data == 164) {//重置验证码错误
                            this._viewUI.ani1.gotoAndStop(0);
                            this._viewUI.ani2.play(0, false);
                            this._inputCode.visible = false;
                            this._inputCode.clearInput();
                            this._viewUI.box_send_over.visible = !this._viewUI.btn_get_code.visible;
                        }
                        else if (msg.data == 19) {//手机已被绑定
                            this._viewUI.ani1.gotoAndStop(0);
                            this._inputCode.clearInput();
                            this._viewUI.btn_get_code.visible = true;
                        }
                        else if (msg.data == 33) {//密码错误
                            if (WebConfig.isSingleEnter) return;
                            this._viewUI.ani4.play(0, false);
                            this._inputPsd.visible = false;
                            this._inputPsd.clearInput();
                        }
                        break;
                }
            }
            else if (msg.type == Operation_Fields.OPRATE_GAME) {//游戏操作错误类型
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_BIND_GIFT_SUCCESS:             // 绑定送金成功
                        this._bingMoney = msg.data;
                        break;
                }
            }
        }

		/**
		 * 帧间隔心跳
		 */
        deltaUpdate() {
            if (!this._isLoop) return;
            this.countdown();
        }

        private _isLoop: boolean = false;
        private _bingMoney: number = 0;
        protected onSucessHandler(data: any) {
            if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) {//手机绑定成功
                if (data && data.success == 0) {
                    if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_MOBILE) {
                        this._viewUI.ani1.gotoAndStop(0);
                        this._viewUI.ani3.play(0, false);
                    } else if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_USERNAME) {
                        this.close();
                    }
                }
            }
            else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETLOGINVF) {//获取登录验证码
                if (data && data.success == 0) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.datingGame.codeMgr.type = CodeMgr.GET_CODE_TYPE_LOGIN;
                    this._game.datingGame.codeMgr.mobile = data.msg.mobile;
                    this._game.datingGame.codeMgr.nextGetCodeTime = this._game.sync.serverTimeBys + 60;
                    this._isLoop = true;
                    this._game.showTips("发送验证码成功");
                }
            }
            else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBINDVF) {//获取绑定验证码
                if (data && data.success == 0) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.datingGame.codeMgr.type = CodeMgr.GET_CODE_TYPE_BIND;
                    this._game.datingGame.codeMgr.mobile = data.msg.mobile;
                    this._game.datingGame.codeMgr.nextGetCodeTime = this._game.sync.serverTimeBys + 60;
                    this._isLoop = true;
                    this._game.showTips("发送验证码成功");
                }
            }
            else if (data.code == Web_operation_fields.CLIENT_IRCODE_RPWDVF) {//获取重置验证码
                if (data && data.success == 0) {
                    this._viewUI.btn_get_code.visible = false;
                    this._viewUI.lab_login_account.visible = false;
                    this._viewUI.box_send_over.visible = true;
                    this._viewUI.lab_kefu.visible = false;
                    this._viewUI.lab_send_phone.text = this._inputPhone.input.text;
                    this._game.datingGame.codeMgr.type = CodeMgr.GET_CODE_TYPE_RESET;
                    this._game.datingGame.codeMgr.mobile = data.msg.mobile;
                    this._game.datingGame.codeMgr.nextGetCodeTime = this._game.sync.serverTimeBys + 60;
                    this._isLoop = true;
                    this._game.showTips("获取验证码成功");
                }
            }
            else if (data.code == Web_operation_fields.CLIENT_IRCODE_CHECKLOGINVF) {//验证码通过
                if (data && data.success == 0) {
                    //重置密码
                    this._viewUI.box_reset.visible = true;
                    this._viewUI.box_login_phone.visible = false;
                    this._viewUI.box_phone.visible = false;
                    this._viewUI.box_set_psd.visible = true;
                    this._viewUI.btn_sure.visible = false;
                    this._viewUI.lab_kefu.visible = false;
                }
            }
            else if (data.code == Web_operation_fields.CLIENT_IRCODE_RESETPWD) {//重置密码成功
                if (data && data.success == 0) {
                    this._game.showTips("设置新密码成功");
                    this.close();
                }
            }
        }

        private funcAfterAni2() {
            this._viewUI.btn_close.visible = true;
            this._inputCode.visible = true;
        }

        private funcAfterAni3() {
            this._viewUI.box_registered.visible = true;
            this._viewUI.btn_set_over.visible = false;
            this._viewUI.box_phone.visible = false;
            this._viewUI.box_bind.visible = false;
        }

        private funcAfterAni4() {
            this._inputPsd.visible = true;
        }

        private countdown() {
            let curtime = this._game.sync.serverTimeBys;
            let difftime = Math.floor(this._game.datingGame.codeMgr.nextGetCodeTime - this._game.sync.serverTimeBys);
            if (difftime > 0) {
                this._viewUI.lab_reget.text = StringU.substitute("（{0}）", difftime);
                this._viewUI.box_cold.visible = true;
                this._viewUI.lab_get_code.visible = !this._viewUI.box_cold.visible;
            } else {
                this._viewUI.lab_reget.text = StringU.substitute("（{0}）", difftime);
                this._viewUI.box_cold.visible = false;
                this._viewUI.lab_get_code.visible = !this._viewUI.box_cold.visible;
                this._isLoop = false;
            }
        }

        // 清理下页面
        close(): void {
            if (this._viewUI) {
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
                this._viewUI.ani2.off(LEvent.COMPLETE, this, this.funcAfterAni2);
                this._viewUI.ani3.off(LEvent.COMPLETE, this, this.funcAfterAni3);
                this._viewUI.ani4.off(LEvent.COMPLETE, this, this.funcAfterAni4);
                this._viewUI.txt_psd.off(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_account.off(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_phone.off(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_code.off(LEvent.FOCUS, this, this.onFocus);
                this._viewUI.txt_psd.off(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_account.off(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_phone.off(LEvent.BLUR, this, this.onBlur);
                this._viewUI.txt_code.off(LEvent.BLUR, this, this.onBlur);
                if (this._inputAccount) {
                    this._inputAccount.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputAccount.destroy();
                    this._inputAccount = null;
                }
                if (this._inputPsd) {
                    this._inputPsd.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputPsd.destroy();
                    this._inputPsd = null;
                }
                if (this._inputSetPsd) {
                    this._inputSetPsd.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputSetPsd.destroy();
                    this._inputSetPsd = null;
                }
                if (this._inputSetNewPsd) {
                    this._inputSetNewPsd.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputSetNewPsd.destroy();
                    this._inputSetNewPsd = null;
                }
                if (this._inputPhone) {
                    this._inputPhone.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputPhone.destroy();
                    this._inputPhone = null;
                }
                if (this._inputCode) {
                    this._inputCode.off(LEvent.CLICK, this, this.onClickHandle);
                    this._inputCode.destroy();
                    this._inputCode = null;
                }
                //只要绑定送金大于0，关闭就弹出奖励界面
                if (this._bingMoney > 0) {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_GET_REWARD, (page: gamedating.page.RewardPage) => {
                        page.setData(this._bingMoney, DatingPath.ui_dating + "/qiandao/jl_4.png");
                    })
                }
                //如果验证码管理器的手机信息超时了就清掉
                if (this._game.sync.serverTimeBys > this._game.datingGame.codeMgr.nextGetCodeTime) {
                    this._game.datingGame.codeMgr.type = 0;
                    this._game.datingGame.codeMgr.mobile = "";
                    this._game.datingGame.codeMgr.nextGetCodeTime = 0;
                }
            }
            super.close();
        }
    }
}