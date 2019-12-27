/**
* API-BY游戏list组件
*/
module gamedating.component {
	export class ApiListBY extends ui.ajqp.dating.component.List_BY_APIUI {
		private _game: Game;
		public page: any;
		public by_data = [
			{ gameType: 6, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, strName: "AG_byw", gameName: "AG捕鱼王" },
			{ gameid: "buyu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "DZ_buyu", gameName: "AE捕鱼王" },
			{ gTYPE: 7, mTYPE: 7004, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "JDB_wlby", gameName: "五龙捕鱼" },
			{ gTYPE: 7, mTYPE: 7003, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "JDB_csby", gameName: "财神捕鱼" },
			{ gTYPE: 7, mTYPE: 7001, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "JDB_lwby", gameName: "龙王捕鱼" },
			{ gTYPE: 7, mTYPE: 7002, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "JDB_lwby2", gameName: "龙王捕鱼2" }];
		constructor(game: Game, page: any) {
			super();
			this._game = game;
			this.page = page;
			this.init();
		}

		private renderHandlerDBMain(cell: DBDZ_Item, index: number): void {
			cell.setData(this.page, this, index, this._game);
		}

		private init(): void {
			this.list_by.hScrollBarSkin = ""
			this.list_by.itemRender = DBDZ_Item
			this.list_by.renderHandler = new Handler(this, this.renderHandlerDBMain)
		}

		setData(): void {
			this.list_by.dataSource = this.by_data;
		}

		update() {

		}

		close(): void {

		}
	}

	class DBDZ_Item extends ui.ajqp.dating.component.Hud_Jbd1_APIUI {
		private _page: any;
		private _mainView; ApiListBY;
		private _index: number;
		private _game: Game;
		private _data: any;
		constructor() {
			super()
		}

		set dataSource(v: any) {
			if (v) {
				let strSkin = DatingPath.sk_dating + "BY/" + v.strName + ".png";
				this.img.skin = strSkin;
				this._data = v;
			}
		}

		setData(page: any, mainView: ApiListBY, index: number, game: Game) {
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this._game = game;
			this.img_bz.visible = false;
			this.on(LEvent.CLICK, this, this.onBtnClick);
		}

		private onBtnClick(): void {
			this._game.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, (page: WaitEffectPage) => {
				page && page.playAni()
			})
			let data
			switch (this._data.pfCode) {
				case Web_operation_fields.GAME_PLATFORM_TYPE_AGQP:
					data = "about:blank" + "&" + this._data.gameType;
					this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, data)
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP:
					data = this._data.gTYPE + "&" + this._data.mTYPE + "&" + "about:blank";
					this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, data)
					break
				case Web_operation_fields.GAME_PLATFORM_TYPE_AEQP:
					this._game.uiRoot.btnTween(this.btn_box, this, () => {
						let data = this._data;
						if (LoadingMgr.ins.isLoaded(data)) {
							JsLoader.ins.startLoad(data, false, Handler.create(this, (assets) => {
								this.openPage(data.gameid);
							}))
						} else {
							JsLoader.ins.startLoad(data, true);
							this._game.showTips(StringU.substitute("{0}已加入更新队列", PageDef.getNameById(data)));
						}
					});
					break
			}
		}

		private openPage(gameid): void {
			let pageDef = getPageDef(gameid);
			this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
		}
	}
}