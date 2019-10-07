/**
* name 公告
*/
module gamedating.page {
	export class GongGaoPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.DaTingGgUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "datinggg.atlas",
			];
			this._isNeedDuang = false;
			this._isNeedBlack = false;
			this._isClickBlack = false;
			this.mouseEnabled = false;
			this.mouseThrough = true;
		}

		setSpeed(v: number) {
			this._speed = 120 + v;
		}

		//跑马灯速度
		private _speed: number = 120;
		//跑马灯html文本
		private _htmlText: laya.html.dom.HTMLDivElement;
		private _type: number;
		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.DaTingGgUI");
			this.addChild(this._viewUI);
			this._viewUI.mouseThrough = true;
			this.addChild(this._viewUI);
			this.initHtmlText();
		}

		private initHtmlText(): void {
			if (!this._htmlText) {
				this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_label);
				this._htmlText.style.lineHeight = 45;
				this._htmlText.style.valign = "middle";
				this._htmlText.style.wordWrap = false;
			}

		}

		protected onOpen(): void {
			super.onOpen();
			DatingGame.ins.noticeMgr.on(NoticesMgr.EVENT_CHANGE, this, this.onUpdateNotes);
			this.onUpdateNotes();
		}

		private _time: number;
		private _from: number;
		private _to: number;
		private _isShowNotice: boolean;
		private _txtW: number;
		private _total: number;
		private onUpdateNotes() {
			if (this._isShowNotice) return;
			let notice = DatingGame.ins.noticeMgr.getNotice();
			if (notice) {
				let obj = EnumToString.getGongGaoText(notice);
				this._htmlText.innerHTML = obj.msg;
				this._txtW = this._htmlText.contextWidth;
				this._htmlText.x = this._viewUI.img_bg.width - 50;
				this.layout();
				this._total = (this._txtW + this._htmlText.x) * 1000 / this._speed;
				this._time = 0;
				this._isShowNotice = true;
				this._viewUI.box_notice.visible = true
			} else {
				this._isShowNotice = false;
				this._viewUI.box_notice.visible = false
			}

		}

		layout() {
			super.layout();
			this._htmlText && (this._from = this._htmlText.x);
			this._to = -this._txtW;
		}

		update(diff: number) {
			if (this._isShowNotice) {
				if (this._total >= this._time) {
					this._time += diff;
					this._htmlText.x = MathU.lerp(this._from, this._to, this._time / this._total);
				} else {
					this._isShowNotice = false;
					this._viewUI.box_notice.visible = false
					this.onUpdateNotes();
				}
			}
		}

		public close(): void {
			DatingGame.ins.noticeMgr.off(NoticesMgr.EVENT_CHANGE, this, this.onUpdateNotes);
			super.close();
		}
	}

}