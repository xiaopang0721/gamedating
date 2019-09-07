/**
* name 邮件打开界面
*/
module gamedatingnqp.page {
	export class MailOpenPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.XinXi1UI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "xinxi.atlas",
			];

			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XinXi1UI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_shanchu.on(LEvent.CLICK, this, this.onBtnClickWithTween);

		}

		protected onBtnTweenEnd(e: any, target: any) {
			if (target == this._viewUI.btn_shanchu) {
				this._game.alert("确定要删除该邮件?", () => {
					this._game.datingGame.mailMgr.delMail(this._data.mail_orderid, (data) => {
						this.close();
					}
					)
				}, () => {

				}, false)
			}
		}

		private _data: any;
		setData(data: any) {
			this._data = data;
			TextFieldU.setHtmlText(this._viewUI.txt_content, data.context);
			// this._viewUI.txt_content.text = data.context;
			this._viewUI.panel.vScrollBarSkin = "";
			let end_time = data.mail_time + 30 * 86400;
			this._viewUI.txt_validTime.text = Math.floor((end_time - this._game.sync.serverTimeBys) / 86400) + "天";
			this._viewUI.txt_content.height = this._viewUI.txt_content.textField.textHeight;
		}

		public close(): void {

			if (this._viewUI) {

			}
			super.close();
		}
	}


}