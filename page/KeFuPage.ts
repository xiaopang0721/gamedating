/**
* name 客服
*/
module gamedating.page {
	export class KeFuPage extends game.gui.base.Page {
		static readonly TYPE_CHANGJIAN_WENTI = 0;//常见问题
		static readonly TYPE_WEIXIN_KEFU = 1;//微信/QQ客服
		static readonly TYPE_LIANXI_KEFU = 2;//联系客服

		private _viewUI: ui.nqp.dating.KeHuUI;
		private _scrollBarValue: number;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "kehu.atlas",
				DatingPath.atlas_dating_ui + "chongzhi.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.KeHuUI");
			this.addChild(this._viewUI);
			this._viewUI.list_kefu.visible = false;
			this._viewUI.list_kefu.vScrollBarSkin = "";
			this._viewUI.list_kefu.scrollBar.elasticDistance = 100;
			this._viewUI.list_kefu.itemRender = this.createChildren("dating.component.KeFuRenderUI", KeFuItemRender);
			this._viewUI.list_kefu.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_kefu.scrollTo(this._scrollBarValue || 0)

			for (let index = 0; index < this._viewUI.tab_kefu.numChildren; index++) {
				let item = this._viewUI.tab_kefu.getChildByName("item" + index) as Laya.Button;
				item.visible = (index == KeFuPage.TYPE_CHANGJIAN_WENTI);
				this._tabItems[index] = item;
			}
			this._viewUI.tab_kefu.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.tab_kefu.selectedIndex = KeFuPage.TYPE_CHANGJIAN_WENTI;

		}

		private _tabItems: Button[] = [];

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
			this._game.playSound(Path.music_kefu);
			this.onSucessHandler();
		}

		private renderHandler(cell: KeFuItemRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource, index + 1);
			}
		}

		private selectHandler(index: number) {
			this.updateSelect();
		}

		private updateSelect() {
			let btn0 = this._tabItems[KeFuPage.TYPE_LIANXI_KEFU];
			btn0 && (btn0.visible = (this._zxKeFu && this._zxKeFu.length > 0));
			let btn1 = this._tabItems[KeFuPage.TYPE_WEIXIN_KEFU];
			btn1 && (btn1.visible = (this._keFu && this._keFu.length > 0));
			this.updatePos();
			let index = this._viewUI.tab_kefu.selectedIndex;
			if (index == KeFuPage.TYPE_LIANXI_KEFU) {
				if (parseInt(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'isouterjump_service'))) {
					WebConfig.openUrl(this._zxKeFu);
					return;
				} else {
					this.showIframe();
				}
			}
			else if (index == KeFuPage.TYPE_WEIXIN_KEFU) {
				this._viewUI.list_kefu.scrollBar.stopScroll();
				this._viewUI.list_kefu.dataSource = this._keFu;
				this._viewUI.list_kefu.visible = this._keFu && this._keFu.length > 0;
				this._viewUI.list_kefu.scrollTo(0);
			}

			this._viewUI.list_kefu.visible = index == KeFuPage.TYPE_WEIXIN_KEFU;
			this._viewUI.panel_wenti.visible = index == KeFuPage.TYPE_CHANGJIAN_WENTI;
			!WebConfig.info.is_outer_jump && this._game.datingGame.visibleIframe(index == KeFuPage.TYPE_LIANXI_KEFU);
		}

		private onJianPanShow(height: number) {
			this.resizeIframe(height);
		}

		private onJianPanHide() {
			this.resizeIframe();
		}

		private updatePos() {
			let total_y: number = this._tabItems[0].y;
			for (let index = 0; index < this._tabItems.length; index++) {
				let btn = this._tabItems[index];
				if (!btn || !btn.visible) continue;
				btn.y = total_y;
				total_y += btn.height + 4;
			}
		}

		private _zxKeFu: string = "";
		private _keFu: any = [];
		protected onSucessHandler() {
			this._zxKeFu = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'serviceonline') || "";
			let qqkf = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'QQ_KF') || "";
			qqkf = qqkf && (<string>qqkf).split(',');
			let wxkf = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'WX_KF') || "";
			wxkf = wxkf && (<string>wxkf).split(',');
			if (qqkf && qqkf.length) {
				for (let i = 0; i < qqkf.length; i++) {
					let obj = { type: "QQ客服", head: StringU.substitute("tx_{0}.png", i + 1 > 10 ? "qq" : i + 1), num: qqkf[i] }//头像和号码绑定
					this._keFu.push(obj);
				}
			}
			if (wxkf && wxkf.length) {
				for (let i = 0; i < wxkf.length; i++) {
					let obj = { type: "微信客服", head: StringU.substitute("tx_{0}.png", i + 11 > 20 ? "wx" : i + 11), num: wxkf[i] }//头像和号码绑定
					this._keFu.push(obj);
				}
			}
			this._keFu.sort(this.randomSort);
			this.updateSelect();
		}

		private randomSort(a, b) {
			return Math.random() > 0.5 ? -1 : 1;
		}

		update(diff: number) {
			super.update(diff);
		}

		//重新布局
		protected layout(): void {
			super.layout();
			this.resizeIframe();
			if (!this._viewUI.list_kefu) return;
			this._viewUI.list_kefu.refresh();
		}

		private resizeIframe(height?: number) {
			if (!WebConfig.iframe) return;
			let p_w = this._viewUI.panel_onlinekf.width * this._game.clientScale;
			let p_h = this._viewUI.panel_onlinekf.height * this._game.clientScale;
			let b_w = this._viewUI.box.width * this._game.clientScale;
			let b_h = this._viewUI.box.height * this._game.clientScale;
			let x = 0;
			let y = 0;
			x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel_onlinekf.x * this._game.clientScale);
			y = (Laya.stage.height - b_h) * .5 + ((this._viewUI.panel_onlinekf.y) * this._game.clientScale);
			if (height) {
				let bottom = (Laya.stage.height - b_h) * .5 + ((720 - this._viewUI.panel_onlinekf.y - this._viewUI.panel_onlinekf.height) * this._game.clientScale);
				y = y - Number(height) + Number(bottom);
			}
			this._game.datingGame.resizeIframe(x, y, p_w, p_h);
		}

		private showIframe() {
			if (WebConfig.iframe) return;
			if (!this._zxKeFu) return;
			let p_w = this._viewUI.panel_onlinekf.width * this._game.clientScale;
			let p_h = this._viewUI.panel_onlinekf.height * this._game.clientScale;
			let b_w = this._viewUI.box.width * this._game.clientScale;
			let b_h = this._viewUI.box.height * this._game.clientScale;
			let x = 0;
			let y = 0;
			x = (Laya.stage.width - b_w) * .5 + (this._viewUI.panel_onlinekf.x * this._game.clientScale)
			y = (Laya.stage.height - b_h) * .5 + (this._viewUI.panel_onlinekf.y * this._game.clientScale)
			this._game.datingGame.showIframe(this._zxKeFu, x, y, p_w, p_h);
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.list_kefu.dataSource = [];
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_SHOW, this, this.onJianPanShow);
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_KEYBOARD_HIDE, this, this.onJianPanHide);
				this._game.datingGame.closeIframe();
			}
			super.close();
		}
	}

	class KeFuItemRender extends ui.nqp.dating.component.KeFuRenderUI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any, index: number) {
			this._game = game;
			this._data = data;
			if (!this._data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this.img_head.skin = DatingPath.ui_dating + 'kehu/' + data.head;
			this.txt_id.text = data.num;
			this.img_logo.skin = DatingPath.ui_dating + 'chongzhi/' + (data.type == "QQ客服" ? "QQH5.png" : "WXSM.png");
			this.txt_name.text = data.type + index;
			this.txt_type.text = data.type == "QQ客服" ? "QQ：" : "微信：";
			this.btn_link.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle(e: LEvent) {
			this._game.uiRoot.btnTween(e.currentTarget, this, () => {
				if (this._data.type == "QQ客服") {
					this._game.datingGame.qqOpen(this._data.num);
				} else {
					WebConfig.copyTxt(this._data.num);
					this._game.datingGame.wxOpen();
					this._game.showTips("复制成功");
				}
			})
		}
		destroy() {
			super.destroy();
		}
	}

}