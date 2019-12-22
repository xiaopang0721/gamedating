/**
* API平台游戏list组件
*/
module gamedating.component {
	export class ApiListPT extends ui.ajqp.dating.component.List_QP_APIUI {
		private _game: Game;
		public page: any;
		constructor(game: Game, page: any) {
			super();
			this._game = game;
			this.page = page;
			this.init();
		}

		private init(): void {
			this.list_qp.hScrollBarSkin = ""
			this.list_qp.itemRender = QPLB_Item_One
			this.list_qp.renderHandler = new Handler(this, this.renderHandlerQP);
		}

		setData(v: any): void {
			if (!v) return;
			this.list_qp.dataSource = v;
		}

		update() {
			if (this.list_qp) {
				if (this.list_qp.dataSource) {
					let cells = this.list_qp.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as QPLB_Item_One;
						element && element.update();
					}
				}
			}
		}

		//是否在展示子游戏状态中
		public isShow: boolean = false;
		//是否处于动画中
		public isMoveAni: boolean = false;
		private _moveCellPos: Array<any> = []
		private _moveValue: number = 0;
		private _maxScroll: number = 0;
		public onBtnClick(index): void {
			let cells = this.list_qp.cells;
			if (this.isShow) {
				//找出自己，排除其他，显示列表
				//保存当前滚动的最大值，以及当前的滚动值
				this._maxScroll = this.list_qp.scrollBar.max;
				this._moveValue = this.list_qp.scrollBar.value;
				//滚动条到第一位
				this.list_qp.scrollBar.value = 0;
				let myCell
				cells.forEach(element => {
					let cell = element as QPLB_Item_One;
					if (cell.index == index) {
						//找到自己
						myCell = cell
					}
				})
				//在这个之后都挪走
				cells.forEach(element => {
					this.isMoveAni = true
					let cell = element as QPLB_Item_One
					//保存移动之前的位置
					let obj = {
						index: cell.index,
						x: cell.x
					}
					this._moveCellPos.push(obj);
					if (cell.index != index) {
						//其他的挪走
						let offset_X: number = this._moveValue + this.list_qp.width
						offset_X = cell.index > index ? offset_X : -(offset_X)
						Laya.Tween.to(cell, { x: offset_X, alpha: 0 }, 500, null, Handler.create(this, () => {
							this.isMoveAni = false
						}))
					} else {
						Laya.Tween.to(myCell, { x: 0 }, 500, null, Handler.create(this, () => {
							this.isMoveAni = false
						}))
					}
				})
				this.list_qp.scrollBar.touchScrollEnable = false;
			} else {
				cells.forEach(element => {
					this.isMoveAni = true
					let cell = element as QPLB_Item_One
					for (let i = 0; i < this._moveCellPos.length; i++) {
						if (cell.index == this._moveCellPos[i].index) {
							Laya.Tween.to(cell, { x: this._moveCellPos[i].x, alpha: 1 }, 500, null, Handler.create(this, () => {
								this.isMoveAni = false
							}))
							break
						}
					}
				})
				this.list_qp.scrollBar.value = this._moveValue;
				this._moveCellPos = [];
				this._moveValue = 0;
				this._maxScroll = 0;
				this.list_qp.scrollBar.touchScrollEnable = true;
			}
		}

