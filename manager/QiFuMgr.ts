/**
* name 
*/
module gamedating.managers {
	export class QiFuMgr extends gamecomponent.managers.BaseMgr {
		static readonly QIFU_CHANGE: string = "QiFuMgr.changge";
		static readonly QIFU_FLY: string = "QiFuMgr.fly";
		constructor(game: Game) {
			super(game)
			this._delta = 0;
		}
		private _qifuList: any[] = [];
		getQiFuList() {
			return this._qifuList;
		}

		public get roomPay() {
			let story = this._game.sceneGame.sceneObjectMgr.story;
			if (story && story instanceof StoryRoomCardBase && story.isCardRoomMaster) {
				return this._game.cardRoomMgr.RoomPay;
			}
			return 0;
		}

		public get isCanQiFu() {
			let mapinfo = this._game.sceneGame.sceneObjectMgr.mapInfo;
			if (!mapinfo) return false;
			//游戏祈福
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
			let list = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_QIFUCONFIG_C, "");
			for (let key in list) {
				this._qifuList.push(list[key]);
			}
			this.event(QiFuMgr.QIFU_CHANGE, 1);
		}

		/**
		 * 
		 * @param headView 头像UI
		 * @param view 场景UI
		 * @param dataSource 祈福数据
		 * @param callBack 动画完成时的回调函数
		 */
		showFlayAni(headView: Sprite, view: View, dataSource: any, callBack?: any, isAnchor: boolean = false): void {
			if (!dataSource) return;
			let qfId = dataSource.qf_id;
			let qfImg = new LImage(DatingPath.ui_dating + "qifu/f_" + this._game.datingGame.qifuNameStr[qfId - 1] + "1.png");
			view.addChild(qfImg);
			qfImg.anchorX = 0.5;
			qfImg.anchorY = 0.5;
			qfImg.x = view.width / 2;
			qfImg.y = view.height / 2;
			let curPos = headView.localToGlobal(new Point(0, 0));
			let finalPos = view.globalToLocal(curPos)
			let endX = finalPos.x + (headView.width * 0.5)//(isAnchor ? 0 : qfImg.width * 0.5);
			let endY = finalPos.y + (headView.height * 0.5)//(isAnchor ? 0 : qfImg.height * 0.5);
			Laya.Tween.to(qfImg, { x: endX, y: endY, scaleX: 0.1, scaleY: 0.1 }, 1000, Laya.Ease.circOut, Handler.create(this, () => {
				qfImg.removeSelf();
				qfImg.destroy();
				callBack && (callBack.runWith ? callBack.runWith(dataSource) : callBack(dataSource));
			}))
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource)
			this._qifuList = [];
		}

	}
}