/**
* 跑得快-创建房间
*/
module gamedating.page {
	export class CreadRoomPDKPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.ChuangJianUI;
		private _round_count = [5, 10, 15, 20];	// 游戏局数
		private _pay_money = [3, 6, 9, 12];	// 不同局数的支付金额
		private _playersTemp = [3, 4];	//可选人数
		private _cardsInfo = ["无大小王 | 3个2 | 1个A", "无大小王 | 3个2 | 3个A | 1个K", "无大小王", "无大小王 | 3个2 | 1个A"];
		private _cardsTemp = [16, 15, 13, 12];	//可选牌数
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
		private _game_id: string = "rpaodekuai";	// 当前游戏ID
		get game_id() {
			return this._game_id;
		}

		set game_id(v: string) {
			this._game_id = v;
		}

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
		}

		private setCardConfig() {
			if (!WebConfig.info) return;
			let card_config = JSON.parse(WebConfig.info.card_config);
			let game_config = card_config[this._game_id];
			let count = 0;
			for (let key in game_config) {
				this._round_count[count] = parseFloat(key);
				this._pay_money[count] = game_config[key].money;
				count++;
			}
			this._game.cardRoomMgr.clear();
			this._game.cardRoomMgr.PayType = 1;
			this._game.cardRoomMgr.RoomType = 1;
		}

		private onClick(name: string) {
			this.hideAllTab(name);
			//显示下拉框
			this._viewUI["tab_" + name].visible = !this._viewUI["tab_" + name].visible;
			this._viewUI["btn_" + name].rotation = this._viewUI["tab_" + name].visible ? -180 : 0;
		}

		private onRoundClick(i: number, name: string) {
			this._game.cardRoomMgr.RoomRound = this._round_count[i];
			this._viewUI.txt_money.text = this._pay_money[i].toString();
			this._viewUI.lb_jushu.text = this._game.cardRoomMgr.RoomRound + "局";
			this.onClick(name);
		}

		private onPlayerClick(i: number, name: string) {
			this._playerCount = this._playersTemp[i];
			//3人只有15和16张，4人只有12和13张
			this.updateRenShuUI();
			this._viewUI.lb_renshu.text = this._playerCount + "人";
			this.onClick(name);
		}

		private updateRenShuUI(isInit: boolean = false): void {
			if (this._playerCount == 3) {
				this._viewUI.tab_wanfa.items[0].disabled = false;
				this._viewUI.tab_wanfa.items[0].getChildAt(0).color = "#ffffff";
				this._viewUI.tab_wanfa.items[1].disabled = false;
				this._viewUI.tab_wanfa.items[1].getChildAt(0).color = "#ffffff";
				this._viewUI.tab_wanfa.items[2].disabled = true;
				this._viewUI.tab_wanfa.items[2].getChildAt(0).color = "#8e8e8e";
				this._viewUI.tab_wanfa.items[3].disabled = true;
				this._viewUI.tab_wanfa.items[3].getChildAt(0).color = "#8e8e8e";
				this._cardCount = this._cardCount == 15 || this._cardCount == 16 ? this._cardCount : this._cardsTemp[0];
				let carIndex1 = this._cardsTemp.indexOf(this._cardCount);
				if (!isInit) {
					for (let i = 0; i < 4; i++) {
						if (carIndex1) {
							this._viewUI.tab_wanfa.items[i].selected = true;
						} else {
							this._viewUI.tab_wanfa.items[i].selected = false;
						}
					}
				}
				this._viewUI.lb_info_wanfa.text = this._cardsInfo[carIndex1];
			} else if (this._playerCount == 4) {
				this._viewUI.tab_wanfa.items[0].disabled = true;
				this._viewUI.tab_wanfa.items[0].getChildAt(0).color = "#8e8e8e";
				this._viewUI.tab_wanfa.items[1].disabled = true;
				this._viewUI.tab_wanfa.items[1].getChildAt(0).color = "#8e8e8e";
				this._viewUI.tab_wanfa.items[2].disabled = false;
				this._viewUI.tab_wanfa.items[2].getChildAt(0).color = "#ffffff";
				this._viewUI.tab_wanfa.items[3].disabled = false;
				this._viewUI.tab_wanfa.items[3].getChildAt(0).color = "#ffffff";
				this._cardCount = this._cardCount == 13 || this._cardCount == 12 ? this._cardCount : this._cardsTemp[2];
				let carIndex2 = this._cardsTemp.indexOf(this._cardCount);
				if (!isInit) {
					for (let i = 0; i < 4; i++) {
						if (this._cardCount == carIndex2) {
							this._viewUI.tab_wanfa.items[i].selected = true;
						} else {
							this._viewUI.tab_wanfa.items[i].selected = false;
						}
					}
				}
				this._viewUI.lb_info_wanfa.text = this._cardsInfo[carIndex2];
			}
			this._viewUI.lb_wanfa.text = this._cardCount + "张";
			this.updateCardsUI();
		}

		private onCardsClick(i: number, name: string) {
			this._cardCount = this._cardsTemp[i];
			this._viewUI.lb_info_wanfa.text = this._cardsInfo[i];
			this.updateCardsUI();
			this.onClick(name);
		}

		private updateCardsUI(): void {
			this._viewUI.lb_wanfa.text = this._cardCount + "张";
			// //牌数不够，要把3A炸弹禁用了
			if (this._cardCount == 15 || this._cardCount == 13) {
				this._viewUI.box_4.disabled = true;
				this._zhaDanA = 0;
			} else {
				this._viewUI.box_4.disabled = false;
			}
		}

		private onQiangGuanClick(i: number, name: string) {
			this._qiangGuan = i == 0 ? 1 : 0;
			this._viewUI.lb_qiangguan.text = i == 0 ? "抢关" : "不抢";
			this.onClick(name);
		}

		private onFirstClick(i: number, name: string) {
			this._first = i;
			this._viewUI.lb_xianchu.text = this._first == 0 ? "黑桃3" : "赢家";
			this.onClick(name);
		}

		private onShunClick(i: number, name: string) {
			this._shunZiCount = this._shunTemp[i];
			this._viewUI.lb_shunzi.text = this._shunZiCount + "张起顺";
			this.onClick(name);
		}

		private onOtherClick(i: number, e: LEvent) {
			this._viewUI["btn_" + i].selected = !this._viewUI["btn_" + i].selected;
			this._guanShang = this._viewUI.btn_1.selected == true ? 1 : 0;
			this._baoDi = this._viewUI.btn_2.selected == true ? 1 : 0;
			this._siDaiSan = this._viewUI.btn_3.selected == true ? 1 : 0;
			this._zhaDanA = this._viewUI.btn_4.selected == true ? 1 : 0;
		}

		private selectHandler(name: string, index: number, e: LEvent): void {
			switch (name) {
				case this._nameJuSu:
					this.onRoundClick(index, name);
					break
				case this._namePlayer:
					this.onPlayerClick(index, name);
					break
				case this._nameQiangGuan:
					this.onQiangGuanClick(index, name);
					break
				case this._nameShunZi:
					this.onShunClick(index, name);
					break
				case this._nameWanFa:
					this.onCardsClick(index, name);
					break
				case this._nameXianChu:
					this.onFirstClick(index, name);
					break
			}
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
		private _nameJuSu: string = "jushu";
		private setRoundEvent(isOn) {
			let name: string = this._nameJuSu;
			this.initEventListen(name, isOn);
		}

		//人数监听
		private _namePlayer: string = "renshu";
		private setPlayerEvent(isOn) {
			let name: string = this._namePlayer;
			this.initEventListen(name, isOn);
		}

		//玩法监听
		private _nameWanFa: string = "wanfa";
		private setWanFaEvent(isOn) {
			let name: string = this._nameWanFa;
			this.initEventListen(name, isOn);
		}

		//抢关监听
		private _nameQiangGuan: string = "qiangguan";
		private setQiangGuanEvent(isOn) {
			let name: string = this._nameQiangGuan;
			this.initEventListen(name, isOn);
		}

		//先出监听
		private _nameXianChu: string = "xianchu";
		private setFirstEvent(isOn) {
			let name: string = this._nameXianChu;
			this.initEventListen(name, isOn);
		}

		//顺子监听
		private _nameShunZi: string = "shunzi";
		private setShunEvent(isOn) {
			let name: string = this._nameShunZi;
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
				}, true, Tips.TIPS_SKIN_STR["cz"]);
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
						juIndex: this._round_count.indexOf(this._game.cardRoomMgr.RoomRound) < 0 ? 0 : this._round_count.indexOf(this._game.cardRoomMgr.RoomRound)
					};
					this._game.cardRoomMgr.RoomType = 1;
					this._game.cardRoomMgr.RoomPay = Number(this._viewUI.txt_money.text);
					this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
					localSetItem("pdkRoomArgs", this._game.cardRoomMgr.Agrs);
					let hud = this._game.uiRoot.HUD.getPage(DatingPageDef.PAGE_HUD) as HudMainPage;
					hud && hud.saveListStatus();
					if (this._game.sceneObjectMgr.story) {
						this._game.sceneObjectMgr.changeStory(() => {
							this._game.sceneObjectMgr.intoStory("rpaodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						})
					} else {
						this._game.sceneObjectMgr.intoStory("rpaodekuai", Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString(), true, this._game.cardRoomMgr);
						this.close();
					}
					break;
				case this._viewUI.btn_tc:
					let paodekuaiStory = this._game.sceneObjectMgr.story;
					let mapInfo = this._game.sceneObjectMgr.mapInfo;
					mapInfo = mapInfo;
					let mainUnit = this._game.sceneObjectMgr.mainUnit;
					if (!paodekuaiStory || !mapInfo || !mainUnit) {
						let page = this._game.uiRoot.HUD.getPage(DatingPageDef.PAGE_HUD) as gamedating.page.HudMainPage;
						if (page && page.isOpenPage) {
							page.isOpenPage = false;
						}
						super.close();
						return;
					} else {
						paodekuaiStory.endRoomCardGame(mainUnit.GetIndex(), mapInfo.GetCardRoomId());
						this._game.sceneObjectMgr.leaveStory();
						super.close();
					}
					break
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
			this._viewUI.box_main.on(LEvent.CLICK, this, this.hideAllTab);
			this._viewUI.btn_create.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_tc.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

			this.setCardConfig();
			this.setRoundEvent(true);
			this.setPlayerEvent(true);
			this.setWanFaEvent(true);
			this.setQiangGuanEvent(true);
			this.setFirstEvent(true);
			this.setShunEvent(true);
			this.setOtherEvent(true);
			this.updateViewUI();
		}

		private hideAllTab(name: string): void {
			if (name != this._nameJuSu) {
				this._viewUI.tab_jushu.visible = false;
				this._viewUI.btn_jushu.rotation = 0;
			}
			if (name != this._nameQiangGuan) {
				this._viewUI.tab_qiangguan.visible = false;
				this._viewUI.btn_qiangguan.rotation = 0;
			}
			if (name != this._namePlayer) {
				this._viewUI.tab_renshu.visible = false;
				this._viewUI.btn_renshu.rotation = 0;
			}
			if (name != this._nameShunZi) {
				this._viewUI.tab_shunzi.visible = false;
				this._viewUI.btn_shunzi.rotation = 0;
			}
			if (name != this._nameWanFa) {
				this._viewUI.tab_wanfa.visible = false;
				this._viewUI.btn_wanfa.rotation = 0;
			}
			if (name != this._nameXianChu) {
				this._viewUI.tab_xianchu.visible = false;
				this._viewUI.btn_xianchu.rotation = 0;
			}
		}

		private updateViewUI(): void {
			let args: any = localGetItem("pdkRoomArgs");
			let juIndex = 0;
			if (args) {
				args = JSON.parse(args);
				this._playerCount = args.unit_count;
				this._viewUI.lb_renshu.text = this._playerCount + "人";
				this._cardCount = args.cards_count;
				this._viewUI.lb_wanfa.text = this._cardCount + "张";
				this._qiangGuan = args.qiangguan;
				this._viewUI.lb_qiangguan.text = this._qiangGuan == 1 ? "抢关" : "不抢";
				this._first = args.first;
				this._viewUI.lb_xianchu.text = this._first == 0 ? "黑桃3" : "赢家";
				this._shunZiCount = args.shunzi;
				this._viewUI.lb_shunzi.text = this._shunZiCount + "张起顺";
				juIndex = args.juIndex || juIndex;
				this._viewUI.lb_jushu.text = this._round_count[juIndex] + "局";
				this._game.cardRoomMgr.RoomRound = this._round_count[juIndex];
				this._viewUI.txt_money.text = this._pay_money[juIndex].toString();

				this._guanShang = args.guanshang;
				this._viewUI.btn_1.selected = this._guanShang ? true : false;
				this._baoDi = args.baodi;
				this._viewUI.btn_2.selected = this._baoDi ? true : false;
				this._siDaiSan = args.sidaisan;
				this._viewUI.btn_3.selected = this._siDaiSan ? true : false;
				this._zhaDanA = args.bombA;
				this._viewUI.btn_4.selected = this._zhaDanA ? true : false;
			} else {
				//默认
				this._viewUI.lb_jushu.text = "5局";
				this._viewUI.lb_renshu.text = "3人";
				this._playerCount = 3;
				this._viewUI.lb_wanfa.text = "16张";
				this._cardCount = 16;
				this._viewUI.lb_qiangguan.text = "不抢";
				this._qiangGuan = 0;
				this._viewUI.lb_xianchu.text = "黑桃3";
				this._first = 0;
				this._viewUI.lb_shunzi.text = "5张起顺";
				this._shunZiCount = 5;
				this._viewUI.btn_1.selected = true;
				this._guanShang = 1;
				this._baoDi = 0;
				this._viewUI.btn_2.selected = false;
				this._viewUI.btn_3.selected = true;
				this._siDaiSan = 1;
				this._zhaDanA = 0;
				juIndex = 0;
				this._viewUI.txt_money.text = this._pay_money[juIndex].toString();
				this._game.cardRoomMgr.RoomRound = this._round_count[juIndex];
			}

			this.updateRenShuUI(true);
			this.updateCardsUI();
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
				juIndex: juIndex
			};
			this._game.cardRoomMgr.Agrs = JSON.stringify(temp);
			localSetItem("pdkRoomArgs", this._game.cardRoomMgr.Agrs);
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
				this.setWanFaEvent(false);
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