/**
* name 公告管理器
*/
module gamedating.managers {
	export class NoticesMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "NoticesMgr.changge";
		constructor(game: Game) {
			super(game)
			this._delta = 20000;
		}

		init() {
			this._game.sceneGame.network.addHanlder(Protocols.SMSG_SEND_NOTICES, this, this.onNoticesUpdate);
		}

		private onNoticesUpdate(code: number, s2c: any) {
			if (WebConfig.server_close) return;//更新期间拒收其他公告
			if (!s2c || !s2c.content || s2c.content.length > 100) return;
			if (this._notices.length > 100) {
				this._notices.length = 0;
			}
			this._notices[this._notices.length] = s2c.content;
			if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
				this.event(NoticesMgr.EVENT_CHANGE);
			} else {
				this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, (page: gamedating.page.GongGaoPage) => {
					page.setSpeed(this._notices.length);
				})
			}
		}

		/**
		 * 帧间隔心跳
		 */
		deltaUpdate() {
			if(!this._isLoop) return;
			this.onLoopNotice();
		}
		
		//客户端制造公告接口 停服公告专用
		private _isLoop: boolean = false;
		private _content: string = "";
		makeNotice(content) {
			this._isLoop = true;
			this._content = content;
			this._notices[this._notices.length] = this._content;
			if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
				this.event(NoticesMgr.EVENT_CHANGE);
			} else {
				this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, (page: gamedating.page.GongGaoPage) => {
					page.setSpeed(this._notices.length);
				})
			}
		}

		private onLoopNotice(): void {
			this._notices[this._notices.length] = this._content;
			if (this._game.uiRoot.top.isOpened(DatingPageDef.PAGE_GONGGAO)) {
				this.event(NoticesMgr.EVENT_CHANGE);
			} else {
				this._game.uiRoot.top.open(DatingPageDef.PAGE_GONGGAO, (page: gamedating.page.GongGaoPage) => {
					page.setSpeed(this._notices.length);
				})
			}
		}

		private _notices: string[] = [];
		getNotice() {
			if (this._notices.length > 0) {
				return this._notices.shift();
			}
			return null;
		}

		clear(fource?: boolean) {
			this._game.sceneGame.network.removeHanlder(Protocols.SMSG_SEND_NOTICES, this, this.onNoticesUpdate);
			Laya.timer.clearAll(this);
		}
	}
}