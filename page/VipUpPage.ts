/**
* name vip
*/
module gamedatingnqp.page {
	export class VipUpPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.VipUpUI;
		private _avatar: AvatarUIShow;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "vip.atlas",
				DatingPath.sk_dating + "vip.png",
			];
			this._isNeedDuang = false;
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		private _clipJf: DatingClip;
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.VipUpUI");
			this.addChild(this._viewUI);
			this.initClip();
		}
		private _lvNum: DatingClip;
		private initClip(): void {
			if (!this._lvNum) {
				this._lvNum = new DatingClip(DatingClip.VIP_UP_FONT);
				this._lvNum.centerX = this._viewUI.clip_num.centerX;
				this._lvNum.centerY = this._viewUI.clip_num.centerY;
				this._viewUI.clip_num.parent.addChild(this._lvNum);
				this._viewUI.clip_num.removeSelf();
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this._viewUI.box_sk.addChild(this._avatar);
			}
			this._avatar.loadSkeleton(DatingPath.sk_dating + "vip", this._viewUI.box_sk.width / 2, this._viewUI.box_sk.height / 2, 2);
			let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			// this._lvNum.setText(10,true);
			this._lvNum.setText(mainPlayer.playerInfo.vip_level, true);
			this._viewUI.btn_goto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		update(diff): void {
			if (this._avatar) {
				this._avatar.onDraw();
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_goto://前往vip
					this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP, null, () => {
						if (this._game.datingGame.isAlertFirstPay) {
							this._game.uiRoot.general.open(DatingPageDef.PAGE_FIRST_RECHARGE);
							this._game.datingGame.isAlertFirstPay = false;
						}
					});
					this.dataSource = true;
					this.close();
					break;
			}
		}

		public close(): void {
			if (this._viewUI) {

			}
			if (this._avatar) {
				this._avatar.clear();
				this._avatar.destroy();
				this._avatar = null;
			}
			if (this._lvNum) {
				this._lvNum.removeSelf();
				this._lvNum.destroy();
				this._lvNum = null;
			}
			super.close();
		}
	}
}