/**
* name 个人信息api投注组件
*/
module gamedating.component {
    export class GeRenApiTouZhu extends ui.ajqp.dating.component.GeRen1_ApiUI {
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

        //平台商 AE,开元，JDB，AG
        static readonly TYPE_AE: number = 1;
        static readonly TYPE_KY: number = 2;
        static readonly TYPE_JDB: number = 3;
        static readonly TYPE_AG: number = 4;
        private _game: Game;
        constructor(game: Game) {
            super()
            this._game = game;
            this.init();
        }

        // 页面初始化函数
        protected init(): void {
            this.list_title.hScrollBarSkin = "";
            this.list_title.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
            this.list_title.scrollBar.elasticDistance = 100;
            this.list_title.itemRender = TitleItemRender;
            this.list_title.renderHandler = new Handler(this, this.renderTabHandler);
            this.list_title.dataSource = [GeRenApiTouZhu.TYPE_QP, GeRenApiTouZhu.TYPE_DZ, GeRenApiTouZhu.TYPE_BY,
            GeRenApiTouZhu.TYPE_SX, GeRenApiTouZhu.TYPE_TY, GeRenApiTouZhu.TYPE_DJ];
            this.list_title.selectHandler = new Handler(this, this.selectTitleTZHandler);
            this.list_title.selectedIndex = 0;
            this.selectTitleTZHandler(0);

            this.initDate();
            this.btn_select.on(LEvent.CLICK, this, this.onBtnClick);
            this.initPT();
            this.initMiddle();
        }

        //-----------------中间数据strat---------
        private initMiddle(): void {
            this.list_bb.vScrollBarSkin = "";
            this.list_bb.scrollBar.elasticDistance = 100;
            this.list_bb.renderHandler = new Handler(this, this.renderDataHandler);
        }

        private renderDataHandler(cell: ui.ajqp.dating.component.GeRen_TouZhuJLUI, index: number): void {
            cell.txt_time.text;
            cell.lb_zd.text;
            cell.lb_money.text;
            cell.lb_status.text;
        }

        //----------------中间数据end-----------

        //------------------日期start---------
        private onUpdateDayInfo() {

        }

        private onBtnClick(e: LEvent): void {
            switch (e.currentTarget) {
                case this.btn_select:
                    this.menuTween(!this.box_btn.visible, this.box_btn, this.btn_jiantou);
                    break
                case this.box_select:
                    this.menuTween(!this.box_pt.visible, this.box_pt, this.btn_jt);
                    break
            }
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
            this.menuTween(false, this.box_btn, this.btn_jiantou);
            this.onUpdateDayInfo();
        }

        //菜单栏
        private menuTween(isOpen: boolean, box: Box, btn_jt: Button, ) {
            if (isOpen) {
                box.visible = true;
                btn_jt.rotation = box.visible ? 0 : -180;
                box.scale(0.2, 0.2);
                box.alpha = 0;
                Laya.Tween.to(box, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(box, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    box.visible = false;
                    btn_jt.rotation = box.visible ? 0 : -180;
                }));
            }
        }
        //------------------日期end---------

        //----------------平台start---------------
        private initPT(): void {
            this.box_pt.visible = false;
            this.list_pt.itemRender = PTItemRender;
            this.list_pt.dataSource = [GeRenApiTouZhu.TYPE_AE, GeRenApiTouZhu.TYPE_KY, GeRenApiTouZhu.TYPE_JDB, GeRenApiTouZhu.TYPE_AG];
            this.list_pt.repeatY = this.list_pt.dataSource.length;
            this.list_pt.height = 40 * this.list_pt.repeatY;
            this.img_bg.height = this.list_pt.height + 20;
            this.box_pt.height = this.img_bg.height + 10;

            //计算位置
            this.box_pt.y = (this.height - this.box_select.height) - this.box_pt.height + this.box_pt.height / 2 + 15;

            this.box_select.on(LEvent.CLICK, this, this.onBtnClick)
            this.list_pt.selectHandler = new Handler(this, this.selectPTHandler);
            this.list_pt.renderHandler = new Handler(this, this.renderPTHandler);
        }

        private selectPTHandler(index: number): void {
            this.menuTween(!this.box_pt.visible, this.box_pt, this.btn_jt);
        }

        private renderPTHandler(cell: PTItemRender, index: number): void {
            cell.setData(this._game, index, this.list_pt.selectedIndex);
        }

        //----------------平台end---------------
        private changeHandler_list_tab(e?: LEvent): void {
            DisplayU.onScrollChange(this.list_title, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
        }

        private renderTabHandler(cell: TitleItemRender, index: number): void {
            cell.setData(this._game, index, this.list_title.selectedIndex);
        }

        private selectTitleTZHandler(index: number) {
            this.list_title.selectedIndex = index;
            switch (index) {
                case GeRenApiTouZhu.TYPE_QP - 1:
                    break
                case GeRenApiTouZhu.TYPE_DZ - 1:
                    break
                case GeRenApiTouZhu.TYPE_BY - 1:
                    break
                case GeRenApiTouZhu.TYPE_SX - 1:
                    break
                case GeRenApiTouZhu.TYPE_TY - 1:
                    break
                case GeRenApiTouZhu.TYPE_DJ - 1:
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

    class TitleItemRender extends ui.ajqp.dating.component.GeRen_TouZhuUI {
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
            if (this._data == GeRenApiTouZhu.TYPE_QP) {
                this.txt_name.text = "棋牌投注记录";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_DZ) {
                this.txt_name.text = "电子投注记录";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_BY) {
                this.txt_name.text = "捕鱼投注记录";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_SX) {
                this.txt_name.text = "视讯投注记录";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_TY) {
                this.txt_name.text = "体育投注记录";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_DJ) {
                this.txt_name.text = "电竞投注记录";
            }
        }
    }

    class PTItemRender extends ui.ajqp.dating.component.TZPTRenderUI {
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
            this.btn_select.selected = this.index == selectIndex ? true : false;
        }

        set dataSource(v: any) {
            this._data = v;
            if (this._data == GeRenApiTouZhu.TYPE_AE) {
                this.lb_name.text = "AE平台";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_KY) {
                this.lb_name.text = "开源平台";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_JDB) {
                this.lb_name.text = "JDB平台";
            }
            else if (this._data == GeRenApiTouZhu.TYPE_AG) {
                this.lb_name.text = "AG平台";
            }
        }
    }
}