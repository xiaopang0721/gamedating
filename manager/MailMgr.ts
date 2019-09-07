/**
* name 邮件管理器
*/
module gamedatingnqp.managers {
	export class MailMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "MailMgr.changge"
		constructor(game: Game) {
			super(game)
			this._delta = 60000;
		}

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_MAILS) {
				if (data && data.success == 0) {
					if (data.msg) {
						this._mails = data.msg.list;
						this.event(MailMgr.EVENT_CHANGE)
					}
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_DELMAIL) {
				if (data && data.success == 0) {
					if(this._delFun != null)
					{
						this._delFun();
						this._delFun = null
					}
					if (this._mails) {
						for (let index = 0; index < this._mails.length; index++) {
							let maildata = this._mails[index];
							if (maildata && maildata.mail_orderid == this._del_id) {
								this._mails.splice(index, 1);
								this.event(MailMgr.EVENT_CHANGE)
								return;
							}
						}
					}
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_READMAIL) {
				if (data && data.success == 0) {
					this.checkNow = true;
				}
			}
		}

		private _del_id: number;
		private _delFun: Function;
		public delMail(id: number, fun?: Function) {
			this._del_id = id;
			this._delFun = fun;
			this._game.sceneGame.network.call_del_mail(id);
		}

		private _read_id: number;
		private _readFun: Function;
		public readMail(id: number, fun?: Function) {
			this._read_id = id;
			this._readFun = fun;
			this._game.sceneGame.network.call_read_mail(id);
		}

		private _mails: MailData[] = []
		public get mails() {
			return this._mails;
		}

		get isShowRed() {
			for (let index = 0; index < this._mails.length; index++) {
				let mail = this._mails[index];
				if (!mail.isread) return true;
			}
			return false;
		}


		update(diff: number) {
			if (!this.checkNow) {
				super.update(diff);
				return;
			}
			this.deltaUpdate();
			this.checkNow = false;
		}

		public checkNow: boolean = false;
		deltaUpdate() {
			this._game.sceneGame.network.call_get_mails();
		}

	}


	export interface MailData {
		mail_orderid: number;//id
		title: string;//标题
		context: string;//内容
		isread: number;//是否已读
		mail_time: number;//时间
		mail_from: string;//发件人
		mail_type: number;//类型
	}
}