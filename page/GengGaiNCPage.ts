/**
* name 更改昵称
*/
module gamedating.page {
	export class GengGaiNCPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.dating.GeRenNCUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "geren.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.GeRenNCUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
			this._viewUI.txt_name.on(LEvent.INPUT, this, this.ChangeTextInput);
			this.ChangeTextInput();
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
		}

		private onUpdatePlayerInfo(): void {
			let mainPlayer = this._game.sceneGame.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			if (playerInfo.isNicknameChanged) {
				this._game.showTips("修改昵称成功哦~");
				this.close();
			}
		}

		private ChangeTextInput(): void {
			//长度
			this._viewUI.btn_enter.visible = false;
			this._viewUI.box_lb.visible = true;
			let len = getTextLength(this._viewUI.txt_name.text, 2);
			if (len <= 0 || len > this._viewUI.txt_name.maxChars) {
				// this._game.showTips("名字超过最大限度！")
				return;
			}
			this._viewUI.btn_enter.visible = true;
			this._viewUI.box_lb.visible = false;
		}

		private onFocus(input) {
			if (input == this._viewUI.txt_name) {
				this._viewUI.box.centerY = -160;
			}
		}
		private _isTrigger: boolean = false;
		private onBlur(input) {
			if (input == this._viewUI.txt_name) {
				this._viewUI.box.centerY = 0;
			}
			this._isTrigger = true;
		}

		onBlackSpriteClick(): void {
			if (this._isTrigger) {
				this._isTrigger = false;
				return;
			};
			super.onBlackSpriteClick();
		}

		protected onBtnTweenEnd(e: any, target: any) {
			if (target == this._viewUI.btn_clear) {
				this._viewUI.txt_name.text = "";
				this._viewUI.btn_enter.visible = false;
				this._viewUI.box_lb.visible = true;
			} else if (target == this._viewUI.btn_enter) {
				if (!this._viewUI.txt_name.text) {
					this._game.showTips("昵称为空，请重新输入");
					return;
				}
				this._game.network.call_set_role_info(2, this._viewUI.txt_name.text);
			}
		}

		public close(): void {
			this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			if (this._viewUI) {
				this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
				this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
			}
			super.close();
		}
	}


}