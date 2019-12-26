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

        //AE棋牌
        public static TYPE_QP_AE: number = 0;
        //开元棋牌
        public static TYPE_QP_KY: number = 1;
        //敬请期待
        public static TYPE_QP_NONE: number = 2;

        //是否处于api中
        public isApi: boolean = false;
        private _iframe: any;
        constructor(game: Game) {
            super(game)
            this._delta = 500;
        }

        init() {
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
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
                }
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
        }
    }
}