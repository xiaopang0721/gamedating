/**
* API管理器
*/
module gamedating.managers {
    export class ApiMgr extends gamecomponent.managers.BaseMgr {
        //热门
        public static TYPE_HOT: number = 1;
        //棋牌
        public static TYPE_QP: number = 2;
        //捕鱼游戏
        public static TYPE_BY: number = 3;
        //电子游艺
        public static TYPE_DZYY: number = 4;
        //真人视讯
        public static TYPE_ZRSX: number = 5;

        //敬请期待
        public static TYPE_QP_NONE: number = 2;

        public static PTNAME: Array<any> = [
            "AE棋牌",
            "开元棋牌",
            "JDB电子",
            "AG视讯",
        ]

        //是否处于api中
        public isApi: boolean = false;
        private _iframe: any;
        constructor(game: Game) {
            super(game)
            this._delta = 500;
        }

        init() {
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.updateTotalXMData);
        }

        //api相关返回
        private onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_API) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_API_API_LOGIN_GAME_RESULT:
                        let json_data = JSON.parse(msg.data);
                        this._game.uiRoot.general.close(PageDef.PAGE_WAITEFFECT)
                        if (json_data) {
                            let json_rep;
                            let info
                            let url;
                            if (json_data.type == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) {
                                json_rep = JSON.parse(json_data.rep);
                                if (!json_rep.info) return;
                                info = JSON.parse(json_rep.info);
                                //自定义拼接
                                url = info.d.url + "&backUrl=about:blank&jumpType=2";
                            } else if (json_data.type == Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) {
                                json_rep = JSON.parse(json_data.rep);
                                if (!json_rep.info) return;
                                info = JSON.parse(json_rep.info);
                                url = info.path
                            } else if (json_data.type == Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) {
                                json_rep = JSON.parse(json_data.rep);
                                if (!json_rep.url) return;
                                url = json_rep.url
                            }
                            this._game.datingGame.apiMgr.isApi = true;
                            this._game.uiRoot.showIframe(url, 0, 0, Laya.stage.width, Laya.stage.height, json_data.type);
                        }
                        break
                    case Operation_Fields.OPRATE_API_API_ADD_SCORE_RESULT:
                        msg.data;
                        break
                    case Operation_Fields.OPRATE_API_API_SUB_SCORE_RESULT:
                        msg.data;
                        break
                    case Operation_Fields.OPRATE_API_API_GET_RECODE_RESULT:
                        msg.data;
                        break
                    case Operation_Fields.OPRATE_API_API_LOGIN_FAIL_RESULT:
                        //api登陆失败
                        this._game.showTips("连接对方平台超时，请稍后重试");
                        this._game.uiRoot.general.close(PageDef.PAGE_WAITEFFECT);
                        break
                }
            }
        }

        private _totlaXMData: any
        private updateTotalXMData(): void {
            this._totlaXMData = [];
            this._totlaXMData.push(this.changeArr(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEFS_C, Web_operation_fields.GAME_PLATFORM_TYPE_AEQP)));
            this._totlaXMData.push(this.changeArr(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEFS_C, Web_operation_fields.GAME_PLATFORM_TYPE_KYQP)));
            this._totlaXMData.push(this.changeArr(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEFS_C, Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP)));
            this._totlaXMData.push(this.changeArr(FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_GAMEFS_C, Web_operation_fields.GAME_PLATFORM_TYPE_AGQP)));
        }

        get totlaXMData(): void {
            if (!this._totlaXMData) {
                this.updateTotalXMData();
            }
            return this._totlaXMData;
        }

        private changeArr(curPtInfo): any {
            let arr = []
            for (let key in curPtInfo) {
                if (curPtInfo.hasOwnProperty(key)) {
                    let element = curPtInfo[key];
                    if (element) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        //根据当前vip等级获取对应平台的比例
        public getPTBL(pf_code): any {
            let curInfo = this.totlaXMData[pf_code - 1];
            let mainPlayer: PlayerData = this._game.sceneGame.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let vip_level: number = mainPlayer.playerInfo.vip_level;
            for (let i = 0; i < curInfo.length; i++) {
                let curData = curInfo[i];
                if (curData && curData.viplv == vip_level) {
                    return curData.fs_prec
                }
            }
            return 0;
        }

        public static GetSteSkinByPFCode(pfCode: number, strName: string): string {
            let strSkin = ""
            if (pfCode == Web_operation_fields.GAME_PLATFORM_TYPE_KYQP) {
                strSkin = DatingPath.sk_dating + "KY/KY_" + strName + ".png";
            } else if (pfCode == Web_operation_fields.GAME_PLATFORM_TYPE_AEQP) {
                strSkin = DatingPath.sk_dating + "DZ_" + strName.replace("r_", "r") + ".png";
            } else if (pfCode == Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP) {
                strSkin = DatingPath.sk_dating + 'JDB/JDB_' + strName + ".png";
            } else if (pfCode == Web_operation_fields.GAME_PLATFORM_TYPE_AGQP) {
                strSkin = DatingPath.sk_dating + "SX/SX_" + strName + ".png";
            }
            return strSkin;
        }

        public GoGameByPFCode(data: any, btn_box: any) {
            this._game.uiRoot.btnTween(btn_box, this, () => {
                switch (data.pfCode) {
                    case Web_operation_fields.GAME_PLATFORM_TYPE_AGQP:
                        this._game.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, (page: WaitEffectPage) => {
                            page && page.playAni()
                        })
                        data = "about:blank" + "&" + data.gameType;
                        this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_AGQP, data)
                        break
                    case Web_operation_fields.GAME_PLATFORM_TYPE_KYQP:
                        this._game.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, (page: WaitEffectPage) => {
                            page && page.playAni()
                        })
                        this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_KYQP, data.kindID.toString())
                        break
                    case Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP:
                        this._game.uiRoot.general.open(PageDef.PAGE_WAITEFFECT, (page: WaitEffectPage) => {
                            page && page.playAni()
                        })
                        data = data.gTYPE + "&" + data.mTYPE + "&" + "about:blank";
                        this._game.network.call_api_login_game(Web_operation_fields.GAME_PLATFORM_TYPE_JDBQP, data)
                        break
                    case Web_operation_fields.GAME_PLATFORM_TYPE_AEQP:
                        let gameid = data.gameid.replace("r_", "r").toString();
                        if (LoadingMgr.ins.isLoaded(gameid)) {
                            JsLoader.ins.startLoad(gameid, false, Handler.create(this, (assets) => {
                                this.openPage(gameid);
                            }))
                        } else {
                            JsLoader.ins.startLoad(gameid, true);
                            this._game.showTips(StringU.substitute("{0}已加入更新队列", PageDef.getNameById(gameid,Web_operation_fields.GAME_PLATFORM_TYPE_AEQP)));
                        }
                        break
                }
            })
        }

        private openPage(gameId: string) {
            //房卡类型打开创建房间界面
            if (gameId.indexOf("r") > -1) {
                if (gameId == "r" + "paodekuai") {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_PDK_CREATE_CARDROOM, (page: any) => {
                        page.game_id = gameId;
                        page.dataSource = WebConfig.hudgametype = DatingPageDef.TYPE_CARD;// 等于type
                    });
                } else {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CREATE_CARD_ROOM, (page: any) => {
                        page.game_id = gameId;
                        page.dataSource = WebConfig.hudgametype = DatingPageDef.TYPE_CARD;// 等于type
                    });
                }
                return;
            }
            //非房卡类型打开游戏场次界面
            let pageDef = getPageDef(gameId);
            //調試模式
            let CLOSE_LIST = isDebug ? [] : [];
            if (pageDef["__enterMapLv"]) {
                this._game.sceneObjectMgr.intoStory(pageDef.GAME_NAME, pageDef["__enterMapLv"], true);
            }
            else if (CLOSE_LIST.indexOf(gameId) == -1) {
                this._game.uiRoot.HUD.open(gameId + 1, (page: Page) => {
                    this._game.uiRoot.HUD.closeAll([gameId + 1]);
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

        update(diff: number) {

        }

        /**登陆游戏 */
        goToGameApi(): void {

        }
        /**上分 */
        addGameScoreApi(): void {

        }

        /**下分 */
        subGameScoreApi(): void {

        }

        /**退出游戏 */
        quitGameApi(): void {

        }

        /**获取游戏记录 */
        getGameRecordApi(): void {

        }
		/**
		 * 帧间隔心跳
		 */
        deltaUpdate() {

        }

        hasClear: boolean;
        clear(fource?: boolean) {
            if (fource) super.clear(fource)
            Laya.timer.clearAll(this);
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_FREE_STYLE_UPDATE, this, this.updateTotalXMData);
        }
    }
}