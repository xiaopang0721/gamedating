module gamedating.page {
    /**
     * 登陆界面
     */
    export class LoginPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.dating.DengLuUI;
        private _bgView: LoadingDH;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
                DatingPath.atlas_dating_ui + "denglu.atlas",
                DatingPath.atlas_dating_ui + "denglurk.atlas",
                DatingPath.atlas_dating_ui + "tongyong.atlas",
                DatingPath.atlas_dating_ui + "chongzhi.atlas",
            ];

            this._isNeedDuang = false;
            this.mouseThrough = true;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.DengLuUI", ["dating.Loading_DHUI"]);
            this.addChild(this._viewUI);
            this._bgView = new LoadingDH(1);
            this._bgView.left = this._bgView.right = -1;
            this._bgView.bottom = this._bgView.top = -1;
            this._viewUI.addChildAt(this._bgView, 0);
            this._bgView.onOpen(this._game);

        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.btn_denglu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_youke.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_wx.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            //初始化音量大小
            let soundVolume = localGetItem("soundVolume");
            let value = 0.15;
            if (soundVolume == null || soundVolume == undefined) {
                localSetItem("soundVolume", value.toString());
                Laya.SoundManager.setSoundVolume(value);
            }
            let musicVolume = localGetItem("musicVolume");
            if (musicVolume == null || soundVolume == undefined) {
                Laya.SoundManager.setMusicVolume(value);
                localSetItem("musicVolume", value.toString());
            }

            //单入口弹出账号登录界面
            if (WebConfig.isSingleEnter) {
                this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
                    page.dataSource = LoginBindPage.TYPE_LOGIN_PASSWORD;
                });
            }
        }

        protected onBtnTweenEnd(e: any, target: any) {
            switch (target) {
                case this._viewUI.btn_denglu://密码登陆
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
                        page.dataSource = LoginBindPage.TYPE_LOGIN_PASSWORD;
                    });
                    break;
                case this._viewUI.btn_youke://游客登陆                    
                    this._game.sceneGame.login("LoginBindPage guest", Web_operation_fields.ACCOUNT_TYPE_GUEST);
                    break;
                case this._viewUI.btn_wx://微信登陆
                    this._game.datingGame.wxLogin();
                    break;
            }
        }

        // 清理下页面
        close(): void {
            if (this._viewUI) {
                if (this._bgView) {
                    this._bgView.close();
                    this._bgView.removeSelf();
                    this._bgView.destroy();
                    this._bgView = null;
                }

            }
            super.close();
        }


    }
}