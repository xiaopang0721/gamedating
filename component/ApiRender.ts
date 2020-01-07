/**
* API游戏list入口组件
*/
module gamedating.component {
    export class ApiRender extends ui.ajqp.dating.component.Hud_rm1UI {
        private _page: any;
        private _mainView; any;
        private _index: number;
        private _game: Game;
        private _data: any;
        private _updateTip: ui.ajqp.dating.component.Effect_gxUI;
        private _loadingTip: gamedating.page.HudLoadingTip;
        private _waitingTip: ui.ajqp.dating.component.Effect_dengdaiUI;
        constructor() {
            super()
        }
        set dataSource(v: any) {
            if (v) {
                this._data = v;
                let strSkin = ApiMgr.GetSteSkinByPFCode(this._data.pfCode, this._data.strName);
                this.img.skin = strSkin;
            }
        }


        setData(page: any, mainView: any, index: number, game: Game) {
            this._page = page;
            this._mainView = mainView;
            this._index = index;
            this._game = game;
            this.on(LEvent.CLICK, this, this.onBtnClick);
        }

        private onBtnClick(): void {
            this._game.datingGame.apiMgr.GoGameByPFCode(this._data, this.btn_box);
        }

        private openPage(gameid): void {
            let pageDef = getPageDef(gameid);
            this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
        }
        //显示等待
        private showWait() {
            if (!this._waitingTip) {
                this._waitingTip = new ui.ajqp.dating.component.Effect_dengdaiUI();
                this._waitingTip.x = 170;
                this._waitingTip.y = 33;
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
                this._updateTip.y = 8;
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
                this._loadingTip.y = 32;
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