/**
* name 
*/
module gamedating.managers {
	export class BattleXiangQingMgr extends gamecomponent.managers.BaseMgr {
		static readonly RECORD_CHANGE: string = "BattleXiangQingMgr.changge";


		private static _ins: BattleXiangQingMgr;
		static get ins(): BattleXiangQingMgr {
			if (!this._ins) {
				this._ins = new BattleXiangQingMgr();
			}
			return this._ins;
		}

		public getDataInfo(battle_id: string, game_id: string, time: number) {
			if (this._dataInfoList[battle_id]) return this._dataInfoList[battle_id];
			this._game.sceneGame.network.call_get_battle_log(battle_id, game_id, time);
			return null;
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBATTLELOG) {
				if (data && data.success == 0) {
					let index = data.msg.index;
					if (!data.msg) {
						return;
					}
					if (data.msg.game_id == "wxsaoleihb") {
						this._dataInfoList[data.msg.battle_id] = data.msg.battle_log;
					} else {
						this._dataInfoList[data.msg.battle_id] = this.GetBattleInfoToString(data.msg.game_id, data.msg.battle_log);
					}
					this.event(BattleXiangQingMgr.RECORD_CHANGE, [data.msg.battle_id, this._dataInfoList[data.msg.battle_id]]);
				}
			}
		}

		private _dataInfoList: { [key: string]: any } = {};
		private _mapInfoList: { [key: string]: MapInfoT<MapInfoLogObject> } = {}
		private _cardroomList: string[] = ["rniuniu", "rddz", "rpaodekuai", "rshisanshui"];
		//战斗日志转成字符串
		private GetBattleInfoToString(game_id: string, battle_log: string): any {
			if (!this._mapInfoList[game_id]) {
				let mapid = game_id.substr(0, 1).toUpperCase() + game_id.substr(1, game_id.length);
				let comm = StringU.substitute("new game{0}.data.{1}MapInfo({2})", game_id, mapid, "this._game.sceneGame.sceneObjectMgr")
				this._mapInfoList[game_id] = eval(comm);
			}

			this._mapInfoList[game_id].battleInfoMgr.ResetData(battle_log);
			if (this._cardroomList.indexOf(game_id) != -1) {//房卡类型
				return this._mapInfoList[game_id].getBattleInfoToObj();
			} else {//非房卡类型
				return this._mapInfoList[game_id].getBattleInfoToString();
			}
		}
	}
}