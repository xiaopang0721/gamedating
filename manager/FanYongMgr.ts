/**
* name 返佣
*/
module gamedatingnqp.managers {
	export class FanYongMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "FanYongMgr.changge";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYDRAWLIST) {
				if (data && data.success == 0 && this._dc == data.dc) {
					this._dataInfo[data.msg.page] = data.msg.list;
					this.event(FanYongMgr.EVENT_CHANGE, 1);
				}
			}
		}

		public get dataInfo() {
			return this._dataInfo;
		}
		private _dataInfo: { [key: number]: any } = {};
		private _page: number;
		private _dc: number = 3;
		public getData(page: number) {
			this._page = page;
			this._game.sceneGame.network.call_get_paydrawlist(page, FanYongMgr.PAGE_MAX, this._dc);
		}

		clear(fource?:boolean) {
			if(fource) super.clear(fource)
			this._dataInfo = {};
		}

	}


}