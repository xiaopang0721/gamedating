/**
* API-JDB游戏list组件
*/
module gamedating.component {
	export class ApiListJDB extends ui.ajqp.dating.component.List_JDB_APIUI {
		private _game: Game;
		public page: any;
		public static JBD_DATA =
		[{ gTYPE: 0, mTYPE: 14038, strName: "ajdb", gameName: "埃及夺宝" }, { gTYPE: 0, mTYPE: 8023, strName: "alpysm", gameName: "奥林匹亚神庙" }, { gTYPE: 0, mTYPE: 14005, strName: "bdr", gameName: "包大人" }, { gTYPE: 0, mTYPE: 8003, strName: "bl", gameName: "变脸" }, { gTYPE: 0, mTYPE: 8047, strName: "bl2", gameName: "变脸2" }
			, { gTYPE: 9, mTYPE: 9007, strName: "cjfsgp", gameName: "超激发水果盘" }, { gTYPE: 0, mTYPE: 14036, strName: "cjnb", gameName: "超级牛逼" }, { gTYPE: 0, mTYPE: 14022, strName: "ckth", gameName: "采矿土豪" }, { gTYPE: 0, mTYPE: 14013, strName: "cxkd", gameName: "春宵苦短" }, { gTYPE: 0, mTYPE: 14018, strName: "daj", gameName: "妲己" }
			, { gTYPE: 0, mTYPE: 14029, strName: "dfss", gameName: "东方神兽" }, { gTYPE: 0, mTYPE: 14001, strName: "dj", gameName: "斗鸡" }, { gTYPE: 0, mTYPE: 14003, strName: "dsxm", gameName: "屌丝熊猫" }, { gTYPE: 0, mTYPE: 14023, strName: "dwpk", gameName: "赌王扑克" }, { gTYPE: 0, mTYPE: 14026, strName: "fdc", gameName: "发大财" }
			, { gTYPE: 0, mTYPE: 8030, strName: "fkkxj", gameName: "疯狂科学家" }, { gTYPE: 0, mTYPE: 14010, strName: "flzt", gameName: "飞龙在天" }, { gTYPE: 0, mTYPE: 14033, strName: "fnpd", gameName: "飞鸟派对" }, { gTYPE: 9, mTYPE: 9003, strName: "fqzs", gameName: "飞禽走兽" }
			, { gTYPE: 0, mTYPE: 8046, strName: "gg", gameName: "关公" }, { gTYPE: 0, mTYPE: 14034, strName: "glf", gameName: "狗来富" }, { gTYPE: 0, mTYPE: 8017, strName: "gxn", gameName: "过新年" }, { gTYPE: 9, mTYPE: 9006, strName: "hgscq", gameName: "花果山传奇" }, { gTYPE: 0, mTYPE: 8021, strName: "hjxjdg", gameName: "黄金香蕉帝国" }
			, { gTYPE: 0, mTYPE: 15004, strName: "hnz", gameName: "火牛阵" }, { gTYPE: 0, mTYPE: 14027, strName: "hy777", gameName: "好运777" }, { gTYPE: 0, mTYPE: 15011, strName: "hyz", gameName: "后羿传" }/*, { gTYPE: 0, mTYPE: 14042, strName: "jbp", gameName: "聚宝盆" }*/, { gTYPE: 0, mTYPE: 15001, strName: "jjbx", gameName: "金鸡报喜" }
			, { gTYPE: 0, mTYPE: 8031, strName: "jjz", gameName: "金饺子" }, { gTYPE: 0, mTYPE: 8034, strName: "jqx", gameName: "金钱侠" }, { gTYPE: 0, mTYPE: 8044, strName: "jsmr", gameName: "江山美人" }, { gTYPE: 0, mTYPE: 14012, strName: "jtbw", gameName: "街头霸王" }, { gTYPE: 0, mTYPE: 15013, strName: "jwh", gameName: "九尾狐" }
			, { gTYPE: 0, mTYPE: 14039, strName: "kydb", gameName: "开运夺宝" }, { gTYPE: 0, mTYPE: 8027, strName: "llcw", gameName: "料理厨王" }, { gTYPE: 0, mTYPE: 8005, strName: "lmdmx", gameName: "骆马大冒险" }, { gTYPE: 0, mTYPE: 14035, strName: "longw", gameName: "龙舞" }, { gTYPE: 0, mTYPE: 8036, strName: "lw", gameName: "龙王" }, { gTYPE: 0, mTYPE: 14020, strName: "mfrs", gameName: "魔法乳神" }
			, { gTYPE: 0, mTYPE: 8022, strName: "mqws", gameName: "麻雀无双" }, { gTYPE: 0, mTYPE: 8037, strName: "msx", gameName: "魔术秀" }, { gTYPE: 0, mTYPE: 8050, strName: "msyq", gameName: "马上有钱" }, { gTYPE: 0, mTYPE: 14002, strName: "my", gameName: "玛雅" }
			, { gTYPE: 0, mTYPE: 8018, strName: "npl", gameName: "拿破仑" }, { gTYPE: 9, mTYPE: 9004, strName: "pjdh", gameName: "啤酒大亨" }, { gTYPE: 0, mTYPE: 14021, strName: "qgq", gameName: "钱滚钱" }, { gTYPE: 0, mTYPE: 14040, strName: "qhdb", gameName: "七海夺宝" }, { gTYPE: 0, mTYPE: 8029, strName: "qhtgd", gameName: "奇幻糖果岛" }, { gTYPE: 0, mTYPE: 15002, strName: "qtds", gameName: "齐天大圣" }
			, { gTYPE: 0, mTYPE: 8026, strName: "rwjf", gameName: "热舞教父" }, { gTYPE: 0, mTYPE: 15009, strName: "rzdjj", gameName: "忍者大进击" }, { gTYPE: 0, mTYPE: 14030, strName: "sbjg", gameName: "三倍金刚" }, { gTYPE: 0, mTYPE: 8016, strName: "sbzkxq", gameName: "上班族狂想曲" }
			, { gTYPE: 0, mTYPE: 14004, strName: "sedcs", gameName: "塞尔达传说" }, { gTYPE: 0, mTYPE: 8024, strName: "sjwg", gameName: "水晶王国" }, { gTYPE: 0, mTYPE: 14008, strName: "sldx", gameName: "神龙大侠" }, { gTYPE: 0, mTYPE: 14017, strName: "snqx", gameName: "少女前线" }, { gTYPE: 0, mTYPE: 8025, strName: "stmz", gameName: "神偷妙贼" }
			, { gTYPE: 0, mTYPE: 8002, strName: "tbhdqx", gameName: "唐伯虎点秋香" }, { gTYPE: 0, mTYPE: 8049, strName: "tbhdqx2", gameName: "唐伯虎点秋香2" }, { gTYPE: 0, mTYPE: 8006, strName: "twhx", gameName: "台湾黑熊" }, { gTYPE: 0, mTYPE: 15012, strName: "wflm", gameName: "五福临门" }
			, { gTYPE: 0, mTYPE: 8019, strName: "wfsb", gameName: "文房四宝" }, { gTYPE: 0, mTYPE: 8004, strName: "wk", gameName: "悟空" }, { gTYPE: 0, mTYPE: 14016, strName: "wptg", gameName: "王牌特工" }, { gTYPE: 0, mTYPE: 15010, strName: "xmcw", gameName: "熊猫厨王" }, { gTYPE: 9, mTYPE: 9001, strName: "xml", gameName: "小玛莉" }
			, { gTYPE: 9, mTYPE: 9002, strName: "xnkl", gameName: "新年快乐" }, { gTYPE: 0, mTYPE: 14015, strName: "xqdz", gameName: "星球大战" }, { gTYPE: 0, mTYPE: 8035, strName: "xyf", gameName: "幸运凤" }, { gTYPE: 0, mTYPE: 15005, strName: "xyfw", gameName: "幸运福娃" }, { gTYPE: 0, mTYPE: 8001, strName: "xyl", gameName: "幸运龙" }, { gTYPE: 0, mTYPE: 8007, strName: "xys", gameName: "幸运麟" }
			, { gTYPE: 0, mTYPE: 14025, strName: "xysc", gameName: "幸运赛车" }, { gTYPE: 0, mTYPE: 8028, strName: "xytjs", gameName: "幸运淘金鼠" }, { gTYPE: 0, mTYPE: 8051, strName: "xyy", gameName: "喜洋洋" }, { gTYPE: 0, mTYPE: 8015, strName: "ygmb", gameName: "月光秘宝" }, { gTYPE: 0, mTYPE: 14011, strName: "yhhwd", gameName: "银河护卫队" }
			, { gTYPE: 0, mTYPE: 15006, strName: "yjdg", gameName: "印加帝国" }, { gTYPE: 0, mTYPE: 14007, strName: "yqcr", gameName: "一拳超人" }, { gTYPE: 0, mTYPE: 14006, strName: "ywfw", gameName: "亿万富翁" }, { gTYPE: 0, mTYPE: 8014, strName: "zcs", gameName: "招财狮" }
			, { gTYPE: 0, mTYPE: 8020, strName: "zmkm", gameName: "芝麻开门" }, { gTYPE: 0, mTYPE: 8048, strName: "zmkm2", gameName: "芝麻开门2" }
		];

