/**
* name 排行榜
*/
module gamedating.managers {
	export class TopMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "TopMgr.changge";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		private _myData:MyTopData;
		get myData()
		{	
			if(!this._myData)
			{
				this._myData = new MyTopData();
			}
			return this._myData;
		}
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRANKINGLIST) {
				if (data && data.success == 0) {
					this._dataInfo[this._type] = data.msg.list;
					this.myData.mymoney = data.mymoney < 0 ? 0 : data.mymoney;
					this.myData.myrank = 0;
					if (data.msg.list){
						for (let index = 0; index < data.msg.list.length; index++) {
							let topdata:TopData = data.msg.list[index] as TopData;
							if(topdata && topdata.userid.toString() == WebConfig.info.userid)
							{
								this.myData.myrank = topdata.num;
								break;
							}
						}
						this.event(TopMgr.EVENT_CHANGE, 1);
					}
				}
			}
		}

		public get rankingInfo() {
			return this._dataInfo;
		}
		private _dataInfo: { [key: number]: TopData } = {};
		private _type: number;
		public getRankingList(type: number) {
			this._type = type;
			this._game.sceneGame.network.call_get_ranking_list(type  + 1);
		}


		clear(fource?:boolean) {
			if(fource) super.clear(fource)
			this._dataInfo = {};
		}

	}

	class TopData {
		num: number;
		money: number;
		rank: number;
		userid: string;
		account: string;
		headimg: number;
	}

	class MyTopData {
		mymoney: number = 0;
		myrank: number = 0;
	}


}