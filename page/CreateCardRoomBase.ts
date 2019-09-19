/**
* 创建房间
*/
module gamedating.page {
	export class CreateCardRoomBase extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.FangKa_ChuangJianUI;
		private _round_count = [5, 10, 15, 20];	// 游戏局数
		private _pay_money = [3, 6, 9, 12];	// 不同局数的支付金额
		private _game_id: string;	// 当前游戏ID

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "fk.atlas",
				DatingPath.atlas_dating_ui + "dating.atlas",
			];
			this._isNeedBlack = true;

		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.FangKa_ChuangJianUI");
			this.addChild(this._viewUI);

			this._game.cardRoomMgr.clear();
			this.setCardConfig();
			this._game.cardRoomMgr.RoomRound = this._round_count[0];
			this._game.cardRoomMgr.RoomPay = this._pay_money[0];
			this._game.cardRoomMgr.PayType = 1;
			this._game.cardRoomMgr.RoomType = 1;
			for (let i = 0; i < this._round_count.length; i++) {
				this._viewUI["txt_round" + i].text = this._round_count[i] + "局";
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			if (!this._game_id || this._game_id == "" || !this._round_count || this._round_count.length <= 0 ||
				!this._pay_money || this._pay_money.length <= 0)
				throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
			super.onOpen();
			this._viewUI.btn_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this.setRoundCheckboxEvent(true);
			this.setPaytypeCheckboxEvent(true);
			this._viewUI.cb_round0.selected = true;
			// this._viewUI.cb_pay0.selected = true;
			this._viewUI.txt_money.text = this._pay_money[0].toString();
		}

		private setCardConfig() {
			if (!WebConfig.info || !WebConfig.info.card_config) return;
			let card_config = JSON.parse(WebConfig.info.card_config);
			let game_config = card_config[this.game_id];
			let count = 0;
			for (let key in game_config) {
				this._round_count[count] = parseFloat(key);
				this._pay_money[count] = game_config[key].money;
				count++;
			}
		}

		private onCheckboxClick(name: string, i: number, max_num: number) {
			for (let index = 0; index < max_num; index++) {
				(this._viewUI[name + index] as CheckBox).selected = false;
			}
			(this._viewUI[name + i] as CheckBox).selected = true;
		}

		private onRoundCheckboxClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onCheckboxClick(name, i, max_num);
			this._game.cardRoomMgr.RoomRound = this._round_count[i];
			this._game.cardRoomMgr.RoomPay = this._pay_money[i];
			this._viewUI.txt_money.text = this._pay_money[i].toString();
		}

		private onPayCheckboxClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onCheckboxClick(name, i, max_num);
			this._game.cardRoomMgr.PayType = i + 1;
		}

		private setRoundCheckboxEvent(isOn) {
			let name: string = "box_round";
			let name1: string = "cb_round";
			let max_num: number = 4;
			if (isOn) {
				for (let index = 0; index < max_num; index++) {
					this._viewUI[name + index].on(LEvent.CLICK, this, this.onRoundCheckboxClick, [name1, index, max_num]);
				}
			} else {
				for (let index = 0; index < max_num; index++) {
					this._viewUI[name + index].off(LEvent.CLICK, this, this.onRoundCheckboxClick, [name1, index, max_num]);
				}
			}
		}

		private setPaytypeCheckboxEvent(isOn) {
			let name: string = "box_pay";
			let name1: string = "cb_pay";
			let max_num: number = 2;
			if (isOn) {
				for (let index = 0; index < max_num; index++) {
					this._viewUI[name + index].on(LEvent.CLICK, this, this.onPayCheckboxClick, [name1, index, max_num]);
				}
			} else {
				for (let index = 0; index < max_num; index++) {
					this._viewUI[name + index].off(LEvent.CLICK, this, this.onPayCheckboxClick, [name1, index, max_num]);
				}
			}
		}

		//充值弹框
		protected chkEnoughMoney() {
			if (!this._game.sceneObjectMgr.mainPlayer) return false;
			if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < parseInt(this._viewUI.txt_money.text)) {
				TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足开房间哦~\n补充点金币去大杀四方吧~"), () => {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
				}, () => {
				}, false, TongyongPageDef.TIPS_SKIN_STR["cz"]);
				return false;
			}
			return true;
		}

		//按钮点击
		protected onBtnTweenEnd(e: LEvent, target: any) {
			switch (target) {
				case this._viewUI.btn_create:
					if (!this.chkEnoughMoney()) return;
					if (this._game.sceneObjectMgr.story) {
						this._game.sceneObjectMgr.changeStory(() => {
							this._game.sceneObjectMgr.intoStory(this._game_id, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						})
					} else {
						this._game.sceneObjectMgr.intoStory(this._game_id, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
					}
					break;
				default:
					break;
			}
		}

		protected onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_CARDROOM) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_CARDROOM_NOT_CARD_ID:
						TongyongPageDef.ins.alertRecharge(StringU.substitute("创建房间失败,没有多余的房间可用,请确认!"), () => {
						}, () => {
						}, true, TongyongPageDef.TIPS_SKIN_STR["qd"]);
						break;
					case Operation_Fields.OPRATE_CARDROOM_CREATE_ROOM_NOT_MONEY:
						TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), () => {
							this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
						}, () => {
						}, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
						break;
					case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS:
						this.close();
						break;
				}
			}
			else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_TELEPORT_MAP_CREATE_ROOM_SUCCESS:
						this.close();
						break;
				}
			}
		}



		get game_id() {
			return this._game_id;
		}

		set game_id(v: string) {
			this._game_id = v;
		}

		private onMapOutSuccess() {
			TongyongPageDef.ins.alertRecharge("房间已解散!", () => {
			}, () => {
			}, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
		}

		public close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this.setRoundCheckboxEvent(false);
				this.setPaytypeCheckboxEvent(false);
			}
			super.close();
		}

	}
}