		layout(clientRealWidth: number): void {
			Laya.timer.frameOnce(1, this, () => {
				this.list_jdb.width = clientRealWidth;
				this.width = clientRealWidth;
				let list_count = Math.ceil(ApiListJDB.JBD_DATA.length / this.list_jdb.repeatY);
				//单个item*列数-两列之间的间距-当前的宽度
				this.list_jdb.scrollBar.max = 250 * (list_count + 1) + list_count * this.list_jdb.spaceX - clientRealWidth;
			})
		}

		//gType_mType
		// public static GetGameName(gameid: string) {
		// 	// let arr = gameid.split("_");
		// 	// let gType = parseFloat(arr[0]);
		// 	// let mType = parseFloat(arr[1]);
		// 	let mType = parseFloat(gameid)
		// 	for (let i = 0; i < ApiListJDB.JBD_DATA.length; i++) {
		// 		let cur_data = ApiListJDB.JBD_DATA[i]
		// 		if (cur_data.mTYPE == mType) {
		// 			return cur_data.gameName
		// 		}
		// 	}
		// 	return ""
		// }
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
			this.list_jdb.scrollBar.elasticDistance = 100
			this.list_jdb.itemRender = DBDZ_Item
			this.list_jdb.renderHandler = new Handler(this, this.renderHandlerDBMain)
		}

		setData(): void {
			this.list_jdb.dataSource = ApiListJDB.JBD_DATA;
		}

		update() {

		}

		close(): void {

		}
	}
	//----------夺宝电子组件start---------------
	// class DBDZ_ItemMain extends ui.ajqp.dating.component.Hud_Jdb_APIUI {
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
	// 		this.list_jdb.dataSource = this.JBD_DATA;
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
			this._data.pfCode = Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP;
			this._game.datingGame.apiMgr.GoGameByPFCode(this._data, this.btn_box);
		}
	}
}