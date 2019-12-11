/**
* name 客服
*/
module gamedating.page {
	export class ChongZhiPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.ChongZhiUI;
		private _paychannel: any[] = [];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "chongzhi.atlas",
				DatingPath.atlas_dating_ui_tongyong + "di.atlas",
				DatingPath.atlas_dating_ui_tongyong + "anniu.atlas",
			];
			this._isNeedBlack = false;
			this._isClickBlack = false;
			this._delta = MathU.randomRange(3000, 10000);
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.ChongZhiUI");
			this.addChild(this._viewUI);

			if (!this._clip_money) {
				this._clip_money = new DatingClip(DatingClip.MONEY_WHITE);
				this._clip_money.x = this._viewUI.clip_money.x;
				this._clip_money.y = this._viewUI.clip_money.y;
				this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clip_money);
				this._viewUI.clip_money.removeSelf();
			}

			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender2UI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.tabChangeHandler);

			this._viewUI.list_vip.vScrollBarSkin = "";
			this._viewUI.list_vip.scrollBar.elasticDistance = 100;
			this._viewUI.list_vip.itemRender = this.createChildren("dating.component.ChongZhi_VipUI", VipItemRender);
			this._viewUI.list_vip.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_vip.visible = false;

			this._viewUI.list_qudao.hScrollBarSkin = "";
			this._viewUI.list_qudao.scrollBar.elasticDistance = 100;
			this._viewUI.list_qudao.itemRender = this.createChildren("dating.component.ChongZhiQuDaoUI", QuDaoRender);
			this._viewUI.list_qudao.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_qudao.selectHandler = new Handler(this, this.qudaoselectHandler);
			this._viewUI.list_qudao.visible = false;
			this._viewUI.list_qudao.scrollBar.changeHandler = new Handler(this, this.qudaoChangeHandler);

			this._viewUI.list_yh.vScrollBarSkin = "";
			this._viewUI.list_yh.scrollBar.elasticDistance = 100;
			this._viewUI.list_yh.itemRender = this.createChildren("dating.component.YingHangKaUI", BankerItemRender);
			this._viewUI.list_yh.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_yh.visible = false;
			this._viewUI.list_yh.scrollBar.changeHandler = new Handler(this, this.yhkChangeHandler);

			this._viewUI.list_sm.vScrollBarSkin = "";
			this._viewUI.list_sm.scrollBar.elasticDistance = 100;
			this._viewUI.list_sm.itemRender = this.createChildren("dating.component.YingHangKaUI", SMItemRender);
			this._viewUI.list_sm.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_sm.visible = false;
			this._viewUI.list_sm.scrollBar.changeHandler = new Handler(this, this.smChangeHandler);

			this._viewUI.list_money.itemRender = this.createChildren("dating.component.ChongZhiJingEUI", MoneyItemRender);
			this._viewUI.list_money.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_money.mouseHandler = new Handler(this, this.moneyselectHandler);

			this._viewUI.box_yh.visible = false;
			this._viewUI.box_sm.visible = false;
			this._viewUI.box_zhuanzhang.visible = false;
			this._viewUI.btn_clear.visible = false;
			this._viewUI.txt_input.on(LEvent.CHANGE, this, this.onTextChange);
			this._viewUI.txt_input.on(LEvent.INPUT, this, this.onTextChange);
			this._viewUI.txt_input.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_input.on(LEvent.BLUR, this, this.onBlur);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_sm_finish.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_sm_ewm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_tjcz.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back_sm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_pay.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_gotokefu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_kj.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._viewUI.btn_yh_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_yh_copy3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_sm_copy0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_sm_copy1.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);

			this._game.network.call_get_paychannel("apppay");
			this.onUpdatePlayerInfo();
		}

		private onTextChange() {
			this._viewUI.btn_clear.visible = this._viewUI.txt_input.text.length > 0;
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

		//按钮点击
		protected onBtnTweenEnd(e: LEvent, target: any) {
			switch (target) {
				case this._viewUI.btn_gotokefu:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_KEFU);
					break;
				case this._viewUI.btn_kj:
					this._data.list[0].kc_url && WebConfig.openUrl(this._data.list[0].kc_url);
					break;
				case this._viewUI.btn_clear:
					this._viewUI.txt_input.text = "";
					break;
				case this._viewUI.img_sm_ewm:
					if (this._viewUI.img_sm_ewm.skin) {
						WebConfig.saveHttpImage(Laya.URL.formatURL(this._viewUI.img_sm_ewm.skin));
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
					let sm_text = this._data.type == 12 ? this._viewUI.txt_wxsm4.text : this._data.type == 11 ? this._viewUI.txt_zfbsm4.text : this._viewUI.txt_ysfsm4.text;
					let limit_sm = sm_text.replace(/[^0-9]/ig, "");
					limit_sm = limit_sm.substr(0, limit_sm.length / 2);
					if (this._data && limit_sm && parseInt(this._viewUI.txt_sm2.text) < parseInt(limit_sm)) {
						this._game.showTips(StringU.substitute("充值金额不能小于{0}元", limit_sm))
						return;
					}
					let smDataStr: string = this._viewUI.txt_sm0.text + "," + this._viewUI.txt_sm3.text;
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
				case this._viewUI.btn_yh_copy0:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_yh0.text);
					break;
				case this._viewUI.btn_yh_copy1:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_yh1.text);
					break;
				case this._viewUI.btn_yh_copy2:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_yh2.text);
					break;
				case this._viewUI.btn_yh_copy3:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_yh3.text);
					break;
				case this._viewUI.btn_sm_copy0:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_sm0.text);
					break;
				case this._viewUI.btn_sm_copy1:
					this._game.showTips("复制成功");
					WebConfig.copyTxt(this._viewUI.txt_sm1.text);
					break;
				case this._viewUI.btn_back:
					this._viewUI.box_yh_cz.visible = false;
					this._viewUI.box_yh_type.visible = true;
					break;
				case this._viewUI.btn_back_sm:
					this._viewUI.box_sm_cz.visible = false;
					this._viewUI.box_sm_type.visible = true;
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
				case this._viewUI.btn_record:
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI_RECORD);
					break;
			}
		}

		/**
		  * 帧间隔心跳
		  */
		deltaUpdate() {
			this._game.network.call_get_ramdon_name(13, this._delta * 0.001)
			this._delta = MathU.randomRange(3000, 10000);
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

		private tabChangeHandler() {
			DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
			// let value = this._viewUI.list_tab.scrollBar.value;
			// if (!this._viewUI.list_tab.scrollBar.min && !this._viewUI.list_tab.scrollBar.max) {
			// 	this._viewUI.btn_pre_tab.visible = false;
			// 	this._viewUI.btn_next_tab.visible = false;
			// } else {
			// 	if (value <= this._viewUI.list_tab.scrollBar.min) {
			// 		this._viewUI.btn_pre_tab.visible = false;
			// 		this._viewUI.btn_next_tab.visible = true;
			// 	} else if (value >= this._viewUI.list_tab.scrollBar.max) {
			// 		this._viewUI.btn_pre_tab.visible = true;
			// 		this._viewUI.btn_next_tab.visible = false;
			// 	}
			// }
		}

		private _clip_money: DatingClip;
		private onUpdatePlayerInfo() {
			if (!this._viewUI) return;
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
			// this._viewUI.btn_pre_tab.visible = false;
			// this._viewUI.btn_next_tab.visible = this._paychannel && this._paychannel && this._paychannel.length > 6;
			if (this._viewUI.list_tab && this._viewUI.list_tab.length > 1) {
				this._viewUI.list_tab.selectedIndex = 0;
			}

			this._clip_money.setText(WebConfig.info.money, true, false);
		}

		private _data: any;
		private _dd: any;
		private _chongzhitype = ["ZFBSM", "ZFBSM", "WXH5", "WXSM", "QQH5", "QQSM", "JDSM", "YLSM", "VIPPay", "YLSM", "ZFBSM", "WXSM", "KJCZ", "YSF"];
		//tab选中
		private selectHandler(index: number = -1) {
			let data = this._data = this._viewUI.list_tab.dataSource[index];
			if (!data) {
				this._game.showTips("无效操作")
				return;
			}
			this._viewUI.txt_input.text = "";
			this._viewUI.box_kj.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_FAST;
			this._viewUI.box_yh.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK;
			this._viewUI.box_sm.visible = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM;
			this._viewUI.box_zhuanzhang.visible = !this._viewUI.box_yh.visible && !this._viewUI.box_sm.visible && !this._viewUI.box_kj.visible;
			if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_BANKHK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXBANK || data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBBANK) {
				this._viewUI.box_yh_cz.visible = false;
				this._viewUI.box_yh_type.visible = true;
				this._viewUI.list_yh.visible = true;
				if (data && data.list) {
					for (let i = 0; i < data.list.length; i++) {
						data.list[i]["rate"] = this._bankRate;
					}
				}
				this._viewUI.list_yh.dataSource = data && data.list ? data.list : [];
			}
			else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) {
				this._viewUI.box_sm_cz.visible = false;
				this._viewUI.box_sm_type.visible = true;
				this._viewUI.list_sm.visible = true;
				if (data && data.list) {
					for (let i = 0; i < data.list.length; i++) {
						data.list[i]["rate"] = this._alipayRate;
					}
				}
				this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
			}
			else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK) {
				this._viewUI.box_sm_cz.visible = false;
				this._viewUI.box_sm_type.visible = true;
				this._viewUI.list_sm.visible = true;
				if (data && data.list) {
					for (let i = 0; i < data.list.length; i++) {
						data.list[i]["rate"] = this._wxRate;
					}
				}
				this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
			}
			else if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) {
				this._viewUI.box_sm_cz.visible = false;
				this._viewUI.box_sm_type.visible = true;
				this._viewUI.list_sm.visible = true;
				if (data && data.list) {
					for (let i = 0; i < data.list.length; i++) {
						data.list[i]["rate"] = this._ysfRate;
					}
				}
				this._viewUI.list_sm.dataSource = data && data.list ? data.list : [];
			} else {
				let isVip: boolean = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_VIP;
				this._viewUI.box_vip.visible = isVip;
				this._viewUI.box_qudao.visible = !isVip;
				this._viewUI.box_cz.visible = true;
				if (isVip) {
					this._viewUI.list_vip.dataSource = data.list;
					this._viewUI.list_vip.visible = data && data.list && data.list.length > 0;
				} else {
					if (data.type == Web_operation_fields.GAME_PAYIMG_TYPE_FAST) return;
					this._viewUI.list_qudao.dataSource = data && data.list ? data.list : [];
					this._viewUI.list_qudao.visible = data && data.list && data.list.length;
					this._viewUI.list_qudao.scrollBar.value = 0;
					this._viewUI.list_qudao.selectedIndex = 0;
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

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.name = "item" + index;
				cell.setData(this._game, cell.dataSource, index, this._viewUI);
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

		private qudaoChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_qudao, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
			// let value = this._viewUI.list_qudao.scrollBar.value;
			// if (!this._viewUI.list_qudao.scrollBar.min && !this._viewUI.list_qudao.scrollBar.max) {
			// 	this._viewUI.btn_left_qudao.visible = false;
			// 	this._viewUI.btn_right_qudao.visible = false;
			// } else {
			// 	if (value <= this._viewUI.list_qudao.scrollBar.min) {
			// 		this._viewUI.btn_left_qudao.visible = false;
			// 		this._viewUI.btn_right_qudao.visible = true;
			// 	} else if (value >= this._viewUI.list_qudao.scrollBar.max) {
			// 		this._viewUI.btn_left_qudao.visible = true;
			// 		this._viewUI.btn_right_qudao.visible = false;
			// 	}
			// }
		}

		private yhkChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_yh, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
			// let value = this._viewUI.list_yh.scrollBar.value;
			// if (!this._viewUI.list_yh.scrollBar.min && !this._viewUI.list_yh.scrollBar.max) {
			// 	this._viewUI.btn_left_yh.visible = false;
			// 	this._viewUI.btn_right_yh.visible = false;
			// } else {
			// 	if (value <= this._viewUI.list_yh.scrollBar.min) {
			// 		this._viewUI.btn_left_yh.visible = false;
			// 		this._viewUI.btn_right_yh.visible = true;
			// 	} else if (value >= this._viewUI.list_yh.scrollBar.max) {
			// 		this._viewUI.btn_left_yh.visible = true;
			// 		this._viewUI.btn_right_yh.visible = false;
			// 	}
			// }
		}

		private smChangeHandler(): void {
			DisplayU.onScrollChange(this._viewUI.list_sm, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
			// let value = this._viewUI.list_sm.scrollBar.value;
			// if (!this._viewUI.list_sm.scrollBar.min && !this._viewUI.list_sm.scrollBar.max) {
			// 	this._viewUI.btn_left_sm.visible = false;
			// 	this._viewUI.btn_right_sm.visible = false;
			// } else {
			// 	if (value <= this._viewUI.list_sm.scrollBar.min) {
			// 		this._viewUI.btn_left_sm.visible = false;
			// 		this._viewUI.btn_right_sm.visible = true;
			// 	} else if (value >= this._viewUI.list_sm.scrollBar.max) {
			// 		this._viewUI.btn_left_sm.visible = true;
			// 		this._viewUI.btn_right_sm.visible = false;
			// 	}
			// }
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.list_yh, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.list_sm, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.list_qudao, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);

				this._viewUI.txt_input.off(LEvent.CHANGE, this, this.onTextChange);
				this._viewUI.txt_input.off(LEvent.FOCUS, this, this.onFocus);
				this._viewUI.txt_input.off(LEvent.BLUR, this, this.onBlur);
				if (this._clip_money) {
					this._clip_money.removeSelf();
					this._clip_money.destroy();
					this._clip_money = null;
				}
			}
			super.close();
		}
	}

	class TabItemRender extends ui.ajqp.dating.component.TabItemRender2UI {
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

	class VipItemRender extends ui.ajqp.dating.component.ChongZhi_VipUI {
		private _game: Game;
		private _data: any;//"ddz","niuniu","zjh"
		setData(game: Game, data: any) {
			this._data = data;
			this._game = game;
			this.txt_title.text = data.title;
			this.txt_name.text = data.remitnum;
			this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", data.apptype == "WX" ? "WXSM" : data.apptype == "QQ" ? "QQH5" : data.apptype)
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

	class QuDaoRender extends ui.ajqp.dating.component.ChongZhiQuDaoUI {
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
			this.txt_money.text = StringU.substitute("{0}元 - {1}元", data.minmoney, data.maxmoney);
		}
	}

	class BankerItemRender extends ui.ajqp.dating.component.YingHangKaUI {
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
			let bankRate = data.rate > 0 ? StringU.substitute("（赠送{0}%）", data.rate) : "";
			this.txt_title.text = data.title + bankRate;
			this.txt_name.text = data.remitnum;
			this.img_icon.skin = DatingPath.ui_dating + "chongzhi/YLSM.png";

			this.btn_go.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle(e: LEvent) {
			if (!this._data) return;
			this._game.uiRoot.btnTween(e.currentTarget, this, () => {
				this._viewUI.box_yh_cz.visible = true;
				// this._viewUI.box_yh_title.visible = false;
				this._viewUI.box_yh_type.visible = false;
				// this._viewUI.box_jl.visible = false;

				this._viewUI.txt_yh0.text = this._data.remittype;
				this._viewUI.txt_yh1.text = this._data.remitname;
				this._viewUI.txt_yh2.text = this._data.remitnum;
				this._viewUI.txt_yh3.text = this._data.remitaddr;
				this._viewUI.txt_yh4.text = this._data.min_limit > 0 ? StringU.substitute("银行卡最低{0}元起充，低于{1}元充值不受理", this._data.min_limit, this._data.min_limit) : '';
				this._viewUI.ingput_yh0.text = "";
				this._viewUI.ingput_yh1.text = "";
			})
		}
	}

	class SMItemRender extends ui.ajqp.dating.component.YingHangKaUI {
		private _game: Game;
		private _data: any;
		private _viewUI: any;
		private _chongzhitype = ["ZFBSM", "ZFBSM", "WXH5", "WXSM", "QQH5", "QQSM", "JDSM", "YLSM", "VIPPay", "YLSM", "ZFBSM", "WXSM", "KJCZ", "YSF", "YSF"];
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
			let rate = data.rate > 0 ? StringU.substitute("（赠送{0}%）", data.rate) : "";
			this.txt_title.text = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK ? data.alipayname + rate : data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK ? data.wxname + rate : data.ysfpayname + rate;
			this.txt_name.text = data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK ? data.alipaynum : data.type == Web_operation_fields.GAME_PAYIMG_TYPE_WXHK ? data.wxnum : data.ysfpaynum;
			this.img_icon.skin = StringU.substitute(DatingPath.ui_dating + "chongzhi/{0}.png", this._chongzhitype[data.type - 1]);

			this.btn_go.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle(e: LEvent) {
			if (!this._data) return;
			this._game.uiRoot.btnTween(e.currentTarget, this, () => {
				this._viewUI.box_sm_cz.visible = true;
				this._viewUI.box_sm_type.visible = false;

				if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_ZFBHK) { //支付宝
					this._viewUI.txt_sm0.text = this._data.alipayname;
					this._viewUI.txt_sm1.text = this._data.alipaynum;
					this._viewUI.img_sm_ewm.skin = this._data.alipay_ewm_url;
					// this._viewUI.btn_open_wx.label = "打开支付宝";
					// this._viewUI.btn_open_wx.visible = false;
					this._viewUI.txt_sm_zh.text = "支付宝账号：";
					this._viewUI.txt_zfbsm4.text = this._data.min_limit > 0 ? StringU.substitute("支付宝最低{0}元起充，低于{1}元充值不受理", this._data.min_limit, this._data.min_limit) : '';
					// this._viewUI.btn_save_ewm.left = undefined;
					// this._viewUI.btn_save_ewm.centerX = 0;
					this._viewUI.box_zfb.visible = true;
					this._viewUI.box_wx.visible = !this._viewUI.box_zfb.visible;
					this._viewUI.box_ysf.visible = !this._viewUI.box_zfb.visible;
				}
				else if (this._data.type == Web_operation_fields.GAME_PAYIMG_TYPE_YSFSM) { //云闪付
					this._viewUI.txt_sm0.text = this._data.ysfpayname;
					this._viewUI.txt_sm1.text = this._data.ysfpaynum;
					this._viewUI.img_sm_ewm.skin = this._data.ysfpay_ewm_url;
					// this._viewUI.btn_open_wx.label = "打开云闪付";
					// this._viewUI.btn_open_wx.visible = false;
					this._viewUI.txt_sm_zh.text = "云闪付账号：";
					this._viewUI.txt_ysfsm4.text = this._data.min_limit > 0 ? StringU.substitute("云闪付最低{0}元起充，低于{1}元充值不受理", this._data.min_limit, this._data.min_limit) : '';
					// this._viewUI.btn_save_ewm.left = undefined;
					// this._viewUI.btn_save_ewm.centerX = 0;
					this._viewUI.box_ysf.visible = true;
					this._viewUI.box_wx.visible = !this._viewUI.box_ysf.visible;
					this._viewUI.box_zfb.visible = !this._viewUI.box_ysf.visible;
				}
				else { //微信
					this._viewUI.txt_sm0.text = this._data.wxname;
					this._viewUI.txt_sm1.text = this._data.wxnum;
					this._viewUI.img_sm_ewm.skin = this._data.wx_ewm_url;
					// this._viewUI.btn_open_wx.label = "打开微信";
					// this._viewUI.btn_open_wx.visible = true;
					this._viewUI.txt_sm_zh.text = "微信账号：";
					this._viewUI.txt_wxsm4.text = this._data.min_limit > 0 ? StringU.substitute("微信最低{0}元起充，低于{1}元充值不受理", this._data.min_limit, this._data.min_limit) : '';
					// this._viewUI.btn_save_ewm.centerX = undefined;
					// this._viewUI.btn_save_ewm.left = 0;
					this._viewUI.box_wx.visible = true;
					this._viewUI.box_zfb.visible = !this._viewUI.box_wx.visible;
					this._viewUI.box_ysf.visible = !this._viewUI.box_wx.visible;
				}
				this._viewUI.txt_sm2.text = "";
				this._viewUI.txt_sm3.text = "";
			})
		}
	}

	class MoneyItemRender extends ui.ajqp.dating.component.ChongZhiJingEUI {
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