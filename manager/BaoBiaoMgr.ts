/**
* name 报表管理器
*/
module gamedating.managers {
	export class BaoBiaoMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "BaoBiaoMgr.changge";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		public getDataInfo(index: number) {
			return this._dataInfoList[index];
		}

		private _totalList: { [key: number]: any } = {};
		getTotalByIndex(index: number) {
			return this._totalList[index];
		}

		private _timeTotalNumArr: Array<Object>;
		get timeTotalNumArr(){
			return this._timeTotalNumArr;
		}
		isCurDayHaveNum(strDay:string): number {
			if(this._timeTotalNumArr&&this._timeTotalNumArr.length>0){
				for(let i=0;i<this._timeTotalNumArr.length;i++){
					let curDayObj:any = this._timeTotalNumArr[i];
					if(curDayObj){
						if(strDay == curDayObj.days){
							return Number(curDayObj.num);
						}
					}
				}
			}
			return 0;
		}
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETMONEYLOG) {
				if (data && data.success == 0) {
					let index = data.msg.index;
					if (!data.msg) return;
					if (data.msg.tjlist)
						this._timeTotalNumArr = data.msg.tjlist;
					if (!this._dataInfoList[index]) this._dataInfoList[index] = {}
					if (!this._totalList[index]) this._totalList[index] = 0
					if (data.msg.list && data.msg.list.length) {
						this._dataInfoList[index][data.msg.page] = data.msg.list;
						this._totalList[index] = data.msg.all;
					}
					this.event(BaoBiaoMgr.EVENT_CHANGE, 1);
				}
			}
		}


		private _dataInfoList: { [key: number]: { [key: number]: any } } = {};
		public getData(page: number, time: number, index: number) {
			logd(Sync.getTimeStr3(time))
			this._game.sceneGame.network.call_get_moneylog(page, BaoBiaoMgr.PAGE_MAX, Sync.getYearMonthDayTime(time), index);
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			this._dataInfoList[6] = []
			this._totalList[6] = 0
		}


	}


}