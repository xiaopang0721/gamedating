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

		layout(clientRealWidth: number): void {
			this.list_by.width = clientRealWidth
			this.width = clientRealWidth;
		}

		private renderHandlerDBMain(cell: ApiRender, index: number): void {
			cell.setData(this.page, this, index, this._game);
		}

		private init(): void {
			this.list_by.hScrollBarSkin = ""
			this.list_by.scrollBar.elasticDistance = 100
			this.list_by.itemRender = ApiRender
			this.list_by.renderHandler = new Handler(this, this.renderHandlerDBMain)
		}

		setData(): void {
			this.list_by.dataSource = this.by_data;
		}

		update() {
			if (this.list_by) {
				if (this.list_by.dataSource) {
					let cells = this.list_by.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as ApiRender;
						element.update();
					}
				}
			}
		}

		close(): void {

		}
	}
}