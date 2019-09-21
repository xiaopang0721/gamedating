/**
* 加入房间
*/
module gamedating.page {
	export class JoinCardRoomBase extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.JiaRuUI;
		protected readonly _game_id: string;	// 当前游戏ID
		protected readonly _open_id: string;	// 重新打开加入房间ID
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "fk.atlas",
				DatingPath.atlas_dating_ui + "jiaru.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.JiaRuUI");
			this.addChild(this._viewUI);

			this._game.cardRoomMgr.clear();
			this._game.cardRoomMgr.RoomType = 2;
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			// if (!this._game_id || this._game_id == "") {
			// 	throw "加入房间失败,请确认游戏类型及房间信息是否正确!";
			// }
			super.onOpen();
			this.initClipState();
			this.setButtonEvent(true);
		}

		private initClipState() {
			for (let index = 1; index < 7; index++) {
				this._viewUI["clip_" + index].visible = false;
			}
		}

		private setButtonEvent(isOn) {
			if (isOn) {
				for (let index = 0; index < 10; index++) {
					this._viewUI["btn_" + index].on(LEvent.CLICK, this, this.onBtnClick, [index]);
				}
				this._viewUI.btn_re.on(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_del.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			} else {
				for (let index = 0; index < 10; index++) {
					this._viewUI["btn_" + index].off(LEvent.CLICK, this, this.onBtnClick);
				}
				this._viewUI.btn_re.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_del.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
		}

		private onBtnClick(i: number, e: LEvent) {
			let len: number = this._game.cardRoomMgr.RoomID.length;
			this._game.cardRoomMgr.RoomID += i.toString();
			this._viewUI["clip_" + (len + 1)].index = i;
			this._viewUI["clip_" + (len + 1)].visible = true;
			if (this._game.cardRoomMgr.RoomID.length >= 6) {
				this._game.cardRoomMgr.RoomType = 2;
				// 输入完毕后自动寻找房间 加入成功后关闭当前页面
				//查找游戏id
				//从服务端查找到对应的gameid
				this._game.network.call_get_gameid_by_room_id(Number(this._game.cardRoomMgr.RoomID));
			}
		}

		private delRoomNo() {
			if (this._game.cardRoomMgr.RoomID.length == 0) return;
			let len: number = this._game.cardRoomMgr.RoomID.length;
			if (len > 1) {
				this._game.cardRoomMgr.RoomID = this._game.cardRoomMgr.RoomID.slice(0, - 1);
			} else {
				this._game.cardRoomMgr.RoomID = "";
			}
			this._viewUI["clip_" + len].visible = false;
		}

		private onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_CARDROOM) {
				this._game.cardRoomMgr.RoomID = "";
				this.initClipState();
				switch (msg.reason) {
					case Operation_Fields.OPRATE_CARDROOM_INST_NOT_FOUND:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_INST_NOT_FOUND");
						this._game.showTips("该房间不存在，请输入正确的房号");
						break;
					case Operation_Fields.OPRATE_CARDROOM_CAN_NOT_JOIN:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_CAN_NOT_JOIN");
						this._game.showTips("该房间已经满员啦，请加入其他房间");
						break;
					case Operation_Fields.OPRATE_CARDROOM_DISS_ROOM:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_DISS_ROOM");
						this._game.showTips("该房间已经解散啦，请加入其他房间");
						break;
					case Operation_Fields.OPRATE_CARDROOM_GAME_START:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_GAME_START");
						this._game.showTips("该房间已经开始游戏了，请加入其他房间");
						break;
					case Operation_Fields.OPRATE_CARDROOM_GAME_OVER:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_GAME_OVER");
						this._game.showTips("该房间的牌局已经结束了，请加入其他房间");
						break;
					case Operation_Fields.OPRATE_CARDROOM_JOIN_ROOM_NOT_MONEY:
						this._game.setIsLockGame(false, false, "StoryBase.OPRATE_CARDROOM_JOIN_ROOM_NOT_MONEY");
						this._game.alert(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), () => {
						}, () => {
						}, true, Tips.TIPS_SKIN_STR["cz"]);
						break;
					case Operation_Fields.OPRATE_CARDROOM_GAME_ID_RETURN:             // 获取gameid成功
						this._game.sceneObjectMgr.intoStory(msg.gameId, Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						break;
				}
			}
			else if (msg.type == Operation_Fields.OPRATE_TELEPORT) {
				switch (msg.reason) {
					case Operation_Fields.OPRATE_TELEPORT_MAP_JOIN_ROOM_SUCCESS:
						this.close();
						break;
				}
			}
		}

		//按钮点击
		protected onBtnTweenEnd(e: LEvent, target: any) {
			switch (target) {
				case this._viewUI.btn_re:
					this._game.cardRoomMgr.RoomID = "";
					this.initClipState();
					break;
				case this._viewUI.btn_del:
					this.delRoomNo();
					break;
				default:
					break;
			}
		}

		public close(): void {
			this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this.setButtonEvent(false);
			super.close();
		}

	}
}