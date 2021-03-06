/**
* name 个人信息
*/
module gamedating.page {
	import GeRenApiBaoBiao = gamedating.component.GeRenApiBaoBiao;
	import GeRenApiTouZhu = gamedating.component.GeRenApiTouZhu;
	export class GeRenXinXiPage extends game.gui.base.Page {
		//个人中心
		static readonly TYPE_GRZX: number = 1;
		//收支报表
		static readonly TYPE_SZBB: number = 2;
		//投注记录
		static readonly TYPE_TZJL: number = 3;
		//个人报表
		static readonly TYPE_GRBB: number = 4;
		//游戏设置
		static readonly TYPE_YXSZ: number = 5;


		private _viewUI: ui.ajqp.dating.GeRenUI;
		private _inputOldKey: MyTextInput;
		private _inputNewKey: MyTextInput;
		private _inputQueRenNewKey: MyTextInput;
		private _inputCode: MyTextInput;
		private _inputKey: MyTextInput;
		private _inputKey1: MyTextInput;
		private _selectColor: string;	//选中颜色
		private _unSelectColor: string;	//未选中颜色
		private _api_data: Array<number> = [GeRenXinXiPage.TYPE_GRZX, GeRenXinXiPage.TYPE_SZBB, GeRenXinXiPage.TYPE_TZJL, GeRenXinXiPage.TYPE_GRBB, GeRenXinXiPage.TYPE_YXSZ]	//api标题数据
		private _api_bb: GeRenApiBaoBiao;
		private _api_tz: GeRenApiTouZhu;
		private _normal_data: Array<number> = [GeRenXinXiPage.TYPE_GRZX, GeRenXinXiPage.TYPE_SZBB, GeRenXinXiPage.TYPE_YXSZ]	//正常版数据

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "geren.atlas",
				DatingPath.atlas_dating_ui_tongyong + "di.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedBlack = true;
		}

