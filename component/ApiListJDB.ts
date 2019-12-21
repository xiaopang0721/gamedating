/**
* API-JDB游戏list组件
*/
module gamedating.component {
	export class ApiListJDB extends ui.ajqp.dating.component.List_JDB_APIUI {
		private _game: Game;
		public page: any;
		public jdb_data =
		[{ gTYPE: 0, mTYPE: 14038, strName: "ajdb" }, { gTYPE: 0, mTYPE: 8023, strName: "alpysm" }, { gTYPE: 0, mTYPE: 14005, strName: "bdr" }, { gTYPE: 0, mTYPE: 8003, strName: "bl" }, { gTYPE: 0, mTYPE: 8047, strName: "bl2" }
			, { gTYPE: 9, mTYPE: 9007, strName: "cjfsgp" }, { gTYPE: 0, mTYPE: 14036, strName: "cjnb" }, { gTYPE: 0, mTYPE: 14022, strName: "ckth" }, { gTYPE: 0, mTYPE: 14013, strName: "cxkd" }, { gTYPE: 0, mTYPE: 14018, strName: "daj" }
			, { gTYPE: 0, mTYPE: 14029, strName: "dfss" }, { gTYPE: 0, mTYPE: 14001, strName: "dj" }, { gTYPE: 0, mTYPE: 14003, strName: "dsxm" }, { gTYPE: 0, mTYPE: 14023, strName: "dwpk" }, { gTYPE: 0, mTYPE: 14026, strName: "fdc" }
			, { gTYPE: 0, mTYPE: 8030, strName: "fkkxj" }, { gTYPE: 0, mTYPE: 14010, strName: "flzt" }, { gTYPE: 0, mTYPE: 14033, strName: "fnpd" }, { gTYPE: 9, mTYPE: 9003, strName: "fqzs" }
			, { gTYPE: 0, mTYPE: 8046, strName: "gg" }, { gTYPE: 0, mTYPE: 14034, strName: "glf" }, { gTYPE: 0, mTYPE: 8017, strName: "gxn" }, { gTYPE: 9, mTYPE: 9006, strName: "hgscq" }, { gTYPE: 0, mTYPE: 8021, strName: "hjxjdg" }
			, { gTYPE: 0, mTYPE: 15004, strName: "hnz" }, { gTYPE: 0, mTYPE: 14027, strName: "hy777" }, { gTYPE: 0, mTYPE: 15011, strName: "hyz" }, { gTYPE: 0, mTYPE: 14042, strName: "jbp" }, { gTYPE: 0, mTYPE: 15001, strName: "jjbx" }
			, { gTYPE: 0, mTYPE: 8031, strName: "jjz" }, { gTYPE: 0, mTYPE: 8034, strName: "jqx" }, { gTYPE: 0, mTYPE: 8044, strName: "jsmr" }, { gTYPE: 0, mTYPE: 14012, strName: "jtbw" }, { gTYPE: 0, mTYPE: 15013, strName: "jwh" }
			, { gTYPE: 0, mTYPE: 14039, strName: "kydb" }, { gTYPE: 0, mTYPE: 8027, strName: "llcw" }, { gTYPE: 0, mTYPE: 8005, strName: "lmdmx" }, { gTYPE: 0, mTYPE: 14035, strName: "longw" }, { gTYPE: 0, mTYPE: 8036, strName: "lw" }, { gTYPE: 0, mTYPE: 14020, strName: "mfrs" }
			, { gTYPE: 0, mTYPE: 8022, strName: "mqws" }, { gTYPE: 0, mTYPE: 8037, strName: "msx" }, { gTYPE: 0, mTYPE: 8050, strName: "msyq" }, { gTYPE: 0, mTYPE: 14002, strName: "my" }
			, { gTYPE: 0, mTYPE: 8018, strName: "npl" }, { gTYPE: 9, mTYPE: 9004, strName: "pjdh" }, { gTYPE: 0, mTYPE: 14021, strName: "qgq" }, { gTYPE: 0, mTYPE: 14040, strName: "qhdb" }, { gTYPE: 0, mTYPE: 8029, strName: "qhtgd" }, { gTYPE: 0, mTYPE: 15002, strName: "qtds" }
			, { gTYPE: 0, mTYPE: 8026, strName: "rwjf" }, { gTYPE: 0, mTYPE: 15009, strName: "rzdjj" }, { gTYPE: 0, mTYPE: 14030, strName: "sbjg" }, { gTYPE: 0, mTYPE: 8016, strName: "sbzkxq" }
			, { gTYPE: 0, mTYPE: 14004, strName: "sedcs" }, { gTYPE: 0, mTYPE: 8024, strName: "sjwg" }, { gTYPE: 0, mTYPE: 14008, strName: "sldx" }, { gTYPE: 0, mTYPE: 14017, strName: "snqx" }, { gTYPE: 0, mTYPE: 8025, strName: "stmz" }
			, { gTYPE: 0, mTYPE: 8002, strName: "tbhdqx" }, { gTYPE: 0, mTYPE: 8049, strName: "tbhdqx2" }, { gTYPE: 0, mTYPE: 8006, strName: "twhx" }, { gTYPE: 0, mTYPE: 15012, strName: "wflm" }
			, { gTYPE: 0, mTYPE: 8019, strName: "wfsb" }, { gTYPE: 0, mTYPE: 8004, strName: "wk" }, { gTYPE: 0, mTYPE: 14016, strName: "wptg" }, { gTYPE: 0, mTYPE: 15010, strName: "xmcw" }, { gTYPE: 9, mTYPE: 9001, strName: "xml" }
			, { gTYPE: 9, mTYPE: 9002, strName: "xnkl" }, { gTYPE: 0, mTYPE: 14015, strName: "xqdz" }, { gTYPE: 0, mTYPE: 8035, strName: "xyf" }, { gTYPE: 0, mTYPE: 15005, strName: "xyfw" }, { gTYPE: 0, mTYPE: 8001, strName: "xyl" }, { gTYPE: 0, mTYPE: 8007, strName: "xys" }
			, { gTYPE: 0, mTYPE: 14025, strName: "xysc" }, { gTYPE: 0, mTYPE: 8028, strName: "xytjs" }, { gTYPE: 0, mTYPE: 8051, strName: "xyy" }, { gTYPE: 0, mTYPE: 8015, strName: "ygmb" }, { gTYPE: 0, mTYPE: 14011, strName: "yhhwd" }
			, { gTYPE: 0, mTYPE: 15006, strName: "yjdg" }, { gTYPE: 0, mTYPE: 14007, strName: "yqcr" }, { gTYPE: 0, mTYPE: 14006, strName: "ywfw" }, { gTYPE: 0, mTYPE: 8014, strName: "zcs" }
			, { gTYPE: 0, mTYPE: 8020, strName: "zmkm" }, { gTYPE: 0, mTYPE: 8048, strName: "zmkm2" }
		];
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
			this.list_jdb.hScrollBarSkin = ""
			this.list_jdb.itemRender = DBDZ_Item
			this.list_jdb.renderHandler = new Handler(this, this.renderHandlerDBMain)
			this.list_jdb.dataSource = this.jdb_data;
		}

