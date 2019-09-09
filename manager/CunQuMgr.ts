/**
* name 提现记录
*/
module gamedating.managers {
	export class CunQuMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "CunQuMgr.changge";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYDRAWLIST) {
				if (data && data.success == 0 && this._dc == data.dc) {
					this._dataInfo[data.msg.page] = data.msg.list;
					this.event(CunQuMgr.EVENT_CHANGE, 1);
				}
			}
		}

		public get dataInfo() {
			return this._dataInfo;
		}
		private _dataInfo: { [key: number]: any } = {};
		private _page: number;
		private _dc: number = 2;
		public getData(page: number) {
			this._page = page;
			this._game.sceneGame.network.call_get_paydrawlist(page, CunQuMgr.PAGE_MAX, this._dc);
		}

		clear(fource?:boolean) {
			if(fource) super.clear(fource)
			this._dataInfo = {};
		}

	}


}