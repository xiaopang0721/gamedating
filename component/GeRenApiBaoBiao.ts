/**
* name 个人信息api报表组件
*/
module gamedating.component {
    export class GeRenApiBaoBiao extends ui.ajqp.dating.component.GeRen_ApiUI {
        private _curPt: number;
        private _game: Game;
        private _data: any;
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
            this.list_title.dataSource = [Web_operation_fields.GAME_PLATFORM_TYPE_AEQP, Web_operation_fields.GAME_PLATFORM_TYPE_KYQP
                , Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, Web_operation_fields.GAME_PLATFORM_TYPE_AGQP];
            this.list_title.selectHandler = new Handler(this, this.selectTitleBBHandler);
            this.initDate();
            this.list_title.selectedIndex = 0;
            this.btn_select.on(LEvent.CLICK, this, this.onBtnClick);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
        }

        private onBtnClick(): void {
            this.menuTween(!this.box_btn.visible);
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
            this.updateUI();
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

        private onUpdateDataInfo(data?: any) {
            //如果是当天的话，取今天零点到当前时间，如果是别的，就去那天零点，到下一天的零点
            let isToday = Sync.getIsToday(this._selectTime, this._game.sceneGame.sync.serverTimeBys)
            let startTime;
            let endTime;
            if (isToday) {
                startTime = Sync.getDayZeroTime(this._selectTime);
                endTime = this._selectTime;
            } else {
                startTime = Sync.getDayZeroTime(this._selectTime);
                endTime = startTime + 24 * 60 * 60;
            }
            this._game.network.call_api_get_game_baobiao(startTime, endTime, this._curPt);
        }

        //更新界面
        private updateUI(): void {
            if (this._data.length > 0) {
                let isUpdate = false;
                for (let i = 0; i < this._data.length; i++) {
                    let cur_data = this._data[i]
                    for (let j = 0; j < 7; j++) {
                        if (cur_data.days == this["lb_" + j].text) {
                            if (cur_data.sy != 0) {
                                this["btn_day" + j].visible = true;
                            } else {
                                this["btn_day" + j].visible = false;
                            }
                        } else {
                            this["btn_day" + j].visible = false;
                        }
                    }
                    if (cur_data.days == this.lb_time.text) {
                        this._clipMoney.setText(cur_data.sy + cur_data.xm, true);
                        this.lb_yxtz.text = cur_data.dm;
                        this.lb_pc.text = cur_data.sy;
                        this.lb_fd.text = cur_data.xm;
                        isUpdate = true;
                    }
                }
                if (!isUpdate) {
                    this._clipMoney.setText(0, true);
                    this.lb_yxtz.text = '0';
                    this.lb_pc.text = '0';
                    this.lb_fd.text = '0';
                }
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
                case Web_operation_fields.GAME_PLATFORM_TYPE_AEQP - 1:
                    this._curPt = Web_operation_fields.GAME_PLATFORM_TYPE_AEQP
                    break
                case Web_operation_fields.GAME_PLATFORM_TYPE_KYQP - 1:
                    this._curPt = Web_operation_fields.GAME_PLATFORM_TYPE_KYQP
                    break
                case Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP - 1:
                    this._curPt = Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP
                    break
                case Web_operation_fields.GAME_PLATFORM_TYPE_AGQP - 1:
                    this._curPt = Web_operation_fields.GAME_PLATFORM_TYPE_AGQP
                    break
            }
            this.onUpdateDataInfo();
        }

        protected onSucessHandler(data: any) {
            if (data.code == Web_operation_fields.CLIENT_IRCODE_GETAPIGAMEBAOBIAO) {//报表返回
                if (data && data.success == 0) {
                    this._data = data.list;
                    this.updateUI();
                }
            }
        }

        public close(): void {
            DisplayU.onScrollChange(this.list_title, DisplayU.MASK_TYPE_NULL, DisplayU.SLIDE_V);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
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
            if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) {
                this.txt_name.text = "AE棋牌";
            }
            else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) {
                this.txt_name.text = "开元棋牌";
            }
            else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) {
                this.txt_name.text = "JDB电子";
            }
            else if (this._data == Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) {
                this.txt_name.text = "AG视讯";
            }
        }
    }
}