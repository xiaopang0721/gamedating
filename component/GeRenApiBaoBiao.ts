/**
* name 个人信息api报表组件
*/
module gamedating.component {
    export class GeRenApiBaoBiao extends ui.ajqp.dating.component.GeRen_ApiUI {
        //棋牌
        static readonly TYPE_QP: number = 1;
        //电子
        static readonly TYPE_DZ: number = 2;
        //捕鱼
        static readonly TYPE_BY: number = 3;
        //视讯
        static readonly TYPE_SX: number = 4;
        //体育
        static readonly TYPE_TY: number = 5;
        //电竞
        static readonly TYPE_DJ: number = 6;
        private _game: Game;
        constructor(game: Game) {
            super()
            this._game = game;
            this.init();
        }

        // 页面初始化函数
        private _clipMoney: DatingClip;
        protected init(): void {
            if (!this._clipMoney) {
                this._clipMoney = new DatingClip(DatingClip.YUEBAO_FONT);
                this._clipMoney.centerX = this.clip_num.centerX;
                this._clipMoney.centerY = this.clip_num.centerY;
                this.clip_num.parent.addChild(this._clipMoney);
                this.clip_num.removeSelf();
            }
            this.list_title.hScrollBarSkin = "";
            this.list_title.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
            this.list_title.scrollBar.elasticDistance = 100;
            this.list_title.itemRender = TitleItemRender;
            this.list_title.renderHandler = new Handler(this, this.renderTabHandler);
            this.list_title.dataSource = [GeRenApiBaoBiao.TYPE_QP, GeRenApiBaoBiao.TYPE_DZ, GeRenApiBaoBiao.TYPE_BY,
            GeRenApiBaoBiao.TYPE_SX, GeRenApiBaoBiao.TYPE_TY, GeRenApiBaoBiao.TYPE_DJ];
            this.list_title.selectHandler = new Handler(this, this.selectTitleBBHandler);
            this.list_title.selectedIndex = 0;
            this.selectTitleBBHandler(0);
            this.initDate();
            this.btn_select.on(LEvent.CLICK, this, this.onBtnClick);
        }

        private onBtnClick(): void {
            this.menuTween(!this.box_btn.visible);
        }

        //日期切换
        private onUpdateDayInfo() {
            this._clipMoney.setText(0, true);
        }

        private initColor(): void {
            this._selectColor = this.lb_0.color;
            this._unSelectColor = this.lb_time.color;
        }

        private _selectColor: string;	//选中颜色
        private _unSelectColor: string;	//未选中颜色
        private _selectTime: number;
        private _timeList: number[] = []
        //当前选中的 时间位置
        private _timeSelectIndex: number;
        private initDate(): void {
            this.initColor();
            this.box_btn.visible = false;
            this._selectTime = this._game.sceneGame.sync.serverTimeBys;
            this._timeSelectIndex = 6;
            let curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
            for (let i = 0; i < 7; i++) {
                this._timeList[i] = this._selectTime - 86400 * (6 - i);
                let curTimeStr = Sync.getTimeStr3(this._timeList[i]);
                this["lb_" + i].text = curTimeStr;
                this["btn_select" + i].selected = curSelectedTimeStr == curTimeStr ? true : false;
                this["lb_" + i].color = (i == 6) ? this._selectColor : this._unSelectColor;
                this["btn_" + i].on(LEvent.CLICK, this, this.onMouseHandle, [i]);
            }
            this.lb_time.text = curSelectedTimeStr;
        }

        private _lastIndex: number;
        private onMouseHandle(index: number, e: LEvent) {
            if (index == this._timeSelectIndex) return;
            this._lastIndex = 0;
            this._timeSelectIndex = index;
            this._selectTime = this._timeList[index];//选择的时间
            let curSelectedTimeStr = Sync.getTimeStr3(this._selectTime);
            this.lb_time.text = curSelectedTimeStr;
            for (let i = 0; i < 7; i++) {
                let curTimeStr = this["lb_" + i].text;
                this["btn_select" + i].selected = curSelectedTimeStr == curTimeStr ? true : false;
                this["lb_" + i].color = (i == index) ? this._selectColor : this._unSelectColor;
            }
            this.menuTween(false);
            this.onUpdateDataInfo();
        }

