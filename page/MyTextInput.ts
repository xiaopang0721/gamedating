/**
* 输入文本组件
*/
module gamedating.page {
	export class MyTextInput extends ui.ajqp.dating.component.TextInputUI {
		static readonly TYPE_INPUT_NUMBER = 1; //纯数字类型
		static readonly TYPE_INPUT_ENGLISH = 2; //英文类型
		static readonly TYPE_INPUT_NUMBER_WITH_POINT = 3; //数字有小数点类型

		private _game: Game;
		private _prompt: string;//提示符
		private _maxChars: number;//最大字符数
		private _password: string;//真实密码
		private _isPassword: boolean;//是否密码类型
		private _inputType: number;//文本类型
		private _onUpdate: Handler;//输入更新回调
		private _maxValue: number;//文本类型
		private _isMobileNum: boolean;//是否是手机号

		constructor() {
			super();
		}

		get maxChars() {
			return this._maxChars;
		}

		get password() {
			return this._password;
		}

		set password(v) {
			this._password = v;
		}

		get isPassword() {
			return this._isPassword;
		}

		get inputType() {
			return this._inputType;
		}

		set setPrompt(value: string) {
			this._prompt = value;
			this.initInput();
		}

		get maxValue() {
			return this._maxValue;
		}
		set maxValue(value) {
			this._maxValue = value;
		}

		/**
		* 
		* @param promptColor 提示符颜色
		* @param promptText 提示符内容
		* @param inputColor 文本颜色
		* @param fontSize 字体大小
		* @param maxChars 最大字符数
		* @param inputType 文本类型
		* @param isPassword 是否显示为密码字符
		*/
		settext(game: Game, promptColor: string, promptText: string, inputColor: string, fontSize: number, maxChars: number, inputType: any, isPassword?: boolean, onUpdate?: Handler, isMobileNum: boolean = false) {
			this.prompt.color = promptColor;
			this.prompt.text = promptText;
			this.prompt.fontSize = fontSize;
			this._prompt = promptText;

			this.input.color = inputColor;
			this.input.fontSize = fontSize;

			this._maxChars = maxChars;
			if (inputType instanceof Number) {
				inputType = inputType;
			} else if (inputType instanceof Array) {
				this._maxValue = inputType[1]
				inputType = inputType[0]
			}
			this._inputType = inputType;
			this._isPassword = isPassword;
			this._isMobileNum = isMobileNum;
			this._game = game;
			this._onUpdate = onUpdate;
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
			DatingGame.ins.jianPanMgr.on(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onInputChange);

			this.initInput();
		}

		setText_0(value: string): void {
			this.input.text = value;
			this.prompt.text = "";
		}

		private initInput() {
			if (!this.input.text) {
				this.prompt.text = this._prompt;
				if (this._isPassword) {
					this._password = "";
				}
			} else {
				this.prompt.text = "";
				if (this._isPassword) {
					this._password = this.input.text;
					let keyStr: string = "";
					for (let i = 0; i < this.input.text.length; i++) {
						keyStr += "●"
					}
					this.input.text = keyStr;
				}
			}
		}

		private onInputChange() {
			if (!this.input.text) {
				this.prompt.text = this._prompt;
			}
		}

		private onUpdateInput() {
			if (this != DatingGame.ins.jianPanMgr.inputTextUI) {
				return;
			}
			if (!DatingGame.ins.jianPanMgr.inputTxt) {
				this.prompt.text = this._prompt;
				this.input.text = DatingGame.ins.jianPanMgr.inputTxt;
				this._password = DatingGame.ins.jianPanMgr.inputTxt;
			} else {
				this.prompt.text = "";
				if (this.isPassword) {//是否密码类型
					this._password = DatingGame.ins.jianPanMgr.inputTxt;
					let keyStr: string = "";
					for (let i = 0; i < DatingGame.ins.jianPanMgr.inputTxt.length; i++) {
						keyStr += "●"
					}
					this.input.text = keyStr;
				} else if (this._isMobileNum) {
					//手机号类型 3+4+4
					let strText: string = DatingGame.ins.jianPanMgr.inputTxt;
					let strLength: number = strText.length;
					if (strLength >= 3 && strText.indexOf(" ") == -1) {
						//往第三个加入空格以及第8位加入空格
						strText = addSpaceInPointPos(3, strText);
						if (strLength >= 8) {
							strText = addSpaceInPointPos(8, strText);
						}
					}
					this.input.text = strText;
				}
				else {
					this.input.text = DatingGame.ins.jianPanMgr.inputTxt;
				}
			}
			this._onUpdate && this._onUpdate.run();
		}

		public showPassword(bool: boolean) {
			if (this.isPassword) {//是否密码类型
				this.input.text = this._password;
			} else {
				this._password = this.input.text;
				let keyStr: string = "";
				for (let i = 0; i < this.input.text.length; i++) {
					keyStr += "●"
				}
				this.input.text = keyStr;
			}
			this._isPassword = bool;
		}

		public clearInput() {
			this.input.text = "";
			this._password = "";
			this.prompt.text = this._prompt;
		}

		public destroy(): void {
			if (this._game) {
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE, this, this.onUpdateInput);
				DatingGame.ins.jianPanMgr.off(JianPanMgr.EVENT_CHANGE_TYPE, this, this.onInputChange);
				this._onUpdate = null;
			}
			super.destroy();
		}
	}
}