		private _gmTxt: Laya.Label;
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.GeRenUI", ["dating.SheZhiUI"]);
			this.addChild(this._viewUI);
			this._viewUI.box_app.visible = WebConfig.appVersion;
			this._viewUI.txt_appbbh.text = WebConfig.appVersion;
			this._viewUI.box_v.visible = Vesion["_defaultVesion"];
			this._viewUI.txt_bbh.text = Vesion["_defaultVesion"];
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_set_psd.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_check.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			if (WebConfig.gameGmOpen) {
				if (!this._gmTxt) {
					this._gmTxt = new Laya.Label();
					this._gmTxt.fontSize = 14;
					this._gmTxt.align = "center";
					this._gmTxt.bold = true;
					this._gmTxt.color = "#00ff47";
					this._gmTxt.text = "点我变魔术";
					this._gmTxt.left = this._gmTxt.top = 20;
					this.addChild(this._gmTxt);
					this._gmTxt.on(LEvent.CLICK, this, this.onMouseGMHandle);
				}
			} else {
				if (this._gmTxt) {
					this._gmTxt.removeSelf();
					this._gmTxt.destroy();
					this._gmTxt = null;
				}
			}
		}

		private onMouseGMHandle() {
			let page = this._game.uiRoot.top.getPage(DatingPageDef.PAGE_GM);
			if (!page)
				this._game.uiRoot.top.open(DatingPageDef.PAGE_GM);
		}


		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this.initColor();

			this.initVolume();
			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.GeRen_TabRenderUI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderTabHandler);
			this._viewUI.list_tab.dataSource = WebConfig.isApiDJ ? this._api_data : this._normal_data;
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.selectedIndex = 0;
			this.selectHandler(0);

			this._viewUI.btn_bindwx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_bind_phone.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_copy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_changge_nc.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_head.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_recharge.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_select.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.list_bb.on(LEvent.CLICK, this, this.menuTween, [false]);
			this._viewUI.list_bb.dataSource = [];

			this._viewUI.btn_sound.on(LEvent.CLICK, this, this.onCheckClick);
			this._viewUI.btn_music.on(LEvent.CLICK, this, this.onCheckClick);
			this.initBaoBiaoUI();
			DatingGame.ins.baobiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);

			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this.onUpdatePlayerInfo()
		}

		private renderTabHandler(cell: TabItemRender, index: number): void {
			cell.setData(this._game, index, this._viewUI.list_tab.selectedIndex);
		}

		private changeHandler_list_tab(e?: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}

		private initColor(): void {
			this._selectColor = this._viewUI.lb_0.color;
			this._unSelectColor = this._viewUI.lb_time.color;
		}

		private _isUpdated: boolean;
		private selectHandler(index: number) {
			let v = this._viewUI.list_tab.dataSource[index];
			this._viewUI.list_tab.selectedIndex = index;
			this._viewUI.box0.visible = v == GeRenXinXiPage.TYPE_GRZX;
			this._viewUI.box1.visible = v == GeRenXinXiPage.TYPE_SZBB;
			if (index == 1) {
				this._isUpdated = false;
				this.onUpdateDataInfo();
			}
			this._viewUI.box2.visible = v == GeRenXinXiPage.TYPE_YXSZ;
			this._viewUI.box3.visible = v == GeRenXinXiPage.TYPE_TZJL;
			this._viewUI.box4.visible = v == GeRenXinXiPage.TYPE_GRBB;
			if (this._viewUI.box3.visible) {
				if (!this._api_tz) {
					this.addApiTZUI();
				}
			} else if (this._viewUI.box4.visible) {
				if (!this._api_bb) {
					this.addApiBBUI();
				}
			}
		}

		//投注ui
		private addApiTZUI(): void {
			this._api_tz = new GeRenApiTouZhu(this._game);
			this._viewUI.box3.addChild(this._api_tz);
		}

		//报表UI
		private addApiBBUI(): void {
			this._api_bb = new GeRenApiBaoBiao(this._game);
			this._viewUI.box4.addChild(this._api_bb);
		}

		//===================个人信息=================
		//更新个人信息下面按钮位置
		private _box_btn_bottom: { [key: number]: Laya.Box } = {};
		private updatePos() {
			let childNum = this._viewUI.box_items.numChildren;
			let total_y: number = 0;
			for (let index = 0; index < childNum; index++) {
				let item;
				if (!this._box_btn_bottom[index])//缓存下
				{
					this._box_btn_bottom[index] = this._viewUI.box_items.getChildByName("item" + index) as Laya.Box;
				}
				item = this._box_btn_bottom[index];
				if (!item || !item.visible) continue;
				item.y = total_y;
				total_y += item.height + 2;
			}
		}

		//上面信息
		private onUpdatePlayerInfo() {
			if (!this._viewUI) return;
			let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			this._viewUI.img_txk.skin = this._game.datingGame.getTouXiangKuangUrl(playerInfo.headKuang, 1);
			this._viewUI.img_head.skin = this._game.datingGame.getHeadUrl(playerInfo.headimg, 1);

			this._viewUI.lb_vip.text = StringU.substitute("vip {0}", playerInfo.vip_level);
			this._viewUI.txt_id.text = playerInfo.userid;
			this._viewUI.txt_money.text = playerInfo.money;
			this._viewUI.txt_nickname.text = playerInfo.nickname;
			this._viewUI.btn_changge_nc.visible = !playerInfo.isNicknameChanged
			// this._viewUI.box_wx.visible = !WebConfig.isSingleEnter && playerInfo.is_wx_open;			
			if (playerInfo.wx_unionid) {//绑定微信
				this._viewUI.txt_wx.text = "已绑定"//playerInfo.wx_unionid;
				this._viewUI.btn_bindwx.visible = false;
			} else {
				this._viewUI.txt_wx.text = "未绑定微信号";
				this._viewUI.btn_bindwx.visible = true;
			}
			if (playerInfo.mobile) {//绑定手机
				this._viewUI.txt_phone.text = playerInfo.mobile;
				this._viewUI.btn_bind_phone.visible = false;
			} else {
				this._viewUI.txt_phone.text = "未绑定手机号";
				this._viewUI.btn_bind_phone.visible = true;
			}

			this.updatePos();
		}

		//===================收支报表===================
		private initBaoBiaoUI(): void {
			this._viewUI.box_btn.visible = false;
			this._viewUI.btn_jiantou.rotation = -180;
			// this._viewUI.img_select.skin = DatingPath.ui_dating_tongyong + "tu_di11.png";
			this._viewUI.list_bb.visible = false;
			this._viewUI.txt_no.visible = false;
			this.initList();
			this._selectTime = this._game.sceneGame.sync.serverTimeBys;
			this._timeSelectIndex = 6;
			let curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
			for (let i = 0; i < 7; i++) {
				this._timeList[i] = this._selectTime - 86400 * (6 - i);
				let curTimeStr = Sync.getTimeStr3(this._timeList[i]);
				this._viewUI["lb_" + i].text = curTimeStr;
				this._viewUI["btn_select" + i].selected = curSelectedTimeStr == curTimeStr ? true : false;
				this._viewUI["lb_" + i].color = (i == 6) ? this._selectColor : this._unSelectColor;
				this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onMouseHandle, [i]);
			}

			this._viewUI.lb_time.text = curSelectedTimeStr;
		}

		private initList(): void {
			this._viewUI.list_bb.vScrollBarSkin = "";
			this._viewUI.list_bb.scrollBar.elasticDistance = 100;
			this._viewUI.list_bb.renderHandler = new Handler(this, this.renderHandler);
		}

		private renderHandler(cell: ui.ajqp.dating.GeRen1UI, index: number) {
			let data = this._dataInfo[index];
			if (cell && data) {
				cell.txt_index.text = data.rank + 1;
				cell.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "di/{0}.png", data.rank % 2 == 0 ? "tu_5" : "tu_6");
				let type_name = "";
				if (data.game_name == "微信扫雷红包") {
					type_name = EnumToString.getLimitStr(data.game_name, 2) + Web_operation_fields.client_money_logtype_table[data.type];
				} else {
					type_name = data.game_name + Web_operation_fields.client_money_logtype_table[data.type];
				}
				if (data.params) {
					let param = JSON.parse(data.params);
					if (param) {
						let pf_code = param.pf_code;
						let pt_name = ""
						if (pf_code) {
							pt_name = ApiMgr.PTNAME[pf_code - 1]
							if (data.type == Web_operation_fields.USE_MONEY_LOG_TYPE_API_DJ_ADD_SCORE) {
								//api上下分
								type_name = "转入" + pt_name;
							} else if (data.type == Web_operation_fields.USE_MONEY_LOG_TYPE_API_DJ_SUB_SCORE) {
								type_name = pt_name + "转出";
							}
						}
					}
				}
				cell.txt_type.text = type_name;
				cell.txt_time.text = Sync.getTimeShortStr(data.time * 1000);
				cell.txt_money.text = data.shouzhi ? data.shouzhi.toString() : "0";
				cell.txt_money.color = data.shouzhi > 0 ? "#41fe69" : "#ff0000";
				cell.txt_earn.text = data.money ? data.money.toString() : "0";
				let page = Math.floor((index + 10) / BaoBiaoMgr.PAGE_MAX) + 1;
				let curData = DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page]
				if (!curData) {
					let lastCurData = DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page - 1];
					if (lastCurData && lastCurData.length >= BaoBiaoMgr.PAGE_MAX) {
						DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex)[page] = {}
						if (index - this._lastIndex < BaoBiaoMgr.PAGE_MAX * 0.5) return;
						this._lastIndex = index;
						DatingGame.ins.baobiaoMgr.getData(page, this._selectTime, this._timeSelectIndex);
					}
				}
			}
		}

		private _lastIndex: number;
		private _selectTime: number;
		private _timeList: number[] = []
		private onMouseHandle(index: number, e: LEvent) {
			if (index == this._timeSelectIndex) return;
			this._viewUI.list_bb.scrollTo(0);
			this._lastIndex = 0;
			this._timeSelectIndex = index;
			this._selectTime = this._timeList[index];//选择的时间
			let curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
			this._viewUI.lb_time.text = curSelectedTimeStr;
			for (let i = 0; i < 7; i++) {
				let curTimeStr = this._viewUI["lb_" + i].text;
				this._viewUI["btn_select" + i].selected = curSelectedTimeStr == curTimeStr ? true : false;
				this._viewUI["lb_" + i].color = (i == index) ? this._selectColor : this._unSelectColor;
			}
			//当天的话，数据重新获取
			if (this._timeSelectIndex == 6) DatingGame.ins.baobiaoMgr.getData(1, this._selectTime, this._timeSelectIndex);
			this.menuTween(false);
			this.onUpdateDataInfo();
		}

		private _dataInfo: any[];
		//当前选中的 时间位置
		private _timeSelectIndex: number;
		private _isInitDaysUI: boolean = false;
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex);
			let count: number = 0;
			//日期图标显隐,不必重复做
			if (DatingGame.ins.baobiaoMgr.timeTotalNumArr) {
				if (!this._isInitDaysUI) {
					this._isInitDaysUI = true;
					for (let i = 0; i < 7; i++) {
						let curTimeStr = Sync.getTimeStr3(this._timeList[i]);
						this._viewUI["btn_day" + i].visible = DatingGame.ins.baobiaoMgr.isCurDayHaveNum(curTimeStr) ? true : false;
					}
				}
			}

			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_no.visible = !count;
			this._viewUI.list_bb.visible = count > 0;
			if ((!count && !data) || !this._isUpdated) {
				DatingGame.ins.baobiaoMgr.getData(1, this._selectTime, this._timeSelectIndex);
				this._isUpdated = true;
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];

							aa["rank"] = index + parseInt(key) * BaoBiaoMgr.PAGE_MAX - BaoBiaoMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}
			this._viewUI.list_bb.dataSource = this._dataInfo;
		}

		//===================游戏设置==================
		//初始化聲音界面
		private initVolume() {
			this._viewUI.hslider0.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider0.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider0.tick = 0.01;//设置 this.hslider0 刻度值。
			this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0);//设置 this.hslider0 位置变化处理器。
			this._viewUI.hslider0.value = Laya.SoundManager.soundVolume;//设置 this.hslider0 当前位置值。

			this._viewUI.hslider1.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider1.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider1.tick = 0.01;//设置 this.hslider0 刻度值。
			this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1);//设置 this.hslider0 位置变化处理器。
			this._viewUI.hslider1.value = Laya.SoundManager.musicVolume;//设置 this.hslider0 当前位置值。
		}

		private onChange0(value: number) {
			value = parseFloat(value.toFixed(2));
			if (value > 0) {
				this._viewUI.btn_sound.selected = true;
			} else {
				this._viewUI.btn_sound.selected = false;
			}
			Laya.SoundManager.setSoundVolume(value);
			localSetItem("soundVolume", value.toString());
			logd('onChange0:', value);
		}
		private onChange1(value: number) {
			value = parseFloat(value.toFixed(2));
			if (value > 0) {
				this._viewUI.btn_music.selected = true;
			} else {
				this._viewUI.btn_music.selected = false;
			}
			Laya.SoundManager.setMusicVolume(value);
			localSetItem("musicVolume", value.toString());
			logd('onChange1:', value);
		}


		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_CHANGEDDRAWPWD) {
				if (data && data.success == 0) {
					this._inputNewKey.clearInput();
					this._inputOldKey.clearInput();
					this._inputQueRenNewKey.clearInput();

					this._game.showTips("修改密码成功");
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_CHANGEPWD) {
				if (data && data.success == 0) {
					this._inputNewKey.clearInput();
					this._inputOldKey.clearInput();
					this._inputQueRenNewKey.clearInput();

					this._game.showTips("修改密码成功");
				}
			}

		}

		set dataSource(v: any) {
			this._dataSource = v;
		}


		private onCheckClick(e: LEvent): void {
			switch (e.currentTarget) {
				case this._viewUI.btn_sound://開關音效
					if (this._viewUI.btn_sound.selected) {
						let value;
						value = Number(localGetItem("soundVolumeSelf"));
						if (value <= 0) value = 1;
						this._viewUI.hslider0.value = value;
					} else {
						//记录当前的音量
						localSetItem("soundVolumeSelf", localGetItem("soundVolume"));
						this._viewUI.hslider0.value = 0;
					}
					break;
				case this._viewUI.btn_music://開關背景音樂
					if (this._viewUI.btn_music.selected) {
						let value;
						value = Number(localGetItem("musicVolumeSelf"));
						if (value <= 0) value = 1;
						this._viewUI.hslider1.value = value;
					} else {
						localSetItem("musicVolumeSelf", localGetItem("musicVolume"));
						this._viewUI.hslider1.value = 0;
					}
					break;
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_clear://清理缓存
					this._game.alert("清理缓存将删除本地数据对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全，我们强烈建议您先绑定帐号信息！是否清除缓存？", () => {
						localClear();
						this._game.showTips("清理缓存成功!")
					}, null, true);
					break;
				case this._viewUI.btn_change://切换账号
					this._game.sceneGame.clear("SettingPage change", true)
					// localRemoveItem("session_key");
					this._game.openLoginPage();
					break;
				case this._viewUI.btn_set_psd://设置密码
					if (WebConfig.info.isguest || !WebConfig.info.mobile) {//游客要先绑定手机
						this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
							page.dataSource = 3;//绑定手机类型
						})
					}
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
						page.dataSource = LoginBindPage.TYPE_RESET_PASSWORD;//设置密码类型
					})
					break;
				case this._viewUI.btn_check://检查更新
					this._game.datingGame.checkClientVesion(true);
					break;
				case this._viewUI.btn_copy://复制
					WebConfig.copyTxt(this._viewUI.txt_id.text)
					this._game.showTips("复制成功")
					break;
				case this._viewUI.btn_changge_nc://修改昵称
					this._game.uiRoot.general.open(DatingPageDef.PAGE_GENGGAINC);
					break;
				case this._viewUI.btn_head://头像
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHANGGE_HEAD);
					break;
				case this._viewUI.btn_recharge://打開充值界面
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				case this._viewUI.btn_bindwx://绑定微信
					this._game.datingGame.wxLogin(true);
					break;
				case this._viewUI.btn_bind_phone://绑定手机
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE, (page) => {
						page.dataSource = 3;//绑定手机类型
					})
					break;
				case this._viewUI.btn_select:
					this.menuTween(!this._viewUI.box_btn.visible);
					break;
				case this._inputCode:
					this.openJianPan(this._inputCode, this._viewUI, -65);
					break;
				case this._inputKey:
					this.openJianPan(this._inputKey, this._viewUI, -65);
					break;
				case this._inputKey1:
					this.openJianPan(this._inputKey1, this._viewUI, -65);
					break;
				case this._inputOldKey:
					this.openJianPan(this._inputOldKey, this._viewUI, -60);
					break;
				case this._inputNewKey:
					this.openJianPan(this._inputNewKey, this._viewUI, -60);
					break;
				case this._inputQueRenNewKey:
					this.openJianPan(this._inputQueRenNewKey, this._viewUI, -60);
					break;
			}
		}

		private openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
			DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
		}

		//时间栏
		private menuTween(isOpen: boolean) {
			if (isOpen) {
				this._viewUI.panel_btn.visible = true;
				this._viewUI.box_btn.visible = true;
				this._viewUI.btn_jiantou.rotation = this._viewUI.box_btn.visible ? 0 : -180;
				this._viewUI.box_btn.y = 289;
				this._viewUI.box_btn.alpha = 0;
				Laya.Tween.to(this._viewUI.box_btn, { y: 11, alpha: 1 }, 300, Laya.Ease.quartOut);
			} else {
				Laya.Tween.to(this._viewUI.box_btn, { y: 289, alpha: 0 }, 300, Laya.Ease.quartOut, Handler.create(this, () => {
					this._viewUI.panel_btn.visible = false;
					this._viewUI.box_btn.visible = false;
					this._viewUI.btn_jiantou.rotation = this._viewUI.box_btn.visible ? 0 : -180;
				}));
			}
		}

		public close(): void {
			if (this._viewUI) {
				DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_change.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_set_psd.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				if (this._gmTxt) {
					this._gmTxt.removeSelf();
					this._gmTxt.destroy();
					this._gmTxt = null;
				}
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				this._api_tz && this._api_tz.close();
				this._api_bb && this._api_bb.close();
			}
			super.close();
		}
	}
	class TabItemRender extends ui.ajqp.dating.component.GeRen_TabRenderUI {
		private _game: Game;
		public index: number;
		private _data: any;
		/**
			* 
			* @param game 
			* @param data 
			*/
		setData(game: Game, index: number, selectIndex: number) {
			this.visible = true;
			this.index = index;
			this.clip_name.index = this.index == selectIndex ? 1 : 0;
		}

		set dataSource(v: any) {
			let skinStr = "";
			this._data = v;
			if (this._data == GeRenXinXiPage.TYPE_GRZX) {
				skinStr = DatingPath.ui_dating + "geren/btn_xx1.png"
			}
			else if (this._data == GeRenXinXiPage.TYPE_SZBB) {
				skinStr = DatingPath.ui_dating + "geren/btn_xx2.png"
			}
			else if (this._data == GeRenXinXiPage.TYPE_YXSZ) {
				skinStr = DatingPath.ui_dating + "geren/btn_sz.png"
			}
			else if (this._data == GeRenXinXiPage.TYPE_TZJL) {
				skinStr = DatingPath.ui_dating + "geren/btn_tzjl.png"
			}
			else if (this._data == GeRenXinXiPage.TYPE_GRBB) {
				skinStr = DatingPath.ui_dating + "geren/btn_grbb.png"
			}
			this.clip_name.skin = skinStr;
		}
	}

}