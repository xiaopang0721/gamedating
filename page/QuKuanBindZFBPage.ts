/**
* name 绑定支付宝
*/
module gamedatingnqp.page {
	export class QuKuanBindZFBPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.QuKuan_zfbUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qukuan.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.QuKuan_zfbUI");
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			WebConfig.info && (this._viewUI.txt_name.text = WebConfig.info.real_name);
			this._viewUI.btn_bind.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.txt_name.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_zh.on(LEvent.FOCUS, this, this.onFocus);
			this._viewUI.txt_name.on(LEvent.BLUR, this, this.onBlur);
			this._viewUI.txt_zh.on(LEvent.BLUR, this, this.onBlur);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_bind.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.txt_name.off(LEvent.FOCUS, this, this.onFocus);
				this._viewUI.txt_zh.off(LEvent.FOCUS, this, this.onFocus);
				this._viewUI.txt_name.off(LEvent.BLUR, this, this.onBlur);
				this._viewUI.txt_zh.off(LEvent.BLUR, this, this.onBlur);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			}
			super.close();
		}

		private onFocus(input) {
			this._viewUI.box.centerY = -100;
		}

		private onBlur(input) {
			this._viewUI.box.centerY = 20;
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_BINGDALIPAY) {
				if (data && data.success == 0) {
					this._game.sceneGame.sceneObjectMgr.event(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE)
					this._game.showTips("绑定成功");
					this.close();
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_bind://确认绑定
					if (!this._viewUI.txt_name.text) {
						this._game.showTips("真实姓名不能为空")
						return;
					}
					if (!this._viewUI.txt_zh.text) {
						this._game.showTips("账户不能为空")
						return;
					}
					let reg = new RegExp("^[\u4e00-\u9fa5]+$");
					if (!reg.test(this._viewUI.txt_name.text)) {
						this._game.showTips("真实姓名只能输入中文")
						return;
					}
					this._game.network.call_bindalipay(this._viewUI.txt_zh.text, '', this._viewUI.txt_name.text)
					break;
			}
		}

		private openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
			 DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
		}		
	}
}