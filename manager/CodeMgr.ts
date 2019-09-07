/**
* name 
*/
module gamedatingnqp.managers {
	export class CodeMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CODE_CHANGE: string = "CodeMgr.change";
		static readonly GET_CODE_TYPE_LOGIN: number = 1;//手机登录验证码类型
		static readonly GET_CODE_TYPE_BIND: number = 2;//手机绑定验证码类型
		static readonly GET_CODE_TYPE_RESET: number = 3;//重置密码验证码类型

		private _type: number = 0;//获取的验证码类型
		private _mobile: string = "";//获取验证码的手机
		private _nextGetCodeTime: number = 0;//下次获取验证的时间
		constructor(game: Game) {
			super(game)
		}

		get type() {
			return this._type;
		}

		set type(v: number) {
			this._type = v;
		}

		get mobile() {
			return this._mobile;
		}

		set mobile(v: string) {
			this._mobile = v;
		}

		get nextGetCodeTime() {
			return this._nextGetCodeTime;
		}

		set nextGetCodeTime(v: number) {
			this._nextGetCodeTime = v;
		}

		clear(fource?: boolean) {
			if (fource) super.clear(fource);
		}
	}
}