		update() {

		}

		close(): void {

		}
	}
	//----------夺宝电子组件start---------------
	// class DBDZ_ItemMain extends ui.ajqp.dating.component.Hud_Jdb_APIUI {
	// 	public jdb_data =
	// 	[{ gTYPE: 0, mTYPE: 14038, strName: "ajdb" }, { gTYPE: 0, mTYPE: 8023, strName: "alpysm" }, { gTYPE: 0, mTYPE: 14005, strName: "bdr" }, { gTYPE: 0, mTYPE: 8003, strName: "bl" }, { gTYPE: 0, mTYPE: 8047, strName: "bl2" }
	// 		, { gTYPE: 9, mTYPE: 9007, strName: "cjfsgp" }, { gTYPE: 0, mTYPE: 14036, strName: "cjnb" }, { gTYPE: 0, mTYPE: 14022, strName: "ckth" }, { gTYPE: 0, mTYPE: 14013, strName: "cxkd" }, { gTYPE: 0, mTYPE: 14018, strName: "daj" }
	// 		, { gTYPE: 0, mTYPE: 14029, strName: "dfss" }, { gTYPE: 0, mTYPE: 14001, strName: "dj" }, { gTYPE: 0, mTYPE: 14003, strName: "dsxm" }, { gTYPE: 0, mTYPE: 14023, strName: "dwpk" }, { gTYPE: 0, mTYPE: 14026, strName: "fdc" }
	// 		, { gTYPE: 0, mTYPE: 8030, strName: "fkkxj" }, { gTYPE: 0, mTYPE: 14010, strName: "flzt" }, { gTYPE: 0, mTYPE: 14033, strName: "fnpd" }, { gTYPE: 9, mTYPE: 9003, strName: "fqzs" }
	// 		, { gTYPE: 0, mTYPE: 8046, strName: "gg" }, { gTYPE: 0, mTYPE: 14034, strName: "glf" }, { gTYPE: 0, mTYPE: 8017, strName: "gxn" }, { gTYPE: 9, mTYPE: 9006, strName: "hgscq" }, { gTYPE: 0, mTYPE: 8021, strName: "hjxjdg" }
	// 		, { gTYPE: 0, mTYPE: 15004, strName: "hnz" }, { gTYPE: 0, mTYPE: 14027, strName: "hy777" }, { gTYPE: 0, mTYPE: 15011, strName: "hyz" }, { gTYPE: 0, mTYPE: 14042, strName: "jbp" }, { gTYPE: 0, mTYPE: 15001, strName: "jjbx" }
	// 		, { gTYPE: 0, mTYPE: 8031, strName: "jjz" }, { gTYPE: 0, mTYPE: 8034, strName: "jqx" }, { gTYPE: 0, mTYPE: 8044, strName: "jsmr" }, { gTYPE: 0, mTYPE: 14012, strName: "jtbw" }, { gTYPE: 0, mTYPE: 15013, strName: "jwh" }
	// 		, { gTYPE: 0, mTYPE: 14039, strName: "kydb" }, { gTYPE: 0, mTYPE: 8027, strName: "llcw" }, { gTYPE: 0, mTYPE: 8005, strName: "lmdmx" }, { gTYPE: 0, mTYPE: 14035, strName: "longw" }, { gTYPE: 0, mTYPE: 8036, strName: "lw" }, { gTYPE: 0, mTYPE: 14020, strName: "mfrs" }
	// 		, { gTYPE: 0, mTYPE: 8022, strName: "mqws" }, { gTYPE: 0, mTYPE: 8037, strName: "msx" }, { gTYPE: 0, mTYPE: 8050, strName: "msyq" }, { gTYPE: 0, mTYPE: 14002, strName: "my" }
	// 		, { gTYPE: 0, mTYPE: 8018, strName: "npl" }, { gTYPE: 9, mTYPE: 9004, strName: "pjdh" }, { gTYPE: 0, mTYPE: 14021, strName: "qgq" }, { gTYPE: 0, mTYPE: 14040, strName: "qhdb" }, { gTYPE: 0, mTYPE: 8029, strName: "qhtgd" }, { gTYPE: 0, mTYPE: 15002, strName: "qtds" }
	// 		, { gTYPE: 0, mTYPE: 8026, strName: "rwjf" }, { gTYPE: 0, mTYPE: 15009, strName: "rzdjj" }, { gTYPE: 0, mTYPE: 14030, strName: "sbjg" }, { gTYPE: 0, mTYPE: 8016, strName: "sbzkxq" }
	// 		, { gTYPE: 0, mTYPE: 14004, strName: "sedcs" }, { gTYPE: 0, mTYPE: 8024, strName: "sjwg" }, { gTYPE: 0, mTYPE: 14008, strName: "sldx" }, { gTYPE: 0, mTYPE: 14017, strName: "snqx" }, { gTYPE: 0, mTYPE: 8025, strName: "stmz" }
	// 		, { gTYPE: 0, mTYPE: 8002, strName: "tbhdqx" }, { gTYPE: 0, mTYPE: 8049, strName: "tbhdqx2" }, { gTYPE: 0, mTYPE: 8006, strName: "twhx" }, { gTYPE: 0, mTYPE: 15012, strName: "wflm" }
	// 		, { gTYPE: 0, mTYPE: 8019, strName: "wfsb" }, { gTYPE: 0, mTYPE: 8004, strName: "wk" }, { gTYPE: 0, mTYPE: 14016, strName: "wptg" }, { gTYPE: 0, mTYPE: 15010, strName: "xmcw" }, { gTYPE: 9, mTYPE: 9001, strName: "xml" }
	// 		, { gTYPE: 9, mTYPE: 9002, strName: "xnkl" }, { gTYPE: 0, mTYPE: 14015, strName: "xqdz" }, { gTYPE: 0, mTYPE: 8035, strName: "xyf" }, { gTYPE: 0, mTYPE: 15005, strName: "xyfw" }, { gTYPE: 0, mTYPE: 8001, strName: "xyl" }, { gTYPE: 0, mTYPE: 8007, strName: "xys" }
	// 		, { gTYPE: 0, mTYPE: 14025, strName: "xysc" }, { gTYPE: 0, mTYPE: 8028, strName: "xytjs" }, { gTYPE: 0, mTYPE: 8051, strName: "xyy" }, { gTYPE: 0, mTYPE: 8015, strName: "ygmb" }, { gTYPE: 0, mTYPE: 14011, strName: "yhhwd" }
	// 		, { gTYPE: 0, mTYPE: 15006, strName: "yjdg" }, { gTYPE: 0, mTYPE: 14007, strName: "yqcr" }, { gTYPE: 0, mTYPE: 14006, strName: "ywfw" }, { gTYPE: 0, mTYPE: 8014, strName: "zcs" }
	// 		, { gTYPE: 0, mTYPE: 8020, strName: "zmkm" }, { gTYPE: 0, mTYPE: 8048, strName: "zmkm2" }
	// 	];
	// 	private _page: any;
	// 	private _mainView; ApiListJDB;
	// 	private _index: number;
	// 	private _game: Game;
	// 	constructor() {
	// 		super()
	// 		this.list_jdb.itemRender = DBDZ_Item
	// 		this.list_jdb.renderHandler = new Handler(this, this.renderHandlerDB)
	// 	}

	// 	private renderHandlerDB(cell: DBDZ_Item, index: number): void {
	// 		cell.setData(this._page, this._mainView, this._index, this._game)
	// 	}

	// 	set dataSource(v: any) {
	// 		if (!v) return;
	// 		this.list_jdb.dataSource = this.jdb_data;
	// 		this.list_jdb.repeatX = Math.ceil(this.list_jdb.dataSource.length / 2)
	// 		this.list_jdb.width = 230 * this.list_jdb.repeatX;
	// 		this.width = 20 + 247 + 23 + this.list_jdb.width;
	// 	}

	// 	setData(page: any, mainView: ApiListJDB, index: number, game: Game) {
	// 		this._page = page;
	// 		this._mainView = mainView;
	// 		this._index = index;
	// 		this._game = game;
	// 	}
	// }

	class DBDZ_Item extends ui.ajqp.dating.component.Hud_Jbd1_APIUI {
		private _page: any;
		private _mainView; ApiListJDB;
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

		setData(page: any, mainView: ApiListJDB, index: number, game: Game) {
			this._page = page;
			this._mainView = mainView;
			this._index = index;
			this._game = game;
			this.on(LEvent.CLICK, this, this.onBtnClick);
		}

		private onBtnClick(): void {
			let data = this._data.gTYPE + "&" + this._data.mTYPE + "&" + "about:blank";
			this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, data)
		}
	}
}