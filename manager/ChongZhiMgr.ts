/**
* name 充值记录
*/
module gamedatingnqp.managers {
	export class ChongZhiMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "ChongZhiMgr.EVENT_CHANGE";
		static readonly EVENT_CHANGE_RANDOM_NAME: string = "ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME";
		static readonly PAGE_MAX: number = 100;
		constructor(game: Game) {
			super(game)
		}

		init() {
			this._game.sceneGame.network.addHanlder(Protocols.SMSG_SEND_RAMDON_NAME, this, this.onUpdateRandomName);
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_PAYDRAWLIST) {
				if (data && data.success == 0 && this._dc == data.dc) {
					this._dataInfo[data.msg.page] = data.msg.list;
					this.event(ChongZhiMgr.EVENT_CHANGE, 1);
				}
			}
		}

		private _random_list: any[] = [];
		private onUpdateRandomName(code: number, s2c: any) {
			if (s2c && s2c.str) {
				let arr;
				try {
					s2c.str && (arr = JSON.parse(s2c.str));
				} catch (error) {
					logd("解析失败", s2c);
					localSetItem("client_error", Vesion["_defaultVesion"] + "  " + WebConfig.gwUrl + ": onUpdateRandomName" + (s2c.str));
				}
				if (arr) {
					this._random_list = arr;
					this.event(ChongZhiMgr.EVENT_CHANGE_RANDOM_NAME);
				}

			}
		}

		/**
		 * 获取随机名字
		 */
		getRandomNameList() {
			return this._random_list;
		}

		public get dataInfo() {
			return this._dataInfo;
		}
		private _dataInfo: { [key: number]: any } = {};
		private _page: number;
		private _dc: number = 1;
		public getData(page: number) {
			this._page = page;
			this._game.sceneGame.network.call_get_paydrawlist(page, ChongZhiMgr.PAGE_MAX, this._dc);
		}

		clear(fource?:boolean) {
			if(fource) super.clear(fource)
			this._game.sceneGame.network.removeHanlder(Protocols.SMSG_SEND_RAMDON_NAME, this, this.onUpdateRandomName);
			this.clearDataInfo();
		}

		clearDataInfo() {
			this._dataInfo = {};
		}

	}


}