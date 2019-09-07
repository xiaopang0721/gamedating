/**
* name 
*/
module gamedatingnqp.page {
	export class JianPanPage extends game.gui.base.Page {
		static readonly TYPE_INPUT_NUMBER = 1; //纯数字类型
		static readonly TYPE_INPUT_ENGLISH = 2; //英文类型
		static readonly TYPE_INPUT_NUMBER_WITH_POINT = 3; //数字有小数点类型

		private _viewUI: ui.nqp.dating.JianPanUI;
		private _letterCase: number;//字母大小写
		public _str: string;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "baoxianxiang.atlas",
			];
			this._isNeedDuang = false;
			this._isNeedBlack = false;
			this.mouseThrough = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.JianPanUI");
			this.addChild(this._viewUI);

		}

		//重新布局
		layout() {
			super.layout();
			this._viewUI.img_bg.width = this._clientWidth;
		}

		private _numbtns: Button[] = [];
		private _engbtns: Button[] = [];
		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._str = DatingGame.ins.jianPanMgr.inputTxt;
			//数字键盘
			this._viewUI.btn_pop.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_clear1.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_point.on(LEvent.CLICK, this, this.onClickHandle);
			for (let index = 0; index < 10; index++) {
				this._numbtns[index] = this._viewUI["btn" + index];
				this._viewUI["btn" + index].on(LEvent.CLICK, this, this.onClickHandle);
			}

			//英文键盘
			this._viewUI.btn_pop1.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_enter1.on(LEvent.CLICK, this, this.onClickHandle);
			this._viewUI.btn_change.on(LEvent.CLICK, this, this.onClickHandle);

			for (let index = 0; index < 36; index++) {
				this._engbtns[index] = this._viewUI["btn_e_" + index];
				this._viewUI["btn_e_" + index].on(LEvent.CLICK, this, this.onClickHandle);
			}

			this._viewUI.box_number.visible = this.dataSource == JianPanPage.TYPE_INPUT_NUMBER || this.dataSource == JianPanPage.TYPE_INPUT_NUMBER_WITH_POINT;
			this._viewUI.box_english.visible = this.dataSource == JianPanPage.TYPE_INPUT_ENGLISH;
			this._viewUI.btn_clears.visible = this.dataSource == JianPanPage.TYPE_INPUT_NUMBER_WITH_POINT;
			this._viewUI.btn_clear.visible = this.dataSource == JianPanPage.TYPE_INPUT_NUMBER;
			this._letterCase = JianPanMgr.TYPE_LOWER_CASE;

			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onUpdateType);
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CAPS_LOCK, this, this.onUpdateCapsLock);
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEY_DOWN, this, this.onUpdateKeyDown);
			this.onUpdateCapsLock();
		}

		private onUpdateKeyDown() {
			this._str = DatingGame.ins.jianPanMgr.inputTxt;
		}

		private _code = {};
		private onUpdateCapsLock() {
			if (DatingGame.ins.jianPanMgr.capsLock) {//打开大写锁定
				this._code = DatingGame.ins.jianPanMgr.BLOCK_LETTER;
			} else {
				this._code = DatingGame.ins.jianPanMgr.LOWER_CASE;
			}
			for (let i = 0; i < this._engbtns.length; i++) {
				this._engbtns[i].label = this._code[i.toString()];
			}
		}

		private onUpdateType(type: number) {
			if (type == JianPanPage.TYPE_INPUT_NUMBER || type == JianPanPage.TYPE_INPUT_NUMBER_WITH_POINT) {//数字
				this._viewUI.box_number.visible = true;
				this._viewUI.box_english.visible = false;
			} else {//英文
				this._viewUI.box_number.visible = false;
				this._viewUI.box_english.visible = true;
			}
			this.dataSource = type;
			this._str = DatingGame.ins.jianPanMgr.inputTxt;
		}

		protected onMouseClick(e: LEvent): any {
			return this._viewUI.contains(e.target);
		}

		protected onClickHandle(e: LEvent) {
			if (!this._game) return;
			// this._game.uiRoot.btnTween(e.currentTarget);
			this._str = DatingGame.ins.jianPanMgr.inputTxt;
			switch (e.currentTarget) {
				case this._viewUI.btn_clear:
				case this._viewUI.btn_clear1:
					this._str = "";
					break;
				case this._viewUI.btn_pop:
					if (this._str.length > 0) {
						let deleteStr = this._str.slice(this._str.length - 1);
						this._str = this._str.slice(0, -1)
						if (deleteStr == " ") this._str = this._str.slice(0, -1)
					}
					break;
				case this._viewUI.btn_enter:
					this.close();
					return;
				case this._viewUI.btn_pop1:
					if (this._str.length > 0) {
						let deleteStr = this._str.slice(this._str.length - 1);
						this._str = this._str.slice(0, -1)
						if (deleteStr == " ") this._str = this._str.slice(0, -1)
					}
					break;
				case this._viewUI.btn_enter1:
					this.close();
					return;
				case this._viewUI.btn_change:
					DatingGame.ins.jianPanMgr.capsLock = !DatingGame.ins.jianPanMgr.capsLock;
					break;
				case this._viewUI.btn_point:
					if (this._str.indexOf(".") == -1)
						this._str += '.';
					break;
				default:
					if (this.dataSource == JianPanPage.TYPE_INPUT_NUMBER || this.dataSource == JianPanPage.TYPE_INPUT_NUMBER_WITH_POINT) {
						let numIdx = this._numbtns.indexOf(e.currentTarget as Button);
						if (numIdx != -1) {
							//如果有小数点，并且已经到达小数点后两位，则不允许输入
							if (this._str.indexOf(".") != -1 && this._str.length - this._str.indexOf(".") > 2) {
								this._game.showTips("超出小数点可取范围");
								return;
							}
							if (this._str.length >= DatingGame.ins.jianPanMgr.inputTextUI.maxChars) {
								if (this._str.indexOf(" ") != -1) {
									let noSpaceStr = removeSpaceStr(this._str);
									if (noSpaceStr.length >= DatingGame.ins.jianPanMgr.inputTextUI.maxChars) {
										return;
									}
								} else {
									return;
								}
							}
							this._str += numIdx.toString();
							if (parseFloat(this._str) > DatingGame.ins.jianPanMgr.inputTextUI.maxValue) {
								if (this.dataSource == JianPanPage.TYPE_INPUT_NUMBER)
									this._str = Math.floor(DatingGame.ins.jianPanMgr.inputTextUI.maxValue).toString();
								else
									this._str = Math.floor(DatingGame.ins.jianPanMgr.inputTextUI.maxValue).toString();
							}
						}
					} else if (this.dataSource == JianPanPage.TYPE_INPUT_ENGLISH) {
						let engIdx = this._engbtns.indexOf(e.currentTarget as Button);
						if (engIdx != -1) {
							if (this._str.length >= DatingGame.ins.jianPanMgr.inputTextUI.maxChars) return;
							this._str += this._code[engIdx.toString()];
						}
					}
					break;
			}
			if (e.currentTarget != this._viewUI.btn_change) {
				DatingGame.ins.jianPanMgr.inputTxt = this._str;
			}
		}

		public close(): void {
			if (this._viewUI) {
				DatingGame.ins.jianPanMgr.inputTxt = this._str;
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onUpdateType);
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CAPS_LOCK, this, this.onUpdateCapsLock);
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEY_DOWN, this, this.onUpdateKeyDown);
			}
			super.close();
		}
	}

}