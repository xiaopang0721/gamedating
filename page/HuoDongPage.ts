/**
* name 活动
*/
module gamedating.page {
	export class HuoDongPage extends game.gui.base.Page {
		static readonly TYPE_HUODONG = 1; //活动类型
		static readonly TYPE_GONGGAO = 2; //公告类型
		private _viewUI: ui.nqp.dating.HuoDongUI;
		private _curSelectTab: number;
		private _curSelectData: any;
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
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._viewUI.btn_tab.on(LEvent.CLICK, this, this.onBtnTabChange, [false]);
			//活动区
			this._viewUI.list_tab.vScrollBarSkin = "";
			// this._viewUI.list_tab.scrollBar.elasticDistance = 100;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender1UI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.list_tab.dataSource = [];
			this._viewUI.list_tab.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
			this._viewUI.myhd0.vScrollBarSkin = "";
			this._viewUI.myhd0.vScrollBar.changeHandler = new Handler(this, this.changeHandler_myhd0);

			this._viewUI.myhd1.vScrollBarSkin = "";
			this._viewUI.myhd1.vScrollBar.changeHandler = new Handler(this, this.changeHandler_myhd1);

			this._viewUI.myhd2.vScrollBarSkin = "";

			this._viewUI.myhd2.on(LEvent.MOUSE_DOWN, this, this.judgeIsJump);
			this._viewUI.myhd2.on(LEvent.MOUSE_UP, this, this.judgeIsJump);
			this._viewUI.txt.text = "";
			this._viewUI.txt_myhd.text = "";
			this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			//公告区
			this._viewUI.panel_tu.visible = false;
			this._viewUI.panel_wenzi.visible = false;
			this._viewUI.panel_wenzitu.visible = false;
			this._viewUI.panel_tu.vScrollBarSkin = "";

			this._viewUI.panel_wenzi.vScrollBarSkin = "";
			this._viewUI.panel_wenzi.vScrollBar.changeHandler = new Handler(this, this.changeHandler_panel_wenzi);

			this._viewUI.panel_wenzitu.vScrollBarSkin = "";
			this._viewUI.panel_wenzitu.vScrollBar.changeHandler = new Handler(this, this.changeHandler_panel_wenzitu);

