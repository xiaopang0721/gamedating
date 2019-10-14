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


			this._viewUI.myhd0.vScrollBarSkin = "";
			this._viewUI.myhd1.vScrollBarSkin = "";
			this._viewUI.myhd2.vScrollBarSkin = "";
			// this._viewUI.myhd2.itemRender = this.createChildren("dating.component.ChongZhi_IMGUI", ChongzhiImgRender);
			// this._viewUI.myhd2.renderHandler = new Handler(this, this.renderImgHandler);
			this._viewUI.txt.text = "";
			this._viewUI.txt_myhd.text = "";

			this._viewUI.btn_qiandao.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getData);
			//获取数据
			this.getData();
			this._viewUI.list_tab.selectedIndex = 0;
		}

		private getData(): void {
			let dataObj: any = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_PROMOTIONSCFG_C, "");
			let dataList = [];
			for (let key in dataObj) {
				if (dataObj.hasOwnProperty(key)) {
					let element = dataObj[key];
					dataList.push(element);
				}
			}
			this._viewUI.list_tab.dataSource = dataList && dataList.length > 0 ? dataList : [];
			this._viewUI.list_tab.visible = dataList && dataList.length > 0;
		}

		private selectHandler(index: number) {
			this.updateSelectHandle();
		}

		private updateSelectHandle() {
			let selectedIndex = this._viewUI.list_tab.selectedIndex;
			if (selectedIndex < 0) return;
			if (!this._viewUI.list_tab.dataSource || !this._viewUI.list_tab.dataSource.length) return;
			let selectedItem = this._viewUI.list_tab.dataSource[selectedIndex];
			if (selectedItem) {
				this._viewUI.myhd0.visible = false;
				this._viewUI.myhd1.visible = false;
				this._viewUI.myhd2.visible = false;
				if (selectedItem) {
					let listData = selectedItem.img_list ? JSON.parse(selectedItem.img_list) : "";
					if (selectedItem.pro_type == 1) {
						//图文
						this._viewUI.myhd1.visible = true;
						this._viewUI.img_myhd.skin = listData.length > 0 ? listData[0].path : '';
						this._viewUI.txt_myhd.text = selectedItem.content;
						this._viewUI.txt_myhd.height = this._viewUI.txt_myhd.textField.textHeight;
						this._viewUI.myhd1.height = selectedItem.topopup > 1 ? 425 : 510;
					} else {
						//纯大图
						this._viewUI.myhd2.visible = true;
						this._viewUI.myhd2.height = selectedItem.topopup > 1 ? 425 : 510;
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
					this._viewUI.myhd0.height = selectedItem.topopup > 1 ? 425 : 510;
				}
				this._viewUI.img_bg.visible = selectedItem.topopup > 1;
				this._viewUI.btn_qiandao.visible = selectedItem.topopup > 1;
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
			let indx = this._viewUI.list_tab.selectedIndex;
			let cc: any = this._viewUI.list_tab.dataSource[indx];
			if (!cc) return;
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

		public close(): void {
			if (this._viewUI) {
				this.clerarAll();
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.getData);
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