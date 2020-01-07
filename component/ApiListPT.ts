/**
* API平台游戏list组件
*/
module gamedating.component {
	export class ApiListPT extends ui.ajqp.dating.component.List_QP_APIUI {
		private _game: Game;
		public page: any;
		public static KY_DATA =
		[{ kindID: 600, strName: "21dian", gameName: "21点", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 1960, strName: "bcbm", gameName: "奔驰宝马", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 910, strName: "bjl", gameName: "百家乐", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 930, strName: "brnn", gameName: "百人牛牛", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP },
		{ kindID: 610, strName: "ddz", gameName: "斗地主", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 620, strName: "dzpk", gameName: "德州扑克", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 720, strName: "ebg", gameName: "二八杠", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 740, strName: "ermj", gameName: "二人麻将", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }
			, { kindID: 1940, strName: "jsys", gameName: "金鲨银鲨", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 230, strName: "jszjh", gameName: "极速炸金花", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 890, strName: "kpqznn", gameName: "看牌抢庄牛牛", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 830, strName: "qznn", gameName: "抢庄牛牛", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }
			, { kindID: 730, strName: "qzpj", gameName: "抢庄牌九", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 860, strName: "sg", gameName: "三公", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 920, strName: "slwh", gameName: "森林舞会", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 630, strName: "sss", gameName: "十三水", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }
			, { kindID: 870, strName: "tbnn", gameName: "通比牛牛", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 1950, strName: "wrzjh", gameName: "万人炸金花", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 650, strName: "xlch", gameName: "血流成河", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }, { kindID: 900, strName: "yzlh", gameName: "押注龙虎", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }
			, { kindID: 220, strName: "zjh", gameName: "炸金花", pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_KYQP }]

		constructor(game: Game, page: any) {
			super();
			this._game = game;
			this.page = page;
			this.init();
		}

		layout(clientRealWidth: number): void {
			this.list_qp.width = clientRealWidth
			this.width = clientRealWidth;
			if (this.list_qp) {
				if (this.list_qp.dataSource) {
					let cells = this.list_qp.cells;
					for (let index = 0; index < cells.length; index++) {
						let element = cells[index] as QPLB_Item_One;
						element && element.layout(clientRealWidth);
					}
				}
			}
		}

		private init(): void {
			this.list_qp.hScrollBarSkin = ""
			this.list_qp.scrollBar.elasticDistance = 100
			this.list_qp.itemRender = QPLB_Item_One
			this.list_qp.renderHandler = new Handler(this, this.renderHandlerQP);
		}

