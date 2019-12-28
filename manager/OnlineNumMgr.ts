/**
* name 
*/
module gamedating.managers {
	export class OnlineNumMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_ONLINE_NUM_CHANGE: string = "OnlineNumMgr.change";
		//游戏类别热门级别-超热门类
		static readonly GAME_TYPE_HOT_1 = ["buyu"];
		//游戏类别热门级别-热门类
		static readonly GAME_TYPE_HOT_2 = ["zjh", "wxsaoleihb", "longhu", "mpniuniu", "niuniu", "blackjack", "shuiguoji"];
		//游戏类别热门级别-较热门类
		static readonly GAME_TYPE_HOT_3 = ["baijiale", "benchibaoma", "honghei", "bairendezhou", "toubao", "ebgang"];
		//游戏类别热门级别-一般类
		static readonly GAME_TYPE_NOT_HOT = ["paijiu", "sangong", "tbniuniu", "brniuniu"];

		//在线人数数据列表
		private _dataList: any = [];
		constructor(game: Game) {
			super(game)
		}

		//获取在线人数
		getOnlineNum(gameid: string) {
			this._dataList[gameid];
		}

		//初始化在线人数
		onInitNum(gameid: string) {
			let num = 0;
			this._dataList[gameid] = num;
		}

		//更新在线人数
		onUpdateNum(gameid: string) {
			let num = 0;
			this._dataList[gameid] += num;
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource);
		}
	}
}