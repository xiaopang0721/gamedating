/**
* name 
*/
module gamedating.managers {
	export class OnlineNumMgr extends gamecomponent.managers.BaseMgr {
		//游戏类别热门等级-超热门类
		static readonly GAME_TYPE_HOT_1 = ["buyu"];
		//游戏类别热门等级-热门类
		static readonly GAME_TYPE_HOT_2 = ["zjh", "wxsaoleihb", "longhu", "mpniuniu", "niuniu", "blackjack", "shuiguoji"];
		//游戏类别热门等级-较热门类
		static readonly GAME_TYPE_HOT_3 = ["baijiale", "benchibaoma", "honghei", "bairendezhou", "toubao", "ebgang"];
		//游戏类别热门等级-一般类
		static readonly GAME_TYPE_NOT_HOT = ["paijiu", "sangong", "tbniuniu", "brniuniu"];
		//在线人数配置表(基础值，变量)
		static readonly ONLINE_NUM_CONFIG = {
			"A1B1": [1500, 200],
			"A1B2": [1000, 150],
			"A1B3": [650, 100],
			"A1B4": [350, 70],
			"A2B1": [2500, 300],
			"A2B2": [1600, 240],
			"A2B3": [1000, 150],
			"A2B4": [600, 120],
			"A3B1": [4500, 500],
			"A3B2": [2800, 400],
			"A3B3": [1800, 250],
			"A3B4": [1000, 200],
			"A4B1": [7500, 1000],
			"A4B2": [4500, 700],
			"A4B3": [2500, 350],
			"A4B4": [1800, 350]
		};

		//在线人数数据列表
		private _dataList: any;
		constructor(game: Game) {
			super(game)
			this._dataList = [];
		}

		//获取在线人数
		getOnlineNum(gameid: string) {
			if (this._dataList[gameid]) {
				this.onUpdateNum(gameid);
			} else {
				this.onInitNum(gameid);
			}
			return this._dataList[gameid];
		}

		//初始化在线人数
		onInitNum(gameid: string) {
			let num = 0;
			let config = this.getDataFromConfig(gameid);
			let base = config[0];
			let variable = config[1];
			num = MathU.randomRange(base - variable, base + variable);
			this._dataList[gameid] = num;
		}

		//更新在线人数
		onUpdateNum(gameid: string) {
			let num = 0;
			let config = this.getDataFromConfig(gameid);
			let base = config[0];
			let variable = config[1];
			let rand = MathU.randomRange(variable / 10 * -1, variable / 10);
			if (this._dataList[gameid] + rand < base - variable) {
				num = this._dataList[gameid] - rand;
			} else if (this._dataList[gameid] + rand > base + variable) {
				num = this._dataList[gameid] - rand;
			} else {
				num = this._dataList[gameid] + rand;
			}
			this._dataList[gameid] = num;
		}

		//从人数配置表里获取当前数据
		getDataFromConfig(gameid: string) {
			let timeType = this.getTimeType(gameid);
			let levelType = this.getLevelType(gameid);
			let typeStr = (timeType + levelType).toString();
			let config = OnlineNumMgr.ONLINE_NUM_CONFIG[typeStr];
			return config;
		}

		//获取时间类型
		getTimeType(gameid: string): string {
			let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
			let type = curHour >= 1 && curHour < 7 ? "A1" : curHour >= 7 && curHour < 13 ? "A2" : curHour >= 13 && curHour < 19 ? "A3" : "A4";
			return type
		}

		//获取热门等级类型
		getLevelType(gameid: string): string {
			let type = "B1";
			if (OnlineNumMgr.GAME_TYPE_HOT_1.indexOf(gameid) != -1) {
				type = "B1";
			} else if (OnlineNumMgr.GAME_TYPE_HOT_2.indexOf(gameid) != -1) {
				type = "B2";
			} else if (OnlineNumMgr.GAME_TYPE_HOT_3.indexOf(gameid) != -1) {
				type = "B3";
			} else if (OnlineNumMgr.GAME_TYPE_NOT_HOT.indexOf(gameid) != -1) {
				type = "B4";
			}
			return type
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource);
			this._dataList = [];
		}
	}
}