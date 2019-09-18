/**
* name 提示
*/
module gamedating.page {
	export class Tips extends game.gui.base.Page {
		/**对应皮肤资源类型 */
		static get TIPS_SKIN_STR() {
			return {
				"qd": DatingPath.ui_dating_tongyong + "tu_qd.png",		//确定
				"qx": DatingPath.ui_dating_tongyong + "tu_qx.png",		//确定
				"wyqf": DatingPath.ui_dating + "qifu/tu_wyqf.png",	//我要祈福
				"title_qf": DatingPath.ui_dating + "qifu/tu_qf.png",	//祈福标题
				"title_ts": DatingPath.ui_dating_tongyong + "tit_tishi.png",	//提示标题
			}
		}

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
		setInfo(str, ecb: Function, ccb: Function, okSkin: string, cancleSkin: string, titleSkin: string) {
			this._viewUI.txt_label.text = str;
			TextFieldU.setHtmlText(this._viewUI.txt_label, str);//支持HTML
			this._ecb = ecb;
			this._ccb = ccb;
			if(titleSkin == Tips.TIPS_SKIN_STR["title_qf"]){
				this._viewUI.lb_tip.visible = true;
			}else{
				this._viewUI.lb_tip.visible = false;
			}
			if (okSkin) {
				this._viewUI.img_enter.skin = okSkin;
			}
			if (titleSkin) {
				this._viewUI.img_title.skin = titleSkin;
			}
			if (cancleSkin) {
				this._viewUI.img_cancle.skin = cancleSkin;
			}
		}
	}
}