/**
* name 活动公告
*/
module gamedating.page {
	export class MessagePage extends game.gui.base.Page {
		static readonly TYPE_GONGGAO = 1; //公告类型
		static readonly TYPE_MAIL = 2; //邮件类型

		private _viewUI: ui.nqp.dating.XinXiUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "xinxi.atlas",
				DatingPath.atlas_dating_ui + "chongzhi.atlas",
			];
			this._isNeedDuang = true;
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.XinXiUI");
			this.addChild(this._viewUI);

			this._viewUI.list_mail.vScrollBarSkin = "";
			this._viewUI.list_mail.scrollBar.autoHide = false;
			this._viewUI.list_mail.scrollBar.elasticDistance = 100;
			this._viewUI.list_mail.itemRender = this.createChildren("dating.component.XinXi_lbUI", MailItemRender);
			this._viewUI.list_mail.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_mail.dataSource = [];

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._game.datingGame.mailMgr.on(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
			this.onUpdateMail();
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		private onUpdateMail() {
			let arr: MailData[] = this._game.datingGame.mailMgr.mails;
			if (arr.length > 0) {
				this._viewUI.list_mail.dataSource = arr;
			}
			this._viewUI.list_mail.visible = arr && arr.length > 0;
			this._viewUI.txt_no_mail.visible = !this._viewUI.list_mail.visible;
		}

		public close(): void {
			if (this._viewUI) {
				this._game.datingGame.mailMgr.off(MailMgr.EVENT_CHANGE, this, this.onUpdateMail);
			}
			super.close();
		}
	}

	class MailItemRender extends ui.nqp.dating.component.XinXi_lbUI {
		private _game: Game;
		private _data: MailData;
		setData(game: Game, data: any) {
			this._game = game;
			this._data = data;
			this.txt_title.text = data.title;
			this.txt_name.text = data.mail_from;
			this.txt_content.text = this.onDescHandle(data.context) || "点击查看详情";
			this.txt_time.text = Sync.getTimeStr(data.mail_time * 1000);
			this.btn_dingyue.visible = data.isread > 0;
			this.img_mail.skin = data.isread > 0 ? DatingPath.ui_dating + "xinxi/tu_weidu.png" : DatingPath.ui_dating + "xinxi/tu_xinfen.png";
			this.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onDescHandle(desc): string {
			let str = "";
			for (let i = 0; i < desc.length; i++) {
				if (desc.charCodeAt(i) > 255) {
					str += desc[i];
				}
			}
			if (str.length > 15) {
				return str.substr(0, 15) + "...";
			} else {
				return str
			}
		}

		private onMouseHandle() {
			if (!this._data.isread) {
				this._game.datingGame.mailMgr.readMail(this._data.mail_orderid);
			}
			this._game.uiRoot.general.open(DatingPageDef.PAGE_NEW_OPEN, (page: gamedating.page.MailOpenPage) => {
				page.setData(this._data);
			})
		}
	}
}