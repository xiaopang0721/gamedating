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
			{ gameType: 6, pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, strName: "byw", gameName: "AG捕鱼王" },
			{ gameid: "buyu", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, strName: "buyu", gameName: "AE捕鱼王" },
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
			this.list_rm.scrollBar.max = 250 * (list_count + 1) + list_count * this.list_rm.spaceX - clientRealWidth;
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
			this.list_rm.dataSource = this.rm_data;
		}

		update() {

		}

		close(): void {

		}
	}

	class DBDZ_Item extends ui.ajqp.dating.component.Hud_rm1UI {
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
				this._data = v;
				let strSkin = ApiMgr.GetSteSkinByPFCode(this._data.pfCode, this._data.strName);
				this.img.skin = strSkin;
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
			this._game.datingGame.apiMgr.GoGameByPFCode(this._data, this.btn_box);
		}

		private openPage(gameid): void {
			let pageDef = getPageDef(gameid);
			this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
		}
	}
}