		private _gameNoNeed: string[] = ["zoo", "shisanshui"];
		setData(): void {
			let ae_data = []
			for (let index = 0; index < WebConfig.gamelist.length; index++) {
				let element: string = WebConfig.gamelist[index];
				if (element.indexOf('r_') >= 0) continue;
				if (this._gameNoNeed.indexOf(element) != -1) continue;
				let obj = {
					pfCode: Web_operation_fields.GAME_PLATFORM_TYPE_AEQP,
					strName: element,
					gameid: element,
				}
				ae_data.push(obj)
			}
			let pt_data = [ae_data, ApiListPT.KY_DATA, []]
			this.list_qp.dataSource = pt_data;
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
			if (this.isShow) {
			} else {
				this.page.viewUI.btn_left.visible = false
				this.page.viewUI.btn_right.visible = false
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
						Laya.Tween.to(myCell, { x: 0 }, 300, null, Handler.create(this, () => {
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
							Laya.Tween.to(cell, { x: this._moveCellPos[i].x, alpha: 1 }, 300, null, Handler.create(this, () => {
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

		public close(): void {

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
		private _data: any;
		constructor() {
			super()
			this.panel_pt.hScrollBarSkin = ""
			this.panel_pt.hScrollBar.elasticDistance = 100;
			this.view_pt.list_yx.itemRender = QPLB_Item_Two
			this.view_pt.list_yx.renderHandler = new Handler(this, this.renderHandlerQPYX);
			this.view_pt.img_bz.visible = false;
		}

		layout(clientRealWidth: number): void {
			this.panel_pt.width = clientRealWidth;
		}

		private _listWidth: number = 0;
		set dataSource(v) {
			if (!v) return;
			this._data = v;
			this.view_pt.list_yx.dataSource = v;
			this.view_pt.list_yx.repeatX = Math.ceil(v.length / 2)
			this._listWidth = this.view_pt.list_yx.width = 225 * this.view_pt.list_yx.repeatX;
			let list_count = Math.ceil(v.length / this.view_pt.list_yx.repeatY);
			this._selfWidthList = 23 + 332 + 5 + this._listWidth;
			this._selfWidth = 23 + 332 + 5;
			this.view_pt.list_yx.visible = false;

			this.width = this._selfWidth;
			this.view_pt.width = this.width;
			this.panel_pt.hScrollBar.max = this._selfWidthList;
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
					cell.x += 1000;
					Laya.timer.once(100, this, () => {
						Laya.Tween.to(cell, { setAlpha: 1, x: cell.x - 1000 }, 300, null, Handler.create(this, () => {
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
				Laya.Tween.to(this.view_pt.list_yx, { alpha: 0, x: 1280 }, 300, null, Handler.create(this, () => {
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
					if (this._mainView.isShow) {
						this.panel_pt.hScrollBar.touchScrollEnable = true
						if (this.view_pt.list_yx.visible) {
							//列表显示中
							let cur_value = this.panel_pt.hScrollBar.value;
							let max_value = this.panel_pt.hScrollBar.max;
							let min_value = this.panel_pt.hScrollBar.min;
							this._page.viewUI.btn_left.visible = cur_value > min_value;
							this._page.viewUI.btn_right.visible = cur_value < max_value;
						}
					} else {
						this.panel_pt.hScrollBar.touchScrollEnable = false
					}
				}
				if (this.view_pt.list_yx) {
					if (this.view_pt.list_yx.dataSource) {
						let cells = this.view_pt.list_yx.cells;
						for (let index = 0; index < cells.length; index++) {
							let element = cells[index] as ApiRender;
							element.update();
						}
					}
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
			if (this.index == Web_operation_fields.GAME_PLATFORM_TYPE_AEQP - 1) {
				strSkin = DatingPath.sk_dating + "QP/QP_ae.png";
				this._type = Web_operation_fields.GAME_PLATFORM_TYPE_AEQP - 1;
			} else if (this.index == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP - 1) {
				strSkin = DatingPath.sk_dating + "QP/QP_ky.png";
				this._type = Web_operation_fields.GAME_PLATFORM_TYPE_KYQP - 1;
			} else {
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
		private _updateTip: ui.ajqp.dating.component.Effect_gxUI;
        private _loadingTip: gamedating.page.HudLoadingTip;
        private _waitingTip: ui.ajqp.dating.component.Effect_dengdaiUI;
		constructor() {
			super();
			this.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		set dataSource(v) {
			if (v) {
				this._data = v;
			}
		}

		setData(page: any, mainView: ApiListPT, index: number, game: Game, type: number): void {
			this.index = index;
			this._mainView = mainView;
			this._game = game;
			this._page = page;
			this._type = type;
			let strSkin = ApiMgr.GetSteSkinByPFCode(this._data.pfCode, this._data.strName);
			this.img.skin = strSkin;
		}

		private onMouseHandle() {
			this._game.datingGame.apiMgr.GoGameByPFCode(this._data, this.btn_box);
		}

		 //显示等待
        private showWait() {
            if (!this._waitingTip) {
                this._waitingTip = new ui.ajqp.dating.component.Effect_dengdaiUI();
                this._waitingTip.x = 170;
                this._waitingTip.y = 22;
                this.addChild(this._waitingTip);
            }
            this.clearUpdate();
        }

        //清理等待
        private clearWait() {
            if (this._waitingTip) {
                this._waitingTip.removeSelf();
                this._waitingTip.destroy();
                this._waitingTip = null;
            }
        }

        //显示更新
        private showUpdate() {
            if (this._waitingTip || this._loadingTip) return;
            if (!this._updateTip) {
                this._updateTip = new ui.ajqp.dating.component.Effect_gxUI();
                this._updateTip.x = 157;
                this._updateTip.y = -4;
                this.addChild(this._updateTip);
            }
        }

        //清理更新
        private clearUpdate() {
            if (this._updateTip) {
                this._updateTip.removeSelf();
                this._updateTip.destroy();
                this._updateTip = null;
            }
        }

        //显示进度
        private showProgress(value: number) {
            if (!this._loadingTip) {
                this._loadingTip = new gamedating.page.HudLoadingTip();
                this._loadingTip.x = 170;
                this._loadingTip.y = 20;
                this.addChild(this._loadingTip);
            }

            this._loadingTip.progress = value;
        }

        //清理进度
        private clearProgress() {
            if (this._loadingTip) {
                this._loadingTip.removeSelf();
                this._loadingTip.destroy();
                this._loadingTip = null;
            }
        }

        private getProgress(gameid: string) {
            return LoadingMgr.ins.getProgress(this._data.gameid) || JsLoader.ins.getProgress(this._data.gameid);
        }

        private _time: number = 60000;
        update() {
            if (!this._data) return;
            if (this._data.pfCode != Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) return
            if (this._time <= 0) {
                this._time = 60000;
            } else {
                this._time -= 100;
            }
            if (LoadingMgr.ins.isLoaded(this._data.gameid)) {
                this.clearUpdate();
                this.clearProgress();
                this.clearWait();
            } else {
                let progress = this.getProgress(this._data.gameid);
                if (progress > 0) {
                    this.showProgress(progress);
                    this.clearUpdate();
                    this.clearWait();
                }
                else {
                    if (JsLoader.ins.isWaitLoad(this._data.gameid)) {
                        this.showWait();
                        this.clearUpdate();
                        this.clearProgress();
                    } else {
                        this.showUpdate();
                        this.clearProgress();
                        this.clearWait();
                    }
                }
            }
        }

        set setAlpha(v: number) {
            this.alpha = v;
            if (this._updateTip) {
                this._updateTip.visible = v != 0;
            }
            if (this._loadingTip) {
                this._loadingTip.visible = v != 0;
            }
        }

        get setAlpha(): number {
            return this.alpha;
        }
	}
}