			this._viewUI.lab_wenzi.on(LEvent.LINK, this, this.onLinkHandle);
			this._viewUI.lab_wenzitu.on(LEvent.LINK, this, this.onLinkHandle);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getHuoDongData);
			//获取公告数据
			this._game.network.call_get_bulletin_list();
			//获取数据
			this.getHuoDongData();
			this.onBtnTabChange();
		}

		//重置滚动条参数
		private resetScrollValue(): void {
			this._viewUI.myhd2.vScrollBar.value
				= this._viewUI.myhd1.vScrollBar.value
				= this._viewUI.myhd0.vScrollBar.value
				= this._viewUI.panel_tu.vScrollBar.value
				= this._viewUI.panel_wenzi.vScrollBar.value
				= this._viewUI.panel_wenzitu.vScrollBar.value
				= 0;
		}

		private changeHandler_list_tab(e: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
			let value = this._viewUI.list_tab.scrollBar.value;
			if (!this._viewUI.list_tab.scrollBar.min && !this._viewUI.list_tab.scrollBar.max) {
				this._viewUI.btn_pre.visible = false;
				this._viewUI.btn_next.visible = false;
			} else {
				if (value <= this._viewUI.list_tab.scrollBar.min) {
					this._viewUI.btn_pre.visible = false;
					this._viewUI.btn_next.visible = true;
				} else if (value >= this._viewUI.list_tab.scrollBar.max) {
					this._viewUI.btn_pre.visible = true;
					this._viewUI.btn_next.visible = false;
				}
			}
		}
		private changeHandler_myhd0(e: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.myhd0, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}
		private changeHandler_myhd1(e: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.myhd1, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}
		private changeHandler_panel_wenzi(e: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.panel_wenzi, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}
		private changeHandler_panel_wenzitu(e: LEvent): void {
			DisplayU.onScrollChange(this._viewUI.panel_wenzitu, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_H);
		}


		private onBtnTabChange(isInit: boolean = true, e?: LEvent, ): void {
			if (!this._curSelectTab && this._curSelectTab != 0) {
				this._curSelectTab = 1;
				this._viewUI.btn_tab.selected = false;
			}
			else {
				this._curSelectTab = this._curSelectTab == HuoDongPage.TYPE_GONGGAO ? HuoDongPage.TYPE_HUODONG : HuoDongPage.TYPE_GONGGAO;
				this._viewUI.btn_tab.selected = !this._viewUI.btn_tab.selected;
			}
			if (!isInit) this._game.playSound(Path.music + "btn.mp3");
			this.resetScrollValue();
			if (this._curSelectTab == HuoDongPage.TYPE_GONGGAO) {
				//公告
				this._curSelectData = this._activeList;
				this._viewUI.box_hd.visible = false;
				this._viewUI.box_gg.visible = true;
				this._viewUI.list_tab.dataSource = this._activeList && this._activeList.length > 0 ? this._activeList : [];
				this._viewUI.list_tab.visible = this._activeList && this._activeList.length > 0;
				this._viewUI.btn_pre.visible = false;
				this._viewUI.btn_next.visible = this._activeList && this._activeList.length > 6;
			} else if (this._curSelectTab == HuoDongPage.TYPE_HUODONG) {
				//活动
				this._curSelectData = this._curHDData;
				this._viewUI.box_hd.visible = true;
				this._viewUI.box_gg.visible = false;
				this._viewUI.list_tab.dataSource = this._curHDData && this._curHDData.length > 0 ? this._curHDData : [];
				this._viewUI.list_tab.visible = this._curHDData && this._curHDData.length > 0;
				this._viewUI.btn_pre.visible = false;
				this._viewUI.btn_next.visible = this._curHDData && this._curHDData.length > 6;
			}
			this._viewUI.list_tab.selectedIndex = 0;
			this.selectHandler(0);
		}

		private selectHandler(index: number) {
			let selectedIndex = this._viewUI.list_tab.selectedIndex;
			if (selectedIndex < 0) return;
			if (!this._viewUI.list_tab.dataSource || !this._viewUI.list_tab.dataSource.length) return;
			let selectedItem = this._viewUI.list_tab.dataSource[selectedIndex];
			if (this._curSelectTab == HuoDongPage.TYPE_GONGGAO) {
				this.updateSelectHandleGongGao(selectedItem);
			} else if (this._curSelectTab == HuoDongPage.TYPE_HUODONG) {
				this.updateSelectHandleHuoDong(selectedItem);
			}
			this.resetScrollValue();
		}


		private _curHDData: any;
		private _activeList: any;
		private getHuoDongData(): void {
			//活动数据获取
			let dataObj: any = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_PROMOTIONSCFG_C, "");
			let dataList = [];
			for (let key in dataObj) {
				if (dataObj.hasOwnProperty(key)) {
					let element = dataObj[key];
					if (element && Number(element.status) == 1)
						dataList.push(element);
				}
			}
			//排序
			dataList.sort((a: any, b: any) => {
				return Number(b.orderby) - Number(a.orderby);
			})
			this._curHDData = dataList;
		}

		private onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_GETBULLETINLIST) {
				if (data && data.success == 0) {//公告
					this._activeList = [];
					let gonggao = data.msg && data.msg.list && data.msg.list.length > 0 ? data.msg.list : [];
					for (let key in gonggao) {
						let element = gonggao[key];
						if (element && Number(element.status) == 1) {
							this._activeList.push(element);
						}
					}
					//读取公告
					// this._game.network.call_read_bulletin();
				}
			}
		}

		//================公告start=================
		private updateSelectHandleGongGao(selectedItem): void {
			if (selectedItem) {
				this._viewUI.panel_wenzi.visible = selectedItem.b_type == 1;
				this._viewUI.panel_tu.visible = selectedItem.b_type == 2;
				this._viewUI.panel_wenzitu.visible = !this._viewUI.panel_wenzi.visible && !this._viewUI.panel_tu.visible;
				if (selectedItem.b_type == 1) {//纯文字
					TextFieldU.setHtmlText(this._viewUI.lab_wenzi, selectedItem.context);
					this._viewUI.lab_wenzi.height = this._viewUI.lab_wenzi.textField.textHeight;
				} if (selectedItem.b_type == 2) {//纯图片
					this._viewUI.img_tu.skin = selectedItem.img_url;
				} else {//图片+文字
					this._viewUI.img_wenzitu.skin = selectedItem.img_url;
					TextFieldU.setHtmlText(this._viewUI.lab_wenzitu, selectedItem.context);
					this._viewUI.lab_wenzitu.height = this._viewUI.lab_wenzitu.textField.textHeight;

				}
			}
		}
		private onLinkHandle(data: string) {
			WebConfig.openUrl(data);
		}
		//================公告end=================

		//================活动start=================
		private updateSelectHandleHuoDong(selectedItem: any) {
			if (selectedItem) {
				this._viewUI.myhd0.visible = false;
				this._viewUI.myhd1.visible = false;
				this._viewUI.img_myhd.visible = false;
				this._viewUI.myhd2.visible = false;
				let listData = selectedItem.img_list ? JSON.parse(selectedItem.img_list) : "";
				let isShowBtn = selectedItem.topopup > 1 && selectedItem.show_button && Number(selectedItem.show_button) == 1;
				if (listData && listData.length > 0) {
					if (selectedItem.pro_type == 1) {
						//图文
						this._viewUI.myhd1.visible = true;
						this._viewUI.img_myhd.visible = true;
						this._viewUI.img_myhd.skin = listData.length > 0 ? listData[0].path : '';
						this._viewUI.txt_myhd.text = selectedItem.content;
						this._viewUI.txt_myhd.height = this._viewUI.txt_myhd.textField.textHeight;
						this._viewUI.myhd1.height = isShowBtn ? 243 : 323;
					} else {
						//纯大图
						this._viewUI.myhd2.visible = true;
						this._viewUI.myhd2.height = isShowBtn ? 425 : 510;
						//排序数据
						if (listData) {
							listData.sort((a: any, b: any) => {
								return Number(a.sort) - Number(b.sort);
							});
							this.clerarAll();
							this._listData = listData;
							//预加载
							this.firstLoadUrl();
						}
					}
				} else {
					//纯文本
					this._viewUI.myhd0.visible = true;
					this._viewUI.txt.text = selectedItem.content;
					this._viewUI.txt.height = this._viewUI.txt.textField.textHeight;
					this._viewUI.myhd0.height = isShowBtn ? 425 : 510;
				}
				this._viewUI.img_bg.visible = isShowBtn;
				this._viewUI.btn_qiandao.visible = isShowBtn;
			}
		}
		//资源预加载
		private _listData;
		private _refAssetArr: Array<RefAsset> = [];
		private firstLoadUrl(): void {
			let idx = 0;
			for (let i = 0; i < this._listData.length; i++) {
				let imgData = this._listData[i];
				if (imgData) {
					if (!imgData.path) return;
					let refAsset = RefAsset.Get(imgData.path);
					refAsset.retain();
					this._refAssetArr.push(refAsset);
					if (!refAsset.parseComplete) {
						refAsset.once(LEvent.COMPLETE, this, () => {
							//首次全部加载完成
							idx++;
							if (idx == this._listData.length) {
								this.addImg();
							}
						});
					}
					else {
						idx++;
						if (idx == this._listData.length) {
							this.addImg();
						}
					}
				}
			}
		}
		//添加图片
		private _imgArr: Array<LImage> = [];
		private addImg(): void {
			if (this._viewUI) {
				let y = 0;
				for (let i = 0; i < this._listData.length; i++) {
					let img = new LImage(this._listData[i].path);
					this._imgArr.push(img);
					img.width = 837;
					img.pos(0, y)
					this._viewUI.myhd2.addChild(img);
					y += img.height;
				}
			}
		}
		private clerarAll(): void {
			if (this._imgArr && this._imgArr.length > 0) {
				//清除
				for (let i = 0; i < this._imgArr.length; i++) {
					let img: LImage = this._imgArr[i];
					if (img) {
						this._imgArr.splice(i, 1);
						img.removeSelf();
						img = null;
						i--;
					}
				}
			}
			if (this._refAssetArr && this._refAssetArr.length > 0) {
				for (let i = 0; i < this._refAssetArr.length; i++) {
					let refAsset = this._refAssetArr[i];
					if (refAsset) {
						refAsset.offAll();
						refAsset.release();
						refAsset = null;
						this._refAssetArr.splice(i, 1);
						i--;
					}
				}
			}
		}
		private renderHandler(cell: TabItemRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}
		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_qiandao:
					this.jumpPage();
					break
			}
		}
		private _isMouseDown: boolean = false;
		private _mouseDownY: number = 0;
		private judgeIsJump(e: LEvent): void {
			switch (e.type) {
				case LEvent.MOUSE_DOWN:
					this._isMouseDown = true;
					this._mouseDownY = e.stageY;
					break
				case LEvent.MOUSE_UP:
					let diffYNum = Math.abs(e.stageY - this._mouseDownY);
					if (diffYNum < 5) {
						this.jumpPage();
					}
					break
			}
		}
		private jumpPage(): void {
			let indx = this._viewUI.list_tab.selectedIndex;
			let cc: any = this._viewUI.list_tab.dataSource[indx];
			if (!cc) return;
			if (cc.topopup > 1) {
				if (cc.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_HUODONG) {//优惠活动
					return;
				} else if (cc.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_CHONGZHI) {//充值
					this._game.uiRoot.general.open(DatingPageDef.GONGGAO_GOTO[cc.topopup], (page) => {
						page.dataSource = DatingPageDef.CHONGZHI_GOTO[cc.sub_topopup];
					}, () => {
						this._game.uiRoot.general.open(DatingPageDef.PAGE_HUODONG);
					});
					this.close();
					return;
				} else if (cc.topopup == Web_operation_fields.GAME_GONGGAO_OPENPAGE_TYPE_FANGKA) {	//房卡标签
					let page: HudMainPage = this._game.uiRoot.HUD.getPage(DatingPageDef.PAGE_HUD) as HudMainPage;
					if (page) {
						page.viewUI.tab.selectedIndex = Number(DatingPageDef.TYPE_CARD);
					}
					this.close();
				} else {
					this._game.uiRoot.general.open(DatingPageDef.GONGGAO_GOTO[cc.topopup], null, () => {
						this._game.uiRoot.general.open(DatingPageDef.PAGE_HUODONG);
					});
					this.close();
					return;
				}
			}
		}
		//================活动end=================

		public close(): void {
			if (this._viewUI) {
				this.clerarAll();
				DisplayU.onScrollChange(this._viewUI.list_tab, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.myhd0, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.myhd1, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.panel_wenzi, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				DisplayU.onScrollChange(this._viewUI.panel_wenzitu, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_H);
				this._viewUI.lab_wenzi.off(LEvent.LINK, this, this.onLinkHandle);
				this._viewUI.lab_wenzitu.off(LEvent.LINK, this, this.onLinkHandle);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getHuoDongData);
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
			this.txt_name.text = EnumToString.getLimitStr(data.title, 6);
		}
	}

}