        //菜单栏
        private menuTween(isOpen: boolean) {
            if (isOpen) {
                this.box_btn.visible = true;
                this.btn_jiantou.rotation = this.box_btn.visible ? 0 : -180;
                this.box_btn.scale(0.2, 0.2);
                this.box_btn.alpha = 0;
                Laya.Tween.to(this.box_btn, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this.box_btn, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this.box_btn.visible = false;
                    this.btn_jiantou.rotation = this.box_btn.visible ? 0 : -180;
                }));
            }
        }

        private _isInitDaysUI: boolean = false;
        private onUpdateDataInfo(data?: any) {
            let value = DatingGame.ins.baobiaoMgr.getDataInfo(this._timeSelectIndex);
            let count: number = 0;
            //日期图标显隐,不必重复做
            if (DatingGame.ins.baobiaoMgr.timeTotalNumArr) {
                if (!this._isInitDaysUI) {
                    this._isInitDaysUI = true;
                    for (let i = 0; i < 7; i++) {
                        let curTimeStr = Sync.getTimeStr3(this._timeList[i]);
                        this["btn_day" + i].visible = DatingGame.ins.baobiaoMgr.isCurDayHaveNum(curTimeStr) ? true : false;
                    }
                }
            }

            for (let key in value) {
                if (value[key] && value[key].length > 0)
                    count++;
            }
        }

        private changeHandler_list_tab(e?: LEvent): void {
            DisplayU.onScrollChange(this.list_title, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
        }

        private renderTabHandler(cell: TitleItemRender, index: number): void {
            cell.setData(this._game, index, this.list_title.selectedIndex);
        }

        private selectTitleBBHandler(index: number) {
            this.list_title.selectedIndex = index;
            switch (index) {
                case GeRenApiBaoBiao.TYPE_QP - 1:
                    break
                case GeRenApiBaoBiao.TYPE_DZ - 1:
                    break
                case GeRenApiBaoBiao.TYPE_BY - 1:
                    break
                case GeRenApiBaoBiao.TYPE_SX - 1:
                    break
                case GeRenApiBaoBiao.TYPE_TY - 1:
                    break
                case GeRenApiBaoBiao.TYPE_DJ - 1:
                    break
            }
        }

        protected onSucessHandler(data: any) {
            if (data.code == Web_operation_fields.CLIENT_IRCODE_PLAYERBIND) {//手机绑定成功
                if (data && data.success == 0) {
                    if (data.msg.type == Web_operation_fields.ACCOUNT_TYPE_USERNAME) {
                        this.close();
                    }
                }
            }
        }

        public close(): void {
            DisplayU.onScrollChange(this.list_title, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);
        }
    }

    class TitleItemRender extends ui.ajqp.dating.component.GeRen_BaoBiaoUI {
        private _game: Game;
        public index: number;
        private _data: any;
		/**
			* 
			* @param game 
			* @param data 
			*/
        setData(game: Game, index: number, selectIndex: number) {
            this.visible = true;
            this.index = index;
            this.clip_bg.index = this.index == selectIndex ? 1 : 0;
        }

        set dataSource(v: any) {
            this._data = v;
            if (this._data == GeRenApiBaoBiao.TYPE_QP) {
                this.txt_name.text = "棋牌报表";
            }
            else if (this._data == GeRenApiBaoBiao.TYPE_DZ) {
                this.txt_name.text = "电子报表";
            }
            else if (this._data == GeRenApiBaoBiao.TYPE_BY) {
                this.txt_name.text = "捕鱼报表";
            }
            else if (this._data == GeRenApiBaoBiao.TYPE_SX) {
                this.txt_name.text = "视讯报表";
            }
            else if (this._data == GeRenApiBaoBiao.TYPE_TY) {
                this.txt_name.text = "体育报表";
            }
            else if (this._data == GeRenApiBaoBiao.TYPE_DJ) {
                this.txt_name.text = "电竞报表";
            }
        }
    }
}