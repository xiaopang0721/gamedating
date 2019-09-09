/**
* name 报表管理器
*/
module gamedating.managers {
	export class DaiLiYongHuMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "DaiLiYongHuMgr.changge";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		public agencyType() {
			return this._agencyType;
		}

		public getDataHuiZong(index: number) {
			return this._dataHuiZong[index];
		}

		public getDataInfo(index: number) {
			return this._dataInfoList[index];
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_AGENCYPLAYEROFFLINEDATA) {
				if (data && data.success == 0) {
					let index = data.msg.index - 1;
					if (!this._dataInfoList[index]) this._dataInfoList[index] = {}
					if (!this._dataHuiZong[index]) this._dataHuiZong[index] = {}
					if (!data.msg || !data.msg.list || !data.msg.list.length) {
						return;
					}
					this._agencyType = data.msg.agencytype;
					this._dataHuiZong[index][0] = data.msg.all_teamyj;
					this._dataHuiZong[index][1] = data.msg.all_selfyj;
					this._dataHuiZong[index][2] = data.msg.all_teamregnum;
					this._dataInfoList[index][data.msg.page] = data.msg.list;
					this.event(DaiLiYongHuMgr.EVENT_CHANGE, 1);
				}
			}
		}


		private _agencyType: number;
		private _dataHuiZong: { [key: number]: { [key: number]: any } } = {};
		private _dataInfoList: { [key: number]: { [key: number]: any } } = {};
		public getData(date_type: number) {
			this._game.sceneGame.network.call_get_daili_yonghu(date_type + 1);
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			for (let key in this._dataInfoList) {
				this._dataInfoList[key] = []
			}
		}


	}


}