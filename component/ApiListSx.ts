/**
*API-AG游戏list组件
*/
module gamedating.page {
	export class ApiListSx extends ui.ajqp.dating.component.List_Sx_APIUI {
		private _game: Game;
		public page: any;
		constructor(game: Game, page: any) {
			super();
			this._game = game;
			this.page = page;

			this.init()
		}

		private init(): void {
			this.list_ag.hScrollBarSkin = "";
			this.list_ag.scrollBar.autoHide = true;
			this.list_ag.scrollBar.elasticDistance = 100;
			this.list_ag.itemRender = ListApiRender;
			this.list_ag.renderHandler = new Handler(this, this.renderHandler);
			this.list_ag.dataSource = [1];
		}

		private _real_width: number[] = [];
		private renderHandler(cell: ListApiRender, index: number) {
			if (cell) {
				cell.setData(this.page, this, index, this._game);
			};
		}

		destroy(): void {
			this.list_ag.dataSource = [];
			Laya.timer.clearAll(this);
			super.destroy();
		}
	}


	class ListApiRender extends ui.ajqp.dating.component.Hud_Sx_APIUI {
		private _page: any;
		private _mainView; ApiListJDB;
		private _index: number;
		private _game: Game;
		private _data: any;

		constructor() {
			super();
			this.list_sx.itemRender = HudSxApiRender;
			this.list_sx.renderHandler = new Handler(this, this.renderHandler);
		}

		set dataSource(v: any) {
			if (!v) return;
			this.list_sx.dataSource = [1,2,3,4,5,6];
			this.list_sx.repeatX = Math.ceil(this.list_sx.dataSource.length / 2)
			this.list_sx.width = 296 * this.list_sx.repeatX;
			this.width = 299 + 15 + this.list_sx.width;
		}

		setData(page: any, mainView: ApiListSx, index: number, game: Game) {
			this._game = game;
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this.img_sx.skin = DatingPath.sk_dating + "SX/SX_zr.png";
		}

		private renderHandler(cell: HudSxApiRender, index: number) {
			if (cell) {
				cell.setData(this._page, this._mainView, this._index, this._game)
			}
		}

		destroy() {
			super.destroy();
		}
	}

	class HudSxApiRender extends ui.ajqp.dating.component.Hud_Sx1_APIUI {
		private _page: any;
		private _mainView; ApiListJDB;
		private _index: number;
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(page: any, mainView: ApiListSx, index: number, game: Game) {
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this._game = game;
			this.img.skin = DatingPath.sk_dating + "SX/SX_bjl.png";
			this.on(LEvent.CLICK, this, this.onClickHandle);
		}

		private onClickHandle(e: LEvent) {

		}

		destroy() {
			super.destroy();
		}
	}
}