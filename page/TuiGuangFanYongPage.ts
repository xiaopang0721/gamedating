/**
* name 推广返佣
*/
module gamedating.page {
    export class TuiGuangFanYongPage extends game.gui.base.Page {
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
        private _viewUI: ui.ajqp.dating.TuiGuang_FanUI;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._asset = [
            ];
            this._isNeedBlack = true;
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView("dating.TuiGuang_FanUI");
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.list_title.hScrollBarSkin = "";
            this._viewUI.list_title.scrollBar.changeHandler = new Handler(this, this.changeHandler_list_tab);
            this._viewUI.list_title.scrollBar.elasticDistance = 100;
            this._viewUI.list_title.itemRender = FanYongTitleItemRender;
            this._viewUI.list_title.renderHandler = new Handler(this, this.renderTabHandler);
            this._viewUI.list_title.dataSource = [TuiGuangFanYongPage.TYPE_QP, TuiGuangFanYongPage.TYPE_DZ, TuiGuangFanYongPage.TYPE_BY,
            TuiGuangFanYongPage.TYPE_SX, TuiGuangFanYongPage.TYPE_TY, TuiGuangFanYongPage.TYPE_DJ];
            this._viewUI.list_title.selectHandler = new Handler(this, this.selectTitleTZHandler);
            this._viewUI.list_title.selectedIndex = 0;

            this._viewUI.list_dl.vScrollBarSkin = "";
            this._viewUI.list_dl.scrollBar.elasticDistance = 100;
            this._viewUI.list_dl.renderHandler = new Handler(this, this.renderHandler);
        }

        private renderHandler(cell: ui.ajqp.dating.component.TuiGuang_DaiLiUI, index: number) {
            cell.img_bg;
            cell.lb_jb;
            cell.lb_yj;
            cell.lb_ed;
        }

        private changeHandler_list_tab(e?: LEvent): void {
            DisplayU.onScrollChange(this._viewUI.list_title, DisplayU.MASK_TYPE_NORMAL, DisplayU.SLIDE_V);
        }

        private renderTabHandler(cell: FanYongTitleItemRender, index: number): void {
            cell.setData(this._game, index, this._viewUI.list_title.selectedIndex);
        }

        private selectTitleTZHandler(index: number) {
            this._viewUI.list_title.selectedIndex = index;
            switch (index) {
                case TuiGuangFanYongPage.TYPE_QP - 1:
                    break
                case TuiGuangFanYongPage.TYPE_DZ - 1:
                    break
                case TuiGuangFanYongPage.TYPE_BY - 1:
                    break
                case TuiGuangFanYongPage.TYPE_SX - 1:
                    break
                case TuiGuangFanYongPage.TYPE_TY - 1:
                    break
                case TuiGuangFanYongPage.TYPE_DJ - 1:
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
            if (this._viewUI) {
                DisplayU.onScrollChange(this._viewUI.list_title, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);
            }
            super.close();
        }
    }

    class FanYongTitleItemRender extends ui.ajqp.dating.component.TuiGuang_FanYongUI {
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
            if (this._data == TuiGuangFanYongPage.TYPE_QP) {
                this.lb_name.text = "棋牌代理";
            }
            else if (this._data == TuiGuangFanYongPage.TYPE_DZ) {
                this.lb_name.text = "电子代理";
            }
            else if (this._data == TuiGuangFanYongPage.TYPE_BY) {
                this.lb_name.text = "捕鱼代理";
            }
            else if (this._data == TuiGuangFanYongPage.TYPE_SX) {
                this.lb_name.text = "视讯代理";
            }
            else if (this._data == TuiGuangFanYongPage.TYPE_TY) {
                this.lb_name.text = "体育代理";
            }
            else if (this._data == TuiGuangFanYongPage.TYPE_DJ) {
                this.lb_name.text = "电竞代理";
            }
        }
    }
}