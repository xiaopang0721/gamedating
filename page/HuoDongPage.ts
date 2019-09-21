/**
* name 活动
*/
module gamedating.page {
	export class HuoDongPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.HuoDongUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "huodong.atlas",
				DatingPath.atlas_dating_ui + "tongyong.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.HuoDongUI");
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender1UI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.dataSource = [];
			this._viewUI.list_tab.selectedIndex = 0;
			this._viewUI.list_tab.visible = false;

			this._viewUI.myhd0.vScrollBarSkin = "";
			this._viewUI.myhd1.vScrollBarSkin = "";
			this._viewUI.myhd0.visible = false;
			this._viewUI.myhd1.visible = false;
			this._viewUI.txt.text = "";
			this._viewUI.txt_myhd.text = "";

			this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._game.network.call_get_promo_list();
		}

		private selectHandler(index: number) {
			this.updateSelectHandle();
		}

		private list_proid: number[] = [];
		private updateSelectHandle() {
			let selectedIndex = this._viewUI.list_tab.selectedIndex;
			if (selectedIndex < 0) return;
			if (!this._viewUI.list_tab.dataSource || !this._viewUI.list_tab.dataSource.length) return;
			let selectedItem = this._viewUI.list_tab.dataSource[selectedIndex];
			if (selectedItem) {
				this._viewUI.myhd0.visible = !selectedItem.img_url;
				this._viewUI.myhd1.visible = selectedItem.img_url;
				if (selectedItem.img_url) {
					this._viewUI.img_myhd.skin = selectedItem.img_url;
					this._viewUI.txt_myhd.text = selectedItem.content;
					this._viewUI.txt_myhd.height = this._viewUI.txt_myhd.textField.textHeight;
					this._viewUI.myhd1.height = selectedItem.topopup > 1 ? 425 : 510;
				} else {
					this._viewUI.txt.text = selectedItem.content;
					this._viewUI.txt.height = this._viewUI.txt.textField.textHeight;
					this._viewUI.myhd0.height = selectedItem.topopup > 1 ? 425 : 510;
				}
				this._viewUI.img_bg.visible = selectedItem.topopup > 1;
				this._viewUI.btn_qiandao.visible = selectedItem.topopup > 1;
			}
		}

		private renderHandler(cell: TabItemRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		private onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETPROMOLIST) {
				if (data && data.success == 0) {//获取优惠活动
					this._viewUI.list_tab.dataSource = data.msg && data.msg.list && data.msg.list.length > 0 ? data.msg.list : [];
					this._viewUI.list_tab.visible = data.msg && data.msg.list && data.msg.list.length > 0;
					for (let i = 0; i < data.msg.list.length; i++) {
						if (data.msg.list[i]) {
							this.list_proid[i] = data.msg.list[i].pro_id;
						}
					}

					this.updateSelectHandle();
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			let indx = this._viewUI.list_tab.selectedIndex;
			let cc: any = this._viewUI.list_tab.dataSource[indx];
			if (!cc || !cc.end_time) return;
			if (cc.end_time < this._game.sync.serverTimeBys) {
				this._game.network.call_get_promo_list();
			} else {
				if (cc.topopup > 1) {
					if (cc.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_HUODONG) {//优惠活动
						return;
					} else if (cc.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_CHONGZHI) {//充值
						this._game.uiRoot.general.open(DatingPageDef.GONGGAO_GOTO[cc.topopup], (page) => {
							page.dataSource = DatingPageDef.CHONGZHI_GOTO[cc.sub_topopup];
						});
						this.close();
						return;
					} else {
						this._game.uiRoot.general.open(DatingPageDef.GONGGAO_GOTO[cc.topopup]);
						this.close();
						return;
					}
				}
			}

		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			}
			super.close();
		}
	}


	class TabItemRender extends ui.nqp.dating.component.TabItemRender1UI {
		private _game: Game;
		private _data: any;
		/**
		 * 
		 * @param game 
		 * @param data 
		 */
		setData(game: Game, data: any) {
			if (!data || !data.title) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this.dataSource = data;
			this.txt_name.text = data.title;
		}
	}

}