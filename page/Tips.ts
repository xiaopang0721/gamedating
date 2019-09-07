/**
* name 提示
*/
module gamedatingnqp.page {
	export class Tips extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.TipsUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
			];
			this._isNeedBlack = true;
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TipsUI");
			this.addChild(this._viewUI);
			
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onMouseHandle);
			this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		protected onMouseDown(e: LEvent) {
			return true;
		}
		
		private onMouseHandle(e: LEvent) {
			if (e.currentTarget == this._viewUI.btn_enter) {
				if (this._ecb != null) {
					this._ecb.apply(this, [false]);
					this._ecb = null;
				}
				super.close();
			}
			else {
				if (this._ccb != null) {
					this._ccb.apply(this, [false]);
					this._ccb = null;
				}
				this.close();
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
		}

		public close(): void {
			if (this._viewUI) {
				if (this._ccb != null) {
					this._ccb.apply(this, [true]);
					this._ccb = null;
				}
			}
			super.close();
		}

		private _isOnlyOK: boolean
		set isOnlyOK(isOnlyOK: boolean) {
			this._isOnlyOK = isOnlyOK;
			if (isOnlyOK) {
				this._viewUI.btn_enter.centerX = 0;
				this._viewUI.btn_cancle.visible = false;
			} else {
				this._viewUI.btn_enter.right = 60;
				this._viewUI.btn_cancle.left = 60;
				this._viewUI.btn_enter.visible = true;
				this._viewUI.btn_cancle.visible = true;
			}
		}

		private _ecb: Function;
		private _ccb: Function;
		setInfo(str, ecb: Function, ccb: Function, okSkin: string, cancleSkin: string) {
			this._viewUI.txt_label.text = str;
			// TextField.setHtmlText(this._viewUI.txt_label, str);//支持HTML
			this._ecb = ecb;
			this._ccb = ccb;
			if (okSkin) {
				this._viewUI.btn_enter.skin = okSkin;
			}
			if (cancleSkin) {
				this._viewUI.btn_cancle.skin = cancleSkin;
			}
		}
	}
}