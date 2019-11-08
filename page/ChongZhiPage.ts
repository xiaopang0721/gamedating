/**
* name 充值
*/
module gamedating.page {
	export class ChongZhiPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.ChongZhiUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "chongzhi.atlas",
				DatingPath.atlas_dating_ui + "kehu.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.ChongZhiUI");
			this.addChild(this._viewUI);

			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("dating.component.ChongZhiT1UI", ChongZhiT);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_record.visible = false;

			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender2UI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.tabChangeHandler);

			this._viewUI.list_vip.vScrollBarSkin = "";
			this._viewUI.list_vip.scrollBar.elasticDistance = 100;
			this._viewUI.list_vip.itemRender = this.createChildren("dating.component.VipItemRenderUI", VipItemRender);
			this._viewUI.list_vip.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_vip.visible = false;

			this._viewUI.list_qudao.hScrollBarSkin = "";
			this._viewUI.list_qudao.scrollBar.elasticDistance = 100;
			this._viewUI.list_qudao.itemRender = this.createChildren("dating.component.ChongZhi_dsfUI", VipItemRender2);
			this._viewUI.list_qudao.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_qudao.selectHandler = new Handler(this, this.qudaoselectHandler);
			this._viewUI.list_qudao.visible = false;
			this._viewUI.list_qudao.scrollBar.changeHandler = new Handler(this, this.qudaoChangeHandler);

			this._viewUI.list_yh.hScrollBarSkin = "";
			this._viewUI.list_yh.scrollBar.elasticDistance = 100;
			this._viewUI.list_yh.itemRender = this.createChildren("dating.component.ChongZhi_skUI", BankerItemRender);
			this._viewUI.list_yh.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_yh.selectHandler = new Handler(this, this.yhSelectHandler);
			this._viewUI.list_yh.visible = false;
			this._viewUI.list_yh.scrollBar.changeHandler = new Handler(this, this.yhkChangeHandler);

			this._viewUI.list_sm.hScrollBarSkin = "";
			this._viewUI.list_sm.scrollBar.elasticDistance = 100;
			this._viewUI.list_sm.itemRender = this.createChildren("dating.component.ChongZhi_skUI", SMItemRender);
			this._viewUI.list_sm.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_sm.selectHandler = new Handler(this, this.smSelectHandler);
			this._viewUI.list_sm.visible = false;
			this._viewUI.list_sm.scrollBar.changeHandler = new Handler(this, this.smChangeHandler);

			this._viewUI.list_money.itemRender = this.createChildren("dating.component.MoneyItemRenderUI", MoneyItemRender);
			this._viewUI.list_money.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_money.mouseHandler = new Handler(this, this.moneyselectHandler);

			this._viewUI.btn_clear.visible = false;
			this._viewUI.txt_input.on(LEvent.CHANGE, this, this.onTextChange);
			this._viewUI.txt_input.on(LEvent.INPUT, this, this.onTextChange);
			this._viewUI.txt_input.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_input.on(LEvent.BLUR, this, this.onBlur);

			this._viewUI.ingput_yh0.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.ingput_yh0.on(LEvent.BLUR, this, this.onBlur);

			this._viewUI.ingput_yh1.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.ingput_yh1.on(LEvent.BLUR, this, this.onBlur);

			this._viewUI.txt_sm2.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_sm2.on(LEvent.BLUR, this, this.onBlur);

			this._viewUI.txt_sm3.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_sm3.on(LEvent.BLUR, this, this.onBlur);


			this._game.datingGame.chongZhiMgr.on(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._paychannel = [{ name: "充值记录" }];
			this._viewUI.list_tab.dataSource = this._paychannel;
			this.onUpdatePlayerInfo();
		}

		private tabChangeHandler(): void {
			let value = this._viewUI.list_tab.scrollBar.value;
			if (!this._viewUI.list_tab.scrollBar.min && !this._viewUI.list_tab.scrollBar.max) {
				this._viewUI.btn_pre_tab.visible = false;
				this._viewUI.btn_next_tab.visible = false;
			} else {
				if (value <= this._viewUI.list_tab.scrollBar.min) {
					this._viewUI.btn_pre_tab.visible = false;
					this._viewUI.btn_next_tab.visible = true;
				} else if (value >= this._viewUI.list_tab.scrollBar.max) {
					this._viewUI.btn_pre_tab.visible = true;
					this._viewUI.btn_next_tab.visible = false;
				}
			}
		}

		private yhkChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_yh, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
			let value = this._viewUI.list_yh.scrollBar.value;
			if (!this._viewUI.list_yh.scrollBar.min && !this._viewUI.list_yh.scrollBar.max) {
				this._viewUI.btn_left_yh.visible = false;
				this._viewUI.btn_right_yh.visible = false;
			} else {
				if (value <= this._viewUI.list_yh.scrollBar.min) {
					this._viewUI.btn_left_yh.visible = false;
					this._viewUI.btn_right_yh.visible = true;
				} else if (value >= this._viewUI.list_yh.scrollBar.max) {
					this._viewUI.btn_left_yh.visible = true;
					this._viewUI.btn_right_yh.visible = false;
				}
			}
		}

		private smChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_sm, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
			let value = this._viewUI.list_sm.scrollBar.value;
			if (!this._viewUI.list_sm.scrollBar.min && !this._viewUI.list_sm.scrollBar.max) {
				this._viewUI.btn_left_sm.visible = false;
				this._viewUI.btn_right_sm.visible = false;
			} else {
				if (value <= this._viewUI.list_sm.scrollBar.min) {
					this._viewUI.btn_left_sm.visible = false;
					this._viewUI.btn_right_sm.visible = true;
				} else if (value >= this._viewUI.list_sm.scrollBar.max) {
					this._viewUI.btn_left_sm.visible = true;
					this._viewUI.btn_right_sm.visible = false;
				}
			}
		}

		private qudaoChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_qudao, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
			let value = this._viewUI.list_qudao.scrollBar.value;
			if (!this._viewUI.list_qudao.scrollBar.min && !this._viewUI.list_qudao.scrollBar.max) {
				this._viewUI.btn_left_qudao.visible = false;
				this._viewUI.btn_right_qudao.visible = false;
			} else {
				if (value <= this._viewUI.list_qudao.scrollBar.min) {
					this._viewUI.btn_left_qudao.visible = false;
					this._viewUI.btn_right_qudao.visible = true;
				} else if (value >= this._viewUI.list_qudao.scrollBar.max) {
					this._viewUI.btn_left_qudao.visible = true;
					this._viewUI.btn_right_qudao.visible = false;
				}
			}
		}

		private moneyselectHandler(e, index: number) {
			if (e.type != LEvent.CLICK) return;
			this._game.uiRoot.btnTween(e.currentTarget, this, () => {
				this._viewUI.txt_input.text = this._viewUI.list_money.dataSource[index];
			})
		}

		private _qudao: any;
		private qudaoselectHandler() {
			if (!this._viewUI.list_qudao.dataSource) return;
			this._qudao = this._viewUI.list_qudao.dataSource[this._viewUI.list_qudao.selectedIndex];
			if (this._qudao.quickmoney) {
				let arr = this._qudao.quickmoney ? this._qudao.quickmoney.split(",") : [];
				arr.length = 8;
				this._viewUI.list_money.dataSource = arr;
				this._viewUI.txt_input.prompt = StringU.substitute("充值金额不低于{0}元", this._qudao.minmoney);
				this._viewUI.txt_input.text = "";
			}
		}

		private _id: number = 0;
		private yhSelectHandler() {
			if (!this._viewUI.list_yh.dataSource) return;
			let data = this._viewUI.list_yh.dataSource[this._viewUI.list_yh.selectedIndex];
			this._viewUI.txt_yh0.text = data.remittype;
			this._viewUI.txt_yh1.text = data.remitname;
			this._viewUI.txt_yh2.text = data.remitnum;
			this._viewUI.txt_yh3.text = data.remitaddr;
			this._viewUI.ingput_yh0.text = "";
			this._viewUI.ingput_yh1.text = "";
			this._id = data.id;
			if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK) {
				this._viewUI.txt_yh4.text = data.min_limit > 0 ? StringU.substitute("银行卡转账最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			} else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK) {
				this._viewUI.txt_yh4.text = data.min_limit > 0 ? StringU.substitute("微信转银行最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			} else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK) {
				this._viewUI.txt_yh4.text = data.min_limit > 0 ? StringU.substitute("支付宝转银行最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			}
		}

		private smSelectHandler() {
			if (!this._viewUI.list_sm.dataSource) return;
			let data = this._viewUI.list_sm.dataSource[this._viewUI.list_sm.selectedIndex];
			if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) { //支付宝
				this._viewUI.txt_sm1.text = data.alipaynum;
				this._viewUI.img_wx_ewm.skin = data.alipay_ewm_url;
				this._viewUI.txt_sm4.text = data.min_limit > 0 ? StringU.substitute("支付宝最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			}
			else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) { //云闪付
				this._viewUI.txt_sm1.text = data.ysfpaynum;
				this._viewUI.img_wx_ewm.skin = data.ysfpay_ewm_url;
				this._viewUI.txt_sm4.text = data.min_limit > 0 ? StringU.substitute("云闪付最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			}
			else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) { //微信
				this._viewUI.txt_sm1.text = data.wxnum;
				this._viewUI.img_wx_ewm.skin = data.wx_ewm_url;
				this._viewUI.txt_sm4.text = data.min_limit > 0 ? StringU.substitute("微信最低{0}元起充，低于{1}元充值不受理", data.min_limit, data.min_limit) : '';
			}
			this._id = data.id;
			this._viewUI.txt_sm2.text = "";
			this._viewUI.txt_sm3.text = "";
		}

		private _paychannel: any;
		private onTextChange() {
			this._viewUI.btn_clear.visible = this._viewUI.txt_input.text.length > 0;
		}


		//按钮点击
		protected onBtnTweenEnd(e: LEvent, target: any) {
			switch (target) {
				case this._viewUI.btn_kj:
					this._data.list[0].kc_url && WebConfig.openUrl(this._data.list[0].kc_url);
					break;
				case this._viewUI.btn_clear:
					this._viewUI.txt_input.text = "";
					break;
				case this._viewUI.btn_save_ewm:
					if (this._viewUI.img_wx_ewm.skin) {
						WebConfig.saveHttpImage(Laya.URL.formatURL(this._viewUI.img_wx_ewm.skin));
					}
					break;
				case this._viewUI.btn_open_wx:
					if (!this._data) return;
					if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
						this._game.showTips("打开支付宝");
					}
					else if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
						this._game.wxOpen();
					}
					break;
				case this._viewUI.btn_sm_finish://扫码提交充值
					if (!this._viewUI.txt_sm2.text) {
						this._game.showTips("金额信息错误")
						return;
					}
					if (this._viewUI.txt_sm2.text.indexOf(".") != -1 && this._viewUI.txt_sm2.text.length - this._viewUI.txt_sm2.text.indexOf(".") > 3) {
						this._game.showTips("金额小数点不能超过两位")
						return;
					}
					if (!this._viewUI.txt_sm3.text) {
						this._game.showTips("请输入存款信息")
						return;
					}
					// let sm_text = this._data.type == 12 ? this._viewUI.txt_wxsm4.text : this._data.type == 11 ? this._viewUI.txt_zfbsm4.text : this._viewUI.txt_ysfsm4.text;
					let limit_sm = this._viewUI.txt_sm4.text.replace(/[^0-9]/ig, "");
					limit_sm = limit_sm.substr(0, limit_sm.length / 2);
					if (this._data && limit_sm && parseInt(this._viewUI.txt_sm2.text) < parseInt(limit_sm)) {
						this._game.showTips(StringU.substitute("充值金额不能小于{0}元", limit_sm))
						return;
					}
					let smDataStr: string = this._viewUI.txt_sm1.text + "," + this._viewUI.txt_sm3.text;
					this._game.network.call_recharge_confirm(WebConfig.account, parseFloat(this._viewUI.txt_sm2.text) * 100, this._data.type, smDataStr);
					break;
				case this._viewUI.btn_yh_tjcz://银行卡提交充值
					if (!this._viewUI.ingput_yh0.text) {
						this._game.showTips("金额信息错误")
						return;
					}
					if (this._viewUI.ingput_yh0.text.indexOf(".") != -1 && this._viewUI.ingput_yh0.text.length - this._viewUI.ingput_yh0.text.indexOf(".") > 3) {
						this._game.showTips("金额小数点不能超过两位")
						return;
					}
					if (!this._viewUI.ingput_yh1.text) {
						this._game.showTips("请输入存款信息")
						return;
					}
					let limit_yh = this._viewUI.txt_yh4.text.replace(/[^0-9]/ig, "");
					limit_yh = limit_yh.substr(0, limit_yh.length / 2);
					if (this._data && limit_yh && parseInt(this._viewUI.ingput_yh0.text) < parseInt(limit_yh)) {
						this._game.showTips(StringU.substitute("充值金额不能小于{0}元", limit_yh))
						return;
					}
					let yhDataStr: string = this._viewUI.txt_yh2.text + "," + this._viewUI.ingput_yh1.text;
					this._game.network.call_recharge_confirm(WebConfig.account, parseFloat(this._viewUI.ingput_yh0.text) * 100, this._data.type, yhDataStr)
					break;
				case this._viewUI.btn_pay://支付
					if (!this._qudao) {
						this._game.showTips("无效操作")
						return;
					}
					if (!this._viewUI.txt_input.text || !parseInt(this._viewUI.txt_input.text)) {
						this._game.showTips("金额输入错误")
						return;
					}
					if (parseInt(this._viewUI.txt_input.text) < this._qudao.minmoney) {
						this._game.showTips(StringU.substitute("充值金额不低于{0}元", this._qudao.minmoney))
						return;
					}
					if (parseInt(this._viewUI.txt_input.text) > this._qudao.maxmoney) {
						this._game.showTips(StringU.substitute("充值金额不超过{0}元", this._qudao.maxmoney))
						return;
					}

					this._game.network.call_goto_pay(this._viewUI.txt_input.text, this._qudao.id, this._qudao.paytype)
					break;
				case this._viewUI.btn_yh_copy0:
					WebConfig.copyTxt(this._viewUI.txt_yh0.text);
					break;
				case this._viewUI.btn_yh_copy1:
					WebConfig.copyTxt(this._viewUI.txt_yh1.text);
					break;
				case this._viewUI.btn_yh_copy2:
					WebConfig.copyTxt(this._viewUI.txt_yh2.text);
					break;
				case this._viewUI.btn_yh_copy3:
					WebConfig.copyTxt(this._viewUI.txt_yh3.text);
					break;
				// case this._viewUI.btn_sm_copy0:
				// 	WebConfig.copyTxt(this._viewUI.txt_sm0.text);
				// 	break;
				case this._viewUI.btn_sm_copy1:
					WebConfig.copyTxt(this._viewUI.txt_sm1.text);
					break;
				case this._viewUI.btn_back:
					this._viewUI.box_yh_fk.visible = false;
					this._viewUI.box_yh_sk.visible = true;
					break;
				case this._viewUI.btn_next_yh:
					this._viewUI.box_yh_fk.visible = true;
					this._viewUI.box_yh_sk.visible = false;
					break;
				case this._viewUI.btn_back_sm:
					this._viewUI.box_smfk.visible = false;
					this._viewUI.box_smsk.visible = true;
					break;
				case this._viewUI.btn_next:
					this._viewUI.box_smfk.visible = true;
					this._viewUI.box_smsk.visible = false;
					break;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_sm_finish.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_open_wx.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_save_ewm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_tjcz.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_kj.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_pay.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back_sm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_next_yh.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_next.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._viewUI.btn_yh_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_sm_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			// this._viewUI.btn_sm_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);

			this._game.network.call_get_paychannel("apppay");
		}

		private _maxMoney: number;
		private _minMoney: number;
		private _bankRate: number;
		private _alipayRate: number;
		private _wxRate: number;
		private _ysfRate: number;
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYCHANNEL) {
				if (data && data.success == 0) {
					this._paychannel = data.msg.list ? data.msg.list.concat(this._paychannel) : this._paychannel;
					this._bankRate = data.msg.bank_rate;
					this._alipayRate = data.msg.alipay_rate;
					this._wxRate = data.msg.wx_rate;
					this._ysfRate = data.msg.ysf_rate;
					this.onUpdatePlayerInfo();
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_PAY) {
				if (data && data.success == 0) {
					data.msg && WebConfig.openUrl(data.msg);
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_REMIT_NEW) {
				if (data && data.success == 0) {
					this._game.showTips("转账成功!");
				}
			}
		}

		// private onChange() {
		// 	this._viewUI.img_next.visible = this._viewUI.list_tab.scrollBar.value < this._viewUI.list_tab.scrollBar.max;
		// 	this._viewUI.img_prev.visible = this._viewUI.list_tab.scrollBar.value > this._viewUI.list_tab.scrollBar.min;
		// }

		private onUpdatePlayerInfo() {
			if (!WebConfig.info) return;
			for (let i = 0; i < this._paychannel.length; i++) {
				let rechargeType = this._paychannel[i].type;
				if (rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK || rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK || rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK) {
					this._paychannel[i].rate = this._bankRate;
				} else if (rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
					this._paychannel[i].rate = this._alipayRate;
				} else if (rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
					this._paychannel[i].rate = this._wxRate;
				} else if (rechargeType == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) {
					this._paychannel[i].rate = this._ysfRate;
				}
			}
			this._viewUI.list_tab.dataSource = this._paychannel;
			this._viewUI.btn_pre_tab.visible = false;
			this._viewUI.btn_next_tab.visible = this._paychannel && this._paychannel && this._paychannel.length > 5;
			if (this.dataSource && this._viewUI.list_tab && this._viewUI.list_tab.length > 1) {
				for (let i = 0; i < this._viewUI.list_tab.length; i++) {
					if (this._viewUI.list_tab.dataSource[i].type == this.dataSource) {
						this._viewUI.list_tab.selectedIndex = i;
					}
				}
			}
			this.selectHandler();
		}

		private _data: any;
		private _dd: any;
		private _chongzhitype = ["ZFBSM", "ZFBSM", "WXH5", "WXSM", "QQH5", "QQSM", "JDSM", "YLSM", "VIPPay", "YLSM", "ZFBSM", "WXSM", "KJCZ", "YSF"];
		//tab选中
		private selectHandler() {
			let data = this._data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
			if (!data) {
				this._game.showTips("无效操作")
				return;
			}
			this._viewUI.txt_input.text = "";
			this._viewUI.box_kj.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_FAST;
			this._viewUI.box_yh.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK;
			this._viewUI.box_sm.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM;
			this._viewUI.box_zhuanzhang.visible = !this._viewUI.box_yh.visible && !this._viewUI.box_sm.visible && !this._viewUI.box_kj.visible;
			if (data.name == "充值记录") {
				this._game.datingGame.chongZhiMgr.clearDataInfo();
				this._viewUI.box_cz.visible = false;
				this._viewUI.box_record.visible = true;
				this._viewUI.list_record.dataSource = null;

				this.onUpdateDataInfo();
			} else {
				if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK) {
					this._viewUI.box_yh_fk.visible = false;
					this._viewUI.box_yh_sk.visible = true;
					this._viewUI.list_yh.visible = true;
					this._viewUI.list_yh.dataSource = data && data.list ? data.list : [];
					this._viewUI.list_yh.selectedIndex = 0;
					this._viewUI.btn_left_yh.visible = false;
					this._viewUI.btn_right_yh.visible = data && data.list && data.list.length > 3;
					this.yhSelectHandler();
					this._viewUI.txt_yh0.text = this._viewUI.list_yh.dataSource[0].remittype;
					this._viewUI.txt_yh1.text = this._viewUI.list_yh.dataSource[0].remitname;
					this._viewUI.txt_yh2.text = this._viewUI.list_yh.dataSource[0].remitnum;
					this._viewUI.txt_yh3.text = this._viewUI.list_yh.dataSource[0].remitaddr;
					this._viewUI.ingput_yh0.text = "";
					this._viewUI.ingput_yh1.text = "";
					if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK) {
						this._viewUI.txt_yh4.text = this._viewUI.list_yh.dataSource[0].min_limit > 0 ? StringU.substitute("银行卡转账最低{0}元起充，低于{1}元充值不受理", this._viewUI.list_yh.dataSource[0].min_limit, this._viewUI.list_yh.dataSource[0].min_limit) : '';
					} else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK) {
						this._viewUI.txt_yh4.text = this._viewUI.list_yh.dataSource[0].min_limit > 0 ? StringU.substitute("微信转银行最低{0}元起充，低于{1}元充值不受理", this._viewUI.list_yh.dataSource[0].min_limit, this._viewUI.list_yh.dataSource[0].min_limit) : '';
					} else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK) {
						this._viewUI.txt_yh4.text = this._viewUI.list_yh.dataSource[0].min_limit > 0 ? StringU.substitute("支付宝转银行最低{0}元起充，低于{1}元充值不受理", this._viewUI.list_yh.dataSource[0].min_limit, this._viewUI.list_yh.dataSource[0].min_limit) : '';
					}
				}
				else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
					this._viewUI.box_smfk.visible = false;
					this._viewUI.box_smsk.visible = true;
					this._viewUI.list_sm.visible = true;
					this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
					// this._viewUI.list_tab.scrollBar.value = 0;
					this._viewUI.list_sm.selectedIndex = 0;
					this._viewUI.btn_left_sm.visible = false;
					this._viewUI.btn_right_sm.visible = data && data.list && data.list.length > 3;
					this.smSelectHandler();
					if (data.list && data.list.length) {
						this._viewUI.txt_sm1.text = data.list[0].alipaynum;
						this._viewUI.img_wx_ewm.skin = data.list[0].alipay_ewm_url;
						this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("支付宝最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
					}
					this._viewUI.btn_open_wx.visible = false;
					this._viewUI.txt_sm_zh.text = "支付宝账号:";
				}
				else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
					this._viewUI.box_smfk.visible = false;
					this._viewUI.box_smsk.visible = true;
					this._viewUI.list_sm.visible = true;
					this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
					// this._viewUI.list_tab.scrollBar.value = 0;
					this._viewUI.list_sm.selectedIndex = 0;
					this.smSelectHandler();
					if (data.list && data.list.length) {
						this._viewUI.txt_sm1.text = data.list[0].wxnum;
						this._viewUI.img_wx_ewm.skin = data.list[0].wx_ewm_url;
						this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("微信最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
					}
					this._viewUI.btn_open_wx.visible = true;
					this._viewUI.txt_sm_zh.text = "微信账号:";
				}
				else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) {
					this._viewUI.box_smfk.visible = false;
					this._viewUI.box_smsk.visible = true;
					this._viewUI.list_sm.visible = true;
					this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
					// this._viewUI.list_tab.scrollBar.value = 0;
					this._viewUI.list_sm.selectedIndex = 0;
					this.smSelectHandler();
					if (data.list && data.list.length) {
						this._viewUI.txt_sm1.text = data.list[0].ysfpaynum;
						this._viewUI.img_wx_ewm.skin = data.list[0].ysfpay_ewm_url;
						this._viewUI.txt_sm4.text = data.list[0].min_limit > 0 ? StringU.substitute("云闪付最低{0}元起充，低于{1}元充值不受理", data.list[0].min_limit, data.list[0].min_limit) : '';
					}
					this._viewUI.btn_open_wx.visible = false;
					this._viewUI.txt_sm_zh.text = "云闪付账号:";
				} else {
					let isVip: boolean = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_VIP;
					this._viewUI.box_vip.visible = isVip;
					this._viewUI.box_qudao.visible = !isVip;
					this._viewUI.box_cz.visible = true;
					this._viewUI.box_record.visible = false;
					if (isVip) {
						this._viewUI.list_vip.dataSource = data.list;
						this._viewUI.list_vip.visible = data && data.list && data.list.length > 0;
					} else {
						if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_FAST) return;
						this._viewUI.list_qudao.dataSource = data && data.list ? data.list : [];
						this._viewUI.list_qudao.visible = data && data.list && data.list.length;
						this._viewUI.list_qudao.scrollBar.value = 0;
						this._viewUI.list_qudao.selectedIndex = 0;
						this._viewUI.btn_left_qudao.visible = false;
						this._viewUI.btn_right_qudao.visible = data && data.list && data.list.length > 3;
						if (data.list && data.list.length) {
							let arr = data.list[0].quickmoney ? data.list[0].quickmoney.split(",") : [];
							this._qudao = data.list[0];
							arr.length = 8;
							this._viewUI.list_money.dataSource = arr;
							this._viewUI.txt_input.prompt = StringU.substitute("充值金额不低于{0}元", data.list[0].minmoney);
						}
					}
				}
			}

		}

		private _dataInfo: any[];
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = this._game.datingGame.chongZhiMgr.dataInfo;
			let count: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_no.visible = !count;
			this._viewUI.list_record.visible = count > 0;
			if (!count) {
				if (!data)
					this._game.datingGame.chongZhiMgr.getData(1);
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * ChongZhiMgr.PAGE_MAX - ChongZhiMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}

			this._viewUI.list_record.dataSource = this._dataInfo;
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.name = "item" + index;
				cell.setData(this._game, cell.dataSource, index, this._viewUI);
			}
		}

		private onFocus(e: any) {
			switch (e) {
				case this._viewUI.ingput_yh0:
				case this._viewUI.txt_input:
				case this._viewUI.txt_sm2:
					this._viewUI.box.centerY = -220;
					break
				case this._viewUI.ingput_yh1:
				case this._viewUI.txt_sm3:
					this._viewUI.box.centerY = -320;
					break
			}

		}

		private _isTrigger: boolean = false;
		private onBlur() {
			this._viewUI.box.centerY = 0;
			this._isTrigger = true;
		}

		onBlackSpriteClick(): void {
			if (this._isTrigger) {
				this._isTrigger = false;
				return;
			};
			super.onBlackSpriteClick();
		}

		public close(): void {
			if (this._viewUI) {
				DisplayU.onScrollChange(this._viewUI.list_yh, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);
				DisplayU.onScrollChange(this._viewUI.list_sm, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);
				DisplayU.onScrollChange(this._viewUI.list_qudao, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);

				this._viewUI.txt_input.off(LEvent.CHANGE, this, this.onTextChange);
				this._viewUI.txt_input.off(LEvent.FOCUS, this, this.onFocus);
				this._viewUI.txt_input.off(LEvent.BLUR, this, this.onBlur);
				this._game.datingGame.chongZhiMgr.off(ChongZhiMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				this._game.datingGame.chongZhiMgr.clearDataInfo();
			}
			super.close();
		}
	}

	class TabItemRender extends ui.nqp.dating.component.TabItemRender2UI {
		private _game: Game;
		private _data: any;
		private _posY: number;
		private _chongzhitype = ["btn_zfb", "btn_zfb", "btn_wx3", "btn_wx2", "btn_qq", "btn_qq", "btn_jd", "btn_yl", "btn_vip", "btn_yhk", "btn_zfbcz", "btn_wx2", "btn_kj", "btn_ysf2", "btn_ysf", "btn_wxzyh", "btn_zfbzyh"];
		/**
		 * 
		 * @param game 
		 * id:"21"
			lv:"1"
			maxmoney:"50000"
			minmoney:"1"
			name:"支付宝"
			paytype:"ZFBH5"
		 * @param data 
		 */
		setData(game: Game, data: any) {
			let icon = this._chongzhitype[data.type - 1];
			if (icon) {
				this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", icon);
				this.img_icon.visible = true;
			}
			if (data.name == "充值记录") {
				this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/btn_czjl.png", icon);
				this.img_icon.visible = true;
			}
			this.box_rate.visible = false;
			this.txt_rate.text = "+" + data.rate + "%";
			this.box_rate.visible = data.rate > 0;
			// this._posY = 7;
			// Laya.Tween.clearAll(this.box_rate);
			// if (this.box_rate.visible) {
			// 	this.tweenMove(true);
			// }
		}

		tweenMove(isUp: boolean) {
			Laya.Tween.to(this.box_rate, { y: isUp ? this._posY - 5 : this._posY + 5 }, 1200, Laya.Ease.linearIn, Handler.create(this, this.tweenMove, [!isUp]));
		}

		destroy() {
			Laya.Tween.clearAll(this.box_rate);
		}
	}

	class ChongZhiT extends ui.nqp.dating.component.ChongZhiT1UI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * id:"21"
			lv:"1"
			maxmoney:"50000"
			minmoney:"1"
			name:"支付宝"
			paytype:"ZFBH5"
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this.dataSource = data;
			this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
			this.txt_zt.text = data.status;
			if (data.statustype == 1) {
				this.txt_zt.color = '#1fc04c';
			} else if (data.statustype == 2) {
				this.txt_zt.color = '#ff2400';
			} else {
				this.txt_zt.color = '#ed7b18';
			}
			this.txt_money.text = data.money;
			this.txt_type.text = data.recharge_type;
			// this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_di{0}.png", data.rank % 2 == 0 ? "" : 0)
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.rank * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	class ChongZhiJiaRender extends ui.nqp.dating.component.ChongZhi_TUI {
		set dataSource(v: any) {
			if (v && v.name && v.money) {
				this.txt_name.text = v.name;
				this.txt_money.text = v.money + "元";
				this.visible = true;
			} else {
				this.visible = false;
			}
		}
	}

	class VipItemRender extends ui.nqp.dating.component.VipItemRenderUI {
		private _game: Game;
		private _data: any;
		setData(game: Game, data: any) {
			this._data = data;
			this._game = game;
			this.txt_name.text = data.remitname;
			this.txt_num.text = data.remitnum;
			this.img_type.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", data.apptype == "WX" ? "WXSM" : data.apptype == "QQ" ? "QQH5" : data.apptype)
			this.btn_go.on(LEvent.CLICK, this, this.onMouseHandle, [data.apptype, data.remitnum]);
		}

		private onMouseHandle(apptype: string, remitnum: string, e: LEvent) {
			this._game.uiRoot.btnTween(e.currentTarget, this, () => {
				WebConfig.copyTxt(this._data.remitnum)
				if (apptype == "WX") {
					this._game.showTips("复制成功")
					this._game.datingGame.wxOpen();
				} else if (apptype == "QQ") {
					this._game.datingGame.qqOpen(parseInt(remitnum));
				} else {
					WebConfig.copyTxt(remitnum.toString());
					this._game.showTips("复制成功")
				}
			})
		}
	}

	class VipItemRender2 extends ui.nqp.dating.component.ChongZhi_dsfUI {
		private _game: Game;
		private _data: any;
		private _viewUI: any;
		setData(game: Game, data: any, index, viewUI) {
			if (!data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this._data = data;
			this._game = game;
			this._data.index = index;
			this._viewUI = viewUI;
			this.txt_name.text = data.name;
			this.txt_money.text = StringU.substitute("单笔:{0}元 - {1}元", data.minmoney, data.maxmoney);
		}
	}

	class BankerItemRender extends ui.nqp.dating.component.ChongZhi_skUI {
		private _game: Game;
		private _data: any;
		private _viewUI: any;
		setData(game: Game, data: any, index, viewUI) {
			if (!data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this._data = data;
			this._game = game;
			this._data.index = index;
			this._viewUI = viewUI;
			this.txt_name.text = data.title;
		}
	}

	class SMItemRender extends ui.nqp.dating.component.ChongZhi_skUI {
		private _game: Game;
		private _data: any;
		private _viewUI: any;
		setData(game: Game, data: any, index, viewUI) {
			if (!data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this._data = data;
			this._game = game;
			this._data.index = index;
			this._viewUI = viewUI;
			this.txt_name.text = data.title;
		}
	}

	class MoneyItemRender extends ui.nqp.dating.component.MoneyItemRenderUI {
		private _game: Game;
		private _data: any;
		setData(game: Game, data: any) {
			if (!data) {
				this.visible = false;
				return
			}
			this.txt_num.text = data;
		}
	}
}