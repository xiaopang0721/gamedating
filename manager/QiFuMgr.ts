/**
* name 
*/
module gamedating.managers {
	export class QiFuMgr extends gamecomponent.managers.BaseMgr {
		static readonly QIFU_CHANGE: string = "QiFuMgr.changge";

		private _qifuList: any[] = [];
		getQiFuList() {
			return this._qifuList;
		}
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERQIFU) {
				if (data && data.success == 0) {
					this._qifuList = data.msg.list;
					this.event(QiFuMgr.QIFU_CHANGE, 1);
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERQIFU) {
				if (data && data.success == 0) {
					this._qifuList = data.msg.list;
					this.event(QiFuMgr.QIFU_CHANGE, 1);
				}
			}
		}

		public get roomPay() {
			let story = this._game.sceneGame.sceneObjectMgr.story;
			if (story && story instanceof StoryRoomCardBase && story.isCardRoomMaster) {
				return DatingGame.ins.cardRoomMgr.RoomPay;
			}
			return 0;
		}

		public get isCanQiFu() {
			let mapinfo = this._game.sceneGame.sceneObjectMgr.mapInfo;
			if (!mapinfo) return false;
			let gameid: string = mapinfo.id;
			if (!gameid) return false;
			let story = this._game.sceneGame.sceneObjectMgr.story;
			if (!story) return false;
			let main_unit = this._game.sceneGame.sceneObjectMgr.mainUnit;
			if (!main_unit) return false;
			if (story instanceof StoryNormalBase) {//单人场
				let pageDef = getPageDef(gameid);
				if (pageDef && pageDef["__qifulimit"]) {
					if (main_unit.IsIsDefeated() || main_unit.IsGiveUp()) {//比输或者弃牌可以祈福
						return true;
					}
					if (mapinfo.GetPlayState() == 1) {//游戏进行中不可以祈福
						return false;
					}
				}
				else if (mapinfo.GetPlayState() == 1) {//游戏进行中不可以祈福
					return false;
				}
			}
			else if (story instanceof StoryBaiRenBase) {//百人场
				if (main_unit.GetIndex() == mapinfo.GetBankerSeat()) {//当庄不可以祈福
					return false;
				}
				if (main_unit.IsBet()) {//下过注不可以祈福
					return false;
				}
			}
			else if (story instanceof StoryRoomCardBase) {//房卡

			}
			else if (story instanceof StoryFishBase) {//捕鱼

			}
			return true;
		}

		public getData() {
			if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) {
				let list = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_QIFUCONFIG_C, "");
				for (let key in list) {
					this._qifuList.push(list[key]);
				}
			} else {
				this._game.sceneGame.network.call_get_qifu_list();
			}
			this.event(QiFuMgr.QIFU_CHANGE, 1);
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			this._qifuList = [];
		}

	}
}