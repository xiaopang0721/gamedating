/**
* name 推广
*/
module gamedating.page {
	export class HudSharePage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.FenXiangUI;
		private _avatar: AvatarUIShow;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "fenxiang.atlas",
				DatingPath.sk_dating + "caishen01.png",
			];
			this._isNeedBlack = true;
		}

		private _clipJf: DatingClip;
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.FenXiangUI");
			this.addChild(this._viewUI);
			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this._viewUI.box_sk.addChild(this._avatar);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_wxhy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_fxq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._avatar.loadSkeleton(DatingPath.sk_dating + "caishen01", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2 + 3, 2);
			this.onUpdatePlayerInfo();
		}

		update(diff): void {
			if (this._avatar) {
				this._avatar.onDraw();
				this._viewUI.box_sk.addChild(this._avatar);
			}
		}

		private onUpdatePlayerInfo() {
			let daysharegivemoney = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney");
			if (!this._clipJf) {
				this._clipJf = new DatingClip(DatingClip.FENXIANG_FONT);
				this._clipJf.x = this._viewUI.clip_money.x + (daysharegivemoney > 9 ? -60 : 0);
				this._clipJf.y = this._viewUI.clip_money.y;
				this._viewUI.clip_money.parent && this._viewUI.clip_money.parent.addChild(this._clipJf);
				this._viewUI.clip_money.removeSelf();
			}
			if (daysharegivemoney) {
				this._clipJf.setText(daysharegivemoney, true, false);
			}
		}


		protected onBtnTweenEnd(e: any, target: any) {		
			switch (target) {
				case this._viewUI.btn_wxhy://分享微信好友
					this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENESESSION)
					this._game.datingGame.isShare = true;
					this._game.datingGame.shareContinueTime = Laya.timer.currTimer;
					break;
				case this._viewUI.btn_fxq://分享朋友圈
					this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENETIMELINE)
					this._game.datingGame.isShare = true;
					this._game.datingGame.shareContinueTime = Laya.timer.currTimer;
					break;
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				if (this._clipJf) {
					this._clipJf.removeSelf();
					this._clipJf.destroy();
					this._clipJf = null;
				}
				if (this._avatar) {
					this._avatar.clear();
					this._avatar.destroy();
					this._avatar = null;
				}
			}
			super.close();
		}
	}
}