		private renderHandlerQP(cell: QPLB_Item_One, index: number) {
			cell.setData(this.page, this, index, this._game);
		}
	}
	class QPLB_Item_One extends ui.ajqp.dating.component.Hud_Qp_API1UI {
		//有list的时候的宽度
		private _selfWidthList: number;
		//没有list时候的宽度
		private _selfWidth: number;
		public index: number;
		private _page: any;
		private _mainView: ApiListPT;
		private _game: Game;
		private _type: number;
		constructor() {
			super()
			this.panel_pt.hScrollBarSkin = ""
			this.view_pt.list_yx.itemRender = QPLB_Item_Two
			this.view_pt.list_yx.renderHandler = new Handler(this, this.renderHandlerQPYX);
			this.view_pt.img_bz.visible = false;
		}

		set dataSource(v) {
			if (!v) return;
			this.view_pt.list_yx.dataSource = v;
			this.view_pt.list_yx.repeatX = Math.ceil(this.view_pt.list_yx.dataSource.length / 2)
			this.view_pt.list_yx.width = 225 * this.view_pt.list_yx.repeatX;
			this._selfWidthList = 23 + 332 + 5 + this.view_pt.list_yx.width;
			this._selfWidth = 23 + 332 + 5;
			this.view_pt.list_yx.visible = false;

			this.width = this._selfWidth;
			this.view_pt.width = this.width;
			this.view_pt.btn_box.on(LEvent.CLICK, this, this.onBtnClick);
		}

		private renderHandlerQPYX(cell: QPLB_Item_Two, index: number): void {
			cell.setAlpha = 0;
			cell.setData(this._page, this._mainView, index, this._game, this._type)
		}

		private onBtnClick(): void {
			if (this._mainView.isMoveAni) return;
			if (this._type == ApiMgr.TYPE_QP_NONE) return;
			this.view_pt.btn_box.mouseEnabled = false
			this._mainView.isShow = !this._mainView.isShow;
			if (this._mainView.isShow) {
				this.width = this._selfWidthList;
				this.view_pt.width = this.width;
				this.view_pt.list_yx.visible = true;
				this.itemTwoAni()
				this.view_pt.img_bz.visible = true;
			} else {
				this.width = this._selfWidth;
				this.view_pt.width = this.width;
				this.itemTwoAni()
				this.view_pt.img_bz.visible = false;
			}
			this._mainView.onBtnClick(this.index);
		}

		private itemTwoAni(): void {
			if (this._mainView.isShow) {
				//做个动画
				let i = 0
				this.view_pt.list_yx.cells.forEach(element => {
					this._mainView.isMoveAni = true
					let cell = element as QPLB_Item_Two;
					cell.x += 200;
					Laya.timer.once(100, this, () => {
						Laya.Tween.to(cell, { setAlpha: 1, x: cell.x - 200 }, 500, null, Handler.create(this, () => {
							this._mainView.isMoveAni = false
						}));
					});
					i++;
					cell.mouseEnabled = true;
					// 波浪
					let scale: number = Math.random() > 0.5 ? 1.05 : 0.95;
					Laya.Tween.from(cell, { scaleX: scale, scaleY: scale }, 800, Laya.Ease.backInOut, Handler.create(this, () => {
						this._mainView.isMoveAni = false
					}));
				})

			} else {
				let curListX = this.view_pt.list_yx.x;
				this._mainView.isMoveAni = true
				Laya.Tween.to(this.view_pt.list_yx, { alpha: 0, x: 1280 }, 500, null, Handler.create(this, () => {
					this.view_pt.list_yx.x = curListX;
					this.view_pt.list_yx.alpha = 1;
					this.view_pt.list_yx.visible = false;
					this.view_pt.btn_box.mouseEnabled = true;
					this._mainView.isMoveAni = false
				}));
			}
		}

		update(): void {
			if (this._mainView) {
				if (this._mainView.isMoveAni) {
					this.view_pt.btn_box.mouseEnabled = false
					this.panel_pt.hScrollBar.touchScrollEnable = false
				} else {
					this.view_pt.btn_box.mouseEnabled = true
					this.panel_pt.hScrollBar.touchScrollEnable = true
				}
			}
		}

		setData(page: any, mainView: ApiListPT, index: number, game: Game): void {
			this.index = index;
			this._page = page;
			this._mainView = mainView;
			this._game = game;
			this.updateUI();
		}

		private updateUI(): void {
			let strSkin = "";
			if (this.index == ApiMgr.TYPE_QP_AE) {
				strSkin = DatingPath.sk_dating + "QP/QP_ae.png";
				this._type = ApiMgr.TYPE_QP_AE;
			} else if (this.index == ApiMgr.TYPE_QP_KY) {
				strSkin = DatingPath.sk_dating + "QP/QP_ky.png";
				this._type = ApiMgr.TYPE_QP_KY;
			} else if (this.index == ApiMgr.TYPE_QP_NONE) {
				strSkin = DatingPath.sk_dating + "QP/QP_qd.png";
				this._type = ApiMgr.TYPE_QP_NONE;
			}
			this.view_pt.img_pt.skin = strSkin;
		}
	}

	class QPLB_Item_Two extends ui.ajqp.dating.component.Hud_T_APIUI {
		public index: number;
		private _page: any;
		private _mainView: ApiListPT;
		private _game: Game;
		private _data: any;
		private _type: number;
		constructor() {
			super();
			this.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		set dataSource(v) {

			this._data = v;
		}

		set setAlpha(v: number) {
			this.alpha = v;
		}
		get setAlpha(): number {
			return this.alpha;
		}

		setData(page: any, mainView: ApiListPT, index: number, game: Game, type: number): void {
			this.index = index;
			this._mainView = mainView;
			this._game = game;
			this._page = page;
			this._type = type;
			let strSkin = ""
			if (this._type == ApiMgr.TYPE_QP_KY) {
				strSkin = DatingPath.sk_dating + "KY/KY_" + this._data.strName + ".png";
			} else if (this._type == ApiMgr.TYPE_QP_AE) {
				let gamestr = this._data.replace("r_", "r");
				strSkin = DatingPath.sk_dating + "DZ_" + gamestr + ".png";
			}
			this.img.skin = strSkin;
		}

		private onMouseHandle() {
			if (this._type == ApiMgr.TYPE_QP_KY) {
				this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_KYQP, this._data.kindID.toString())
			} else if (this._type == ApiMgr.TYPE_QP_AE) {
				if (!this._data) return;
				this._game.uiRoot.btnTween(this.btn_box, this, () => {
					let data = this._data;
					if (LoadingMgr.ins.isLoaded(data)) {
						JsLoader.ins.startLoad(data, false, Handler.create(this, (assets) => {
							this.openPage(data);
						}))
					} else {
						JsLoader.ins.startLoad(data, true);
						this._game.showTips(StringU.substitute("{0}已加入更新队列", PageDef.getNameById(data)));
					}
				});
			}
		}

		private openPage(data) {
			let pageDef = getPageDef(data);
			//調試模式
			let CLOSE_LIST = isDebug ? [] : [];
			if (pageDef["__enterMapLv"]) {
				this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
				this._page.saveListStatus();
			}
			else if (CLOSE_LIST.indexOf(data) == -1) {
				this._page.saveListStatus();
				this._game.uiRoot.HUD.open(data + 1, (page: Page) => {
					this._game.uiRoot.HUD.closeAll([data + 1]);
				}, (page: Page) => {
					// 场次返回大厅回调
					if (this._game.sceneObjectMgr.mainPlayer && !this._game.sceneGame.inScene) {
						this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD, () => {
							this._game.uiRoot.HUD.closeAll([DatingPageDef.PAGE_HUD])
						}, null, 0);
					}
				});
			} else {
				this._game.showTips("开发中,敬请期待!");
			}
		}
	}
}