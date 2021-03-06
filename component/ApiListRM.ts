/**
* API-RM游戏list组件
*/
module gamedating.component {
	export class ApiListRM extends ui.ajqp.dating.component.List_RM_APIUI {
		private _game: Game;
		public page: any;
		public rm_data = [
			{ gameid: "wxsaoleihb", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "wxsaoleihb", gameName: "微信红包扫雷" },
			{ gameid: "mpniuniu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "mpniuniu", gameName: "看牌抢庄牛牛" },
			{ gameid: "longhu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "longhu", gameName: "龙虎斗" },
			{ gameid: "niuniu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "niuniu", gameName: "抢庄牛牛" },
			{ gameid: "buyu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "buyu", gameName: "AE捕鱼王" },
			{ gameType: 6, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, strName: "byw", gameName: "AG捕鱼王" },
			{ gTYPE: 7, mTYPE: 7004, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "wlby", gameName: "五龙捕鱼" },
			{ gTYPE: 7, mTYPE: 7003, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "csby", gameName: "财神捕鱼" },
			{ gTYPE: 7, mTYPE: 7001, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "lwby", gameName: "龙王捕鱼" },
			{ gTYPE: 7, mTYPE: 7002, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, strName: "lwby2", gameName: "龙王捕鱼2" },
			{ gameid: "zjh", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "zjh", gameName: "炸金花" },
			{ gameid: "blackjack", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "blackjack", gameName: "21点" },
			{ gameid: "baijiale", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "baijiale", gameName: "百家乐" },
			{ gameid: "shuiguoji", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "shuiguoji", gameName: "水果机" },
			{ kindID: 920, strName: "slwh", gameName: "森林舞会", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 610, strName: "ddz", gameName: "斗地主", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP },
			{ kindID: 740, strName: "ermj", gameName: "二人麻将", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 620, strName: "dzpk", gameName: "德州扑克", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP },
			{ kindID: 630, strName: "sss", gameName: "十三水", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 1940, strName: "jsys", gameName: "金鲨银鲨", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }
		];
		constructor(game: Game, page: any) {
			super();
			this._game = game;
			this.page = page;
			this.init();
		}

		layout(clientRealWidth: number): void {
			this.list_rm.width = clientRealWidth
			this.width = clientRealWidth;
			let list_count = Math.ceil(this.rm_data.length / this.list_rm.repeatY);
			//单个item*列数-两列之间的间距-当前的宽度
			let is_max = false
			let max = this.list_rm.scrollBar.max
			let cur_value = this.list_rm.scrollBar.value
			if (cur_value > max - 1 && cur_value < max + 1) {
				is_max = true
			}
			this.list_rm.scrollBar.max = 250 * (list_count + 1) + list_count * this.list_rm.spaceX - clientRealWidth;
			if (is_max) {
				this.list_rm.scrollBar.value == this.list_rm.scrollBar.max
			}
		}

		private renderHandlerDBMain(cell: ApiRender, index: number): void {
			cell.setData(this.page, this, index, this._game);
		}

		private init(): void {
			this.list_rm.hScrollBarSkin = ""
			this.list_rm.scrollBar.elasticDistance = 100
			this.list_rm.itemRender = ApiRender
			this.list_rm.renderHandler = new Handler(this, this.renderHandlerDBMain)
		}

		setData(): void {
			this.list_rm.dataSource = this.rm_data;
		}

		update() {
			if (this.list_rm) {
				if (this.list_rm.dataSource) {
					let cells = this.list_rm.cells;
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