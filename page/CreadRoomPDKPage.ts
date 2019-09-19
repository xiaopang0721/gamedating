/**
* 跑得快-创建房间
*/
module gamedating.page {
	export class CreadRoomPDKPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.ChuangJianUI;
		private _round_count = [5, 10, 15, 20];	// 游戏局数
		private _pay_money = [3, 6, 9, 12];	// 不同局数的支付金额
		private _playersTemp = [3, 4];	//可选人数
		private _cardsTemp = [16, 15, 13, 12];	//可选牌数
		private _cardsInfo = ["去掉大小王、3个2、1个A", "去掉大小王、3个2、3个A、 1个K", "去掉大小王", "去掉大小王、3个2、1个A"];
		private _shunTemp = [5, 6];		//顺子几张起
		private _playerCount: number = 0;	//人数
		private _cardCount: number = 0;		//牌数
		private _qiangGuan: number = 0;		//是否抢关
		private _first: number = 0;			//先手
		private _shunZiCount: number = 0;	//顺子张数
		private _guanShang: number = 0;		//是否管上
		private _baoDi: number = 0;			//报单保底
		private _siDaiSan: number = 0;		//四带三
		private _zhaDanA: number = 0;		//3A炸弹

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
			this._viewUI = this.createView("dating.ChuangJianUI");
			this.addChild(this._viewUI);
			this._game.cardRoomMgr.clear();
			this.setCardConfig();
			this._game.cardRoomMgr.RoomRound = this._round_count[0];
			this._game.cardRoomMgr.PayType = 1;
			this._game.cardRoomMgr.RoomType = 1;
			// for (let i = 0; i < this._round_count.length; i++) {
			// 	this._viewUI["txt_round" + i].text = this._round_count[i] + "局";
			// }
		}

		private setCardConfig() {
			if (!WebConfig.info) return;
			let card_config = JSON.parse(WebConfig.info.card_config);
			let game_config = card_config["paodekuai"];
			let count = 0;
			for (let key in game_config) {
				this._round_count[count] = parseFloat(key);
				this._pay_money[count] = game_config[key].money;
				count++;
			}
		}

		private onClick(name: string, i: number, max_num: number) {
			//显示下拉框
			this._viewUI["tab_" + name].visible = !this._viewUI["tab_" + name].visible;
			this._viewUI["btn_" + name].rotation = this._viewUI["tab_" + name].visible ? -180 : 0;
		}

		private onRoundClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._game.cardRoomMgr.RoomRound = this._round_count[i];
			this._viewUI.txt_money.text = this._pay_money[i].toString();
		}

		private onPlayerClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._playerCount = this._playersTemp[i];
			//3人只有15和16张，4人只有12和13张
			// if (this._playerCount == 3) {
			// 	this._viewUI.cb_cards0.selected = true;
			// 	this._viewUI.cb_cards1.selected = false;
			// 	this._viewUI.cb_cards2.selected = false;
			// 	this._viewUI.cb_cards3.selected = false;
			// 	this._viewUI.box_cards0.disabled = false;
			// 	this._viewUI.box_cards1.disabled = false;
			// 	this._viewUI.box_cards2.disabled = true;
			// 	this._viewUI.box_cards3.disabled = true;
			// 	this._cardCount = this._cardsTemp[0];
			// 	this._viewUI.txt_info.text = this._cardsInfo[0];
			// } else if (this._playerCount == 4) {
			// 	this._viewUI.cb_cards2.selected = true;
			// 	this._viewUI.cb_cards0.selected = false;
			// 	this._viewUI.cb_cards1.selected = false;
			// 	this._viewUI.cb_cards3.selected = false;
			// 	this._viewUI.box_cards0.disabled = true;
			// 	this._viewUI.box_cards1.disabled = true;
			// 	this._viewUI.box_cards2.disabled = false;
			// 	this._viewUI.box_cards3.disabled = false;
			// 	this._cardCount = this._cardsTemp[2];
			// 	this._viewUI.txt_info.text = this._cardsInfo[2];
			// 	this._viewUI.cb_other3.selected = false;
			// 	this._viewUI.box_other3.disabled = true;
			// 	this._zhaDanA = 0;
			// }
		}

		private onCardsClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._cardCount = this._cardsTemp[i];
			// this._viewUI.txt_info.text = this._cardsInfo[i];
			// //牌数不够，要把3A炸弹禁用了
			// if (this._cardCount == 15 || this._cardCount == 13) {
			// 	this._viewUI.cb_other3.selected = false;
			// 	this._viewUI.box_other3.disabled = true;
			// 	this._zhaDanA = 0;
			// } else {
			// 	this._viewUI.box_other3.disabled = false;
			// 	this._zhaDanA = 0;
			// }
		}

		private onQiangGuanClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._qiangGuan = i == 0 ? 1 : 0;
		}

		private onFirstClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._first = i;
		}

		private onShunClick(name: string, i: number, max_num: number, e: LEvent) {
			this.onClick(name, i, max_num);
			this._shunZiCount = this._shunTemp[i];
		}

		private onOtherClick(i: number, e: LEvent) {
			this._viewUI["btn_" + i].selected = !this._viewUI["btn_" + i].selected;
			this._guanShang = this._viewUI.btn_1.selected == true ? 1 : 0;
			this._baoDi = this._viewUI.btn_2.selected == true ? 1 : 0;
			this._siDaiSan = this._viewUI.btn_3.selected == true ? 1 : 0;
			this._zhaDanA = this._viewUI.btn_4.selected == true ? 1 : 0;
		}

		private selectHandler(name: string, index: number,e:LEvent): void {
			// switch()
		}

		private initEventListen(name, isOn): void {
			if (isOn) {
				this._viewUI["box_" + name].on(LEvent.CLICK, this, this.onClick, [name]);
				this._viewUI["tab_" + name].selectHandler = Handler.create(this, this.selectHandler, [name], false);
				this._viewUI["tab_" + name].visible = false;
			} else {
				this._viewUI["box_" + name].off(LEvent.CLICK, this, this.onClick);
			}
		}

		//局数监听
		private setRoundEvent(isOn) {
			let name: string = "jushu";
			this.initEventListen(name, isOn);
		}

		//人数监听
		private setPlayerEvent(isOn) {
			let name: string = "renshu";
			this.initEventListen(name, isOn);
		}

		//玩法监听
		private setCardsEvent(isOn) {
			let name: string = "wanfa";
			this.initEventListen(name, isOn);
		}

		//抢关监听
		private setQiangGuanEvent(isOn) {
			let name: string = "qiangguan";
			this.initEventListen(name, isOn);
		}

		//先出监听
		private setFirstEvent(isOn) {
			let name: string = "xianchu";
			this.initEventListen(name, isOn);
		}

		//顺子监听
		private setShunEvent(isOn) {
			let name: string = "shunzi";
			this.initEventListen(name, isOn);
		}

		//其他规则监听
		private setOtherEvent(isOn) {
			let name: string = "btn_";
			let max_num: number = 4;
			if (isOn) {
				for (let index = 1; index < max_num + 1; index++) {
					this._viewUI[name + index].on(LEvent.CLICK, this, this.onOtherClick, [index]);
				}
			} else {
				for (let index = 1; index < max_num + 1; index++) {
					this._viewUI[name + index].off(LEvent.CLICK, this, this.onOtherClick, [index]);
				}
			}
		}

		//充值弹框
		protected chkEnoughMoney() {
			if (!this._game.sceneObjectMgr.mainPlayer) return false;
			if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < parseInt(this._viewUI.txt_money.text)) {
				this._game.alert(StringU.substitute("老板，您的金币不足开房间哦~\n补充点金币去大杀四方吧~"), () => {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
				}, () => {
				}, false, Tips.TIPS_SKIN_STR["cz"]);
				return false;
			}
			return true;
		}

		//按钮点击
		protected onBtnTweenEnd(e: LEvent, target: any) {
			switch (target) {
				case this._viewUI.btn_create:
					if (!this.chkEnoughMoney()) return;
					let temp = {
						unit_count: this._playerCount,
						cards_count: this._cardCount,
						qiangguan: this._qiangGuan,
						first: this._first,
						shunzi: this._shunZiCount,
						guanshang: this._guanShang,
						baodi: this._baoDi,
						sidaisan: this._siDaiSan,
						bombA: this._zhaDanA,
					};
					this._game.cardRoomMgr.RoomType = 1;
					this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
					if (this._game.sceneObjectMgr.story) {
						this._game.sceneObjectMgr.changeStory(() => {
							this._game.sceneObjectMgr.intoStory("rpaodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						})
					} else {
						this._game.sceneObjectMgr.intoStory("rpaodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						this.close();
					}
					break;
				default:
					break;
			}
		}

		//地图监听
		private onUpdateMapInfo(): void {
			let mapInfo = this._game.sceneObjectMgr.mapInfo;
			if (!mapInfo) {
				this.setCardRoomData()
			} else {
				this.close();
			}
		}

		//地图中创建房间
		protected setCardRoomData(): void {
			let story = this._game.sceneObjectMgr.story;
			if (story) {
				story.enterMap();
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
			}
		}

		protected onOptHandler(optcode: number, msg: any) {
			if (msg.type == Operation_Fields.OPRATE_CARDROOM)
				switch (msg.reason) {
					case Operation_Fields.OPRATE_CARDROOM_NOT_CARD_ID:
						this._game.alert(StringU.substitute("创建房间失败,没有多余的房间可用,请确认!"), () => {
						}, () => {
						}, true, Tips.TIPS_SKIN_STR["qd"]);
						break;
					case Operation_Fields.OPRATE_CARDROOM_CREATE_ROOM_NOT_MONEY:
						this._game.alert(StringU.substitute("老板，您的金币不足哦~\n补充点金币去大杀四方吧~"), () => {
							this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
						}, () => {
						}, false, Tips.TIPS_SKIN_STR["cz"]);
						break;
					default:
						break;
				}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			if (!this._round_count || this._round_count.length <= 0 ||
				!this._pay_money || this._pay_money.length <= 0)
				throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
			super.onOpen();
			this._viewUI.btn_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this.setRoundEvent(true);
			this.setPlayerEvent(true);
			this.setCardsEvent(true);
			this.setQiangGuanEvent(true);
			this.setFirstEvent(true);
			this.setShunEvent(true);
			this.setOtherEvent(true);
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			this.updateViewUI();
		}

		private updateViewUI(): void {
			// this._viewUI.cb_round0.selected = true;
			// this._viewUI.cb_pay0.selected = true;
			// this._viewUI.cb_player0.selected = true;
			// this._playerCount = 3;
			// this._viewUI.cb_cards0.selected = true;
			// this._cardCount = 16;
			// this._viewUI.txt_info.text = "去掉大小王、3个2、1个A";
			// this._viewUI.cb_qiang1.selected = true;
			// this._qiangGuan = 0;
			// this._viewUI.cb_first0.selected = true;
			// this._first = 0;
			// this._viewUI.cb_shun0.selected = true;
			// this._shunZiCount = 5;
			// this._viewUI.cb_other0.selected = true;
			// this._guanShang = 1;
			// this._viewUI.cb_other2.selected = true;
			// this._baoDi = 0;
			// this._siDaiSan = 1;
			// this._zhaDanA = 0;
			// this._viewUI.txt_money.text = this._pay_money[0].toString();
			// this._viewUI.box_cards2.disabled = true;
			// this._viewUI.box_cards3.disabled = true;
			//存起来
			let temp = {
				unit_count: this._playerCount,
				cards_count: this._cardCount,
				qiangguan: this._qiangGuan,
				first: this._first,
				shunzi: this._shunZiCount,
				guanshang: this._guanShang,
				baodi: this._baoDi,
				sidaisan: this._siDaiSan,
				bombA: this._zhaDanA,
			};
			this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
		}

		private onMapOutSuccess() {
			this._game.alert("房间已解散!", () => {
			}, () => {
			}, true, Tips.TIPS_SKIN_STR["cz"]);
		}

		public close(): void {
			if (this._viewUI) {
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this.setRoundEvent(false);
				this.setPlayerEvent(false);
				this.setCardsEvent(false);
				this.setQiangGuanEvent(false);
				this.setFirstEvent(false);
				this.setShunEvent(false);
				this.setOtherEvent(false);
			}
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
			super.close();
		}
	}
}