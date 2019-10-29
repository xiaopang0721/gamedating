module gamedating.page {
	/**
	 * 下拉提示
	 * name 
	 */
	export class TipsPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.TipsXiaLaUI;//UI
		private _viewTips: Array<ViewTip>;
		private static MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
			this._isNeedDuang = false;
		}

		/**数据*/
		set dataSource(v: any) {
			this._dataSource = v;
			this.initUI();
		}

		private _offsetTime: number = 0;
		update(diff: number) {
			//间隔一秒检测一次
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = TipsPage.MIN_CHECKTIME;
			if (this._viewTips.length == 0 || !this._viewTips) {
				this.close();
			}
		}

		removeTip(viewTip) {
			if (!viewTip) return;
			let idx = this._viewTips.indexOf(viewTip);
			if (idx == -1) return;
			this._viewTips.splice(idx, 1);
		}

		protected init(): void {
			this._viewUI = this._view = this.createView("dating.TipsXiaLaUI");
			this._viewUI.mouseEnabled = false;
			this._viewUI.boxTips.visible = false;
			this._viewTips = [];
			this.addChild(this._viewUI);
		}
		// 页面初始化函数
		private initUI(): void {
			if (!this._viewTips) {
				this._viewTips = [];
			}
			//仅限显示3条
			if (this._viewTips.length >= 3) {
				ObjectPools.free(this._viewTips.pop());
			}
			let viewTip: ViewTip = ViewTip.create(this._dataSource, this) as ViewTip;
			//插进来，要进行排序
			if (this._viewTips.length > 0) {
				for (let i = 0; i < this._viewTips.length; i++) {
					let tip = this._viewTips[i];
					if (tip) {
						tip.centerY = -88 - (i + 1) * 44;
					}
				}
			}
			this._viewTips.unshift(viewTip);
			this._viewUI.addChild(viewTip);
		}
		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
		}

		public close(): void {
			if (this._viewUI) {
				if (this._viewTips && this._viewTips.length > 0) {
					for (var i = 0; i < this._viewTips.length; i++) {
						var tip = this._viewTips[i];
						if (!tip) continue;
						ObjectPools.free(tip);
						this._viewTips.splice(i, 1);
						i--;
					}
				}
				this._viewTips = null;
			}
			super.close();
		}
	}
	class ViewTip extends Laya.Box implements IPoolsObject {
		private _boxTip: Box;	//整体box
		private _imgBg: LImage;	//背景图
		private _boxTxtTip: Box;	//包裹文本的box
		private _txtTip: Label;		//文本
		private _index: number;
		private _frames: any = [{ scaleX: 0.9, scaleY: 0.9, alpha: 0, centerX: -440 }, { scaleX: 1, scaleY: 1, alpha: 1, centerX: 0 }, { alpha: 1 }, { alpha: 0 }];
		private _times: any = [0, 0.2, 1.2, 0.5];
		private _page: TipsPage;
		poolName: string = "ViewTip";
		private _htmlSize: Array<number>;
        /**
         * 进池 （相当于对象dispose函数）
         */
		intoPool(...arg: any[]): void {
			this.dispose();
		}
        /**
         * 出池 （相当于对象初始化函数）
         */
		outPool(...arg: any[]): void {
			this.init();
		}

		static create(message: string, page: TipsPage): ViewTip {
			let obj: ViewTip = ObjectPools.malloc(ViewTip) as ViewTip;
			obj.create(message, page);
			return obj;
		}
		private init(): void {
			this.centerY = -88;
			this.size(438, 79);
			this.anchorX = 0.5;
			this.anchorY = 0.5;
			this.centerX = 0;
			this.visible = false;
		}

		private initBox() {
			this._boxTip = new Box();
			this._boxTip.size(438, 79);
			this._boxTip.anchorX = 0.5;
			this._boxTip.anchorY = 0.5;
			this._boxTip.centerX = 0;
			this._boxTip.centerY = 0;
			this.addChild(this._boxTip);
		}
		private initImgBg(): void {
			this._imgBg = new LImage(DatingPath.ui_dating + "tongyong/tu_di8.png");
			this._imgBg.sizeGrid = "12,28,15,28";
			this._imgBg.size(352, 43);
			this._imgBg.anchorX = 0.5;
			this._imgBg.anchorY = 0.5;
			this._imgBg.centerX = 0;
			this._boxTip.addChild(this._imgBg);
		}
		private initLabel(message: string): void {
			this._boxTxtTip = new Box();
			this._boxTxtTip.anchorX = 0.5;
			this._boxTxtTip.anchorY = 0.5;
			this._boxTxtTip.centerX = 0;
			this._txtTip = new Label(message);
			this._txtTip.fontSize = 24;
			this._txtTip.color = TeaStyle.COLOR_GREEN;
			this._txtTip.align = "center";
			this._txtTip.pos(0, 0);
			this._boxTxtTip.addChild(this._txtTip);
			this._boxTip.addChild(this._boxTxtTip);
		}

		private create(message: string, page: TipsPage) {
			this._page = page;
			this.initBox();
			this.initImgBg();
			this.initLabel(message);
			this._htmlSize = TextFieldU.setHtmlText(this._txtTip, message);
			this.visible = true;
			this.showAniShow();
		}

		//展示显示动画
		private showAniShow(): void {
			Laya.Tween.clearAll(this._boxTip);
			this._boxTip.scale(0.9, 0.9);
			this._boxTip.alpha = 0;
			this._imgBg.width = this._htmlSize[0] + 200;
			this._index = 0;
			this.updateTween();
		}

		private updateTween(): void {
			if (this._index < 0 || this._index >= this._frames.length) {
				//结束了
				ObjectPools.free(this);
				return;
			}
			let frame: any = this._frames[this._index];
			let time: number = this._times[this._index] * 1000;
			this._index++;
			if (!time) {
				for (let key in frame) {
					if (frame.hasOwnProperty(key)) {
						let v = frame[key];
						this._boxTip[key] = v;
					}
				}
				this.updateTween();
				return;
			}
			Laya.Tween.to(this._boxTip, frame, time, Laya.Ease.linearNone, Handler.create(this, () => { this.updateTween() }));
		}

		private clearAll(): void {
			Laya.Tween.clearAll(this._boxTip);
			this._txtTip.text = "";
			TextFieldU.clearLabel(this._txtTip);
		}

		private dispose() {
			this.clearAll();
			this._txtTip.removeSelf();
			this._txtTip = null;
			this._imgBg.removeSelf();
			this._imgBg = null;
			this._boxTip.removeSelf();
			this._boxTip = null;
			this._index = 0;
			this.removeSelf();
			this._page.removeTip(this);
		}
	}
}