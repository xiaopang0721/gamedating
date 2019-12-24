/**
* API-RM游戏list组件
*/
module gamedating.component {
	export class ApiListRM extends ui.ajqp.dating.component.List_RM_APIUI {
		private _game: Game;
		public page: any;
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
			this.list_rm.hScrollBarSkin = ""
			this.list_rm.itemRender = DBDZ_Item
			this.list_rm.renderHandler = new Handler(this, this.renderHandlerDBMain)
		}

		setData(): void {
			this.list_rm.dataSource = [];
		}

		update() {

		}

		close(): void {

		}
	}

	class DBDZ_Item extends ui.ajqp.dating.component.Hud_Jbd1_APIUI {
		private _page: any;
		private _mainView; ApiListRM;
		private _index: number;
		private _game: Game;
		private _data: any;
		constructor() {
			super()
		}
		set dataSource(v: any) {
			if (v) {
				let strSkin = DatingPath.sk_dating + "JDB/JDB_" + v.strName + ".png";
				this.img.skin = strSkin;
				this._data = v;
			}
		}

		setData(page: any, mainView: ApiListRM, index: number, game: Game) {
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this._game = game;
			this.on(LEvent.CLICK, this, this.onBtnClick);
		}

		private onBtnClick(): void {
			// this._game.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, (page: WaitEffectPage) => {
			// 	page && page.playAni()
			// })
			// let data = this._data.gTYPE + "&" + this._data.mTYPE + "&" + "about:blank";
			// this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, data)
		}
	}
}