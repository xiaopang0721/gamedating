/**
* name 
*/
module gamedating.managers {
	export class VipMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_VIP_CHANGE: string = "VipMgr.change";

		static readonly TYPE_VIP_LEVEL_CHANGE: number = 1;
		static readonly TYPE_VIP_RECHARGE_CHANGE: number = 2;
		static readonly TYPE_VIP_RECEIVED_CHANGE: number = 3;

		private _award: number;//当前领取奖励金额
		constructor(game: Game) {
			super(game)
			this._vipLevel = WebConfig.info ? WebConfig.info.vip_level : 0;
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, this, this.onVipUpdate);
		}

		get award() {
			return this._award;
		}

		set award(v) {
			this._award = v;
		}

		private onVipUpdate(type: number) {
			if (type == 1) {//vip等级变更
				this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_LEVEL_CHANGE);
				let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
				if (mainPlayer && !this._game.sceneGame.sceneObjectMgr.mapInfo && this._vipLevel != mainPlayer.playerInfo.vip_level) {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP_UP, null, (page) => {
						if (!page.dataSource && this._game.datingGame.isAlertFirstPay) {
							this._game.uiRoot.general.open(DatingPageDef.PAGE_FIRST_RECHARGE);
							this._game.datingGame.isAlertFirstPay = false;
						}
					});
					this._vipLevel = mainPlayer.playerInfo.vip_level;
				}
			} else if (type == 2) {//累充金额变更
				this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_RECHARGE_CHANGE);
			} else {//vip奖励领取标识变更
				this.event(VipMgr.EVENT_VIP_CHANGE, VipMgr.TYPE_VIP_RECEIVED_CHANGE);
			}
		}

		private _vipLevel: number;
		checkVipReceivedIndex(): number {
			//vip是否有未领取奖励，有的话返回true
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return 0;
			let level = mainPlayer.playerInfo.vip_level;
			for (let i = 1; i <= level; i++) {
				if (!mainPlayer.GetVipAwardReceived(i - 1)) {
					return i;
				}
			}
			return 0;
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource);
			this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_VIP_INFO_UPDATE, this, this.onVipUpdate);
		}
	}
}