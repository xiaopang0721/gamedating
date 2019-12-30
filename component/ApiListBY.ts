/**
* API-BY游戏list组件
*/
module gamedating.component {
	export class ApiListBY extends ui.ajqp.dating.component.List_BY_APIUI {
		private _game: Game;
		public page: any;
		public by_data = [
			{ gameType: 6, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, strName: "byw", gameName: "AG捕鱼王" },
			{ gameid: "buyu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "buyu", gameName: "AE捕鱼王" },
			{ gTYPE: 7, mTYPE: 7004, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "wlby", gameName: "五龙捕鱼" },
			{ gTYPE: 7, mTYPE: 7003, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "csby", gameName: "财神捕鱼" },
			{ gTYPE: 7, mTYPE: 7001, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "lwby", gameName: "龙王捕鱼" },
			{ gTYPE: 7, mTYPE: 7002, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "lwby2", gameName: "龙王捕鱼2" }];
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

	class DBDZ_Item extends ui.ajqp.dating.component.Hud_rm1UI {
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
				this._data = v;
				let strSkin = ApiMgr.GetSteSkinByPFCode(this._data.pfCode, this._data.strName);
				this.img.skin = strSkin;
			}
		}

		setData(page: any, mainView: ApiListBY, index: number, game: Game) {
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this._game = game;
			this.on(LEvent.CLICK, this, this.onBtnClick);
		}

		private onBtnClick(): void {
			this._game.datingGame.apiMgr.GoGameByPFCode(this._data,this.btn_box);
		}
	}
}