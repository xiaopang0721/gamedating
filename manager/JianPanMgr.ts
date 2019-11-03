/**
* name 
*/
module gamedating.managers {
	export class JianPanMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_CHANGE: string = "JianPanMgr.changge";
		static readonly EVENT_CHANGE_TYPE: string = "JianPanMgr.changgeType";
		static readonly EVENT_CAPS_LOCK: string = "JianPanMgr.capsLock";
		static readonly EVENT_KEY_DOWN: string = "JianPanMgr.keyDown";
		static readonly EVENT_KEYBOARD_SHOW: string = "JianPanMgr.EVENT_KEYBOARD_SHOW";
		static readonly EVENT_KEYBOARD_HIDE: string = "JianPanMgr.EVENT_KEYBOARD_HIDE";

		static readonly TYPE_LOWER_CASE = 1; //小写字母
		static readonly TYPE_BLOCK_LETTER = 2; //大写字母
		private _code: JianPanCode;
		constructor(game: Game) {
			super(game)
			Laya.stage.on(LEvent.KEY_DOWN, this, this.onKeyDown);
			this._code = new JianPanCode();
		}

		private onKeyDown(e: LEvent): void {
			if (!this._inputTextUI) return;
			let inputStr = this.inputTxt;
			let oldInputStr = inputStr;
			if (e.keyCode == Laya.Keyboard.BACKSPACE) {//退格
				if (inputStr.length > 0) {
					let deleteStr = inputStr.slice(inputStr.length - 1);
					inputStr = inputStr.slice(0, -1)
					if (deleteStr == " ") inputStr = inputStr.slice(0, -1)
				}

			}
			else if (e.keyCode == Laya.Keyboard.SPACE) {//空格
				this.closeJianPan();//关闭键盘
			}
			else if (e.keyCode == Laya.Keyboard.CAPS_LOCK) {//大写锁定
				this.capsLock = !this._capsLock;
			}
			else {
				let code = this._capsLock ? this._code.KEYBOARD_BLOCK_LETTER : this._code.KEYBOARD_LOWER_CASE;
				if (code[e.keyCode] && inputStr.length < this._inputTextUI.maxChars) {
					inputStr += code[e.keyCode];
				}
			}
			let match;
			let type = this._inputTextUI.inputType;
			if (type == MyTextInput.TYPE_INPUT_NUMBER) {
				match = inputStr.match(/[^0-9]/);
				if (match && match.length != 0)
					return;
				if (parseFloat(inputStr) > this._inputTextUI.maxValue)
					inputStr = Math.floor(this._inputTextUI.maxValue).toString();
			}
			if (type == MyTextInput.TYPE_INPUT_NUMBER_WITH_POINT) {
				let pm = inputStr.match(/[\.]+/g);
				match = inputStr.match(/[^0-9\.]/);
				if (inputStr.indexOf('.') == 0 || pm && pm.length > 1 || match && match.length != 0)
					return;
				if (pm && pm.length > 0 && inputStr.split('.')[1].length > 2)
					return;
				if (parseFloat(inputStr) > this._inputTextUI.maxValue)
					inputStr = this._inputTextUI.maxValue.toString();
			}
			if (type == MyTextInput.TYPE_INPUT_ENGLISH) {
				match = inputStr.match(/[^A-Za-z0-9]/);
				if (match && match.length != 0)
					return;
			}
			this.inputTxt = inputStr;
			this.event(JianPanMgr.EVENT_KEY_DOWN);
		}

		//是否大写锁定
		private _capsLock: boolean = false;
		get capsLock() {
			return this._capsLock;
		}

		set capsLock(b) {
			this._capsLock = b;
			this.event(JianPanMgr.EVENT_CAPS_LOCK);
		}

		private _inputTxt: string = "";//当前选中的文本框内容
		get inputTxt() {
			return this._inputTxt;
		}

		set inputTxt(v) {
			this._inputTxt = v;
			this.event(JianPanMgr.EVENT_CHANGE);
		}

		private _inputTextUI: MyTextInput;//当前选中的文本框
		get inputTextUI() {
			return this._inputTextUI;
		}

		set inputTextUI(view) {
			if (view.isPassword) {
				this._inputTxt = view.password;
			} else {
				this._inputTxt = view.input.text;
			}
			this.event(JianPanMgr.EVENT_CHANGE_TYPE, view.inputType);//键盘类型变化
			if (view && !view.input.text) view.prompt.text = "";
			this._inputTextUI = view;
		}

		private _pageUI: any;//当前选中的文本框所属page
		get pageUI() {
			return this._pageUI;
		}

		set pageUI(viewUI) {
			this._pageUI = viewUI;
		}

		openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
			DatingGame.ins.jianPanMgr.inputTextUI = textUI;
			if (!Browser.onPC || WebConfig.isPopJianPan) {
				DatingGame.ins.jianPanMgr.pageUI = viewUI;
				DatingGame.ins.jianPanMgr.pageUI.box.centerY = centerY;
				this._game.uiRoot.top.open(DatingPageDef.PAGE_JIANPAN, (page) => {
					page.dataSource = textUI.inputType;
				}, () => {
					if (DatingGame.ins.jianPanMgr.pageUI && DatingGame.ins.jianPanMgr.pageUI.box && DatingGame.ins.jianPanMgr.pageUI.box.centerY) {
						DatingGame.ins.jianPanMgr.pageUI.box.centerY = 20;
					}
				});
			}
		}

		closeJianPan() {
			this._game.uiRoot.top.close(DatingPageDef.PAGE_JIANPAN);
			this._pageUI = null;
		}

		clear(fource?: boolean) {
			this._game.uiRoot.top.close(DatingPageDef.PAGE_JIANPAN);
			this._game.uiRoot.general.close(DatingPageDef.PAGE_BINDPHONE);
			if (fource) super.clear(fource);
			Laya.stage.off(LEvent.KEY_DOWN, this, this.onKeyDown);
			this._inputTxt = "";
			this._inputTextUI = null;
		}

		get LOWER_CASE() {
			return this._code.LOWER_CASE;
		}

		get BLOCK_LETTER() {
			return this._code.BLOCK_LETTER;
		}

	}

	class JianPanCode {
		private readonly KEYBOARD_0 = "0";
		private readonly KEYBOARD_1 = "1";
		private readonly KEYBOARD_2 = "2";
		private readonly KEYBOARD_3 = "3";
		private readonly KEYBOARD_4 = "4";
		private readonly KEYBOARD_5 = "5";
		private readonly KEYBOARD_6 = "6";
		private readonly KEYBOARD_7 = "7";
		private readonly KEYBOARD_8 = "8";
		private readonly KEYBOARD_9 = "9";
		private readonly KEYBOARD_point = ".";

		private readonly KEYBOARD_a = "a";
		private readonly KEYBOARD_b = "b";
		private readonly KEYBOARD_c = "c";
		private readonly KEYBOARD_d = "d";
		private readonly KEYBOARD_e = "e";
		private readonly KEYBOARD_f = "f";
		private readonly KEYBOARD_g = "g";
		private readonly KEYBOARD_h = "h";
		private readonly KEYBOARD_i = "i";
		private readonly KEYBOARD_j = "j";
		private readonly KEYBOARD_k = "k";
		private readonly KEYBOARD_l = "l";
		private readonly KEYBOARD_m = "m";
		private readonly KEYBOARD_n = "n";
		private readonly KEYBOARD_o = "o";
		private readonly KEYBOARD_p = "p";
		private readonly KEYBOARD_q = "q";
		private readonly KEYBOARD_r = "r";
		private readonly KEYBOARD_s = "s";
		private readonly KEYBOARD_t = "t";
		private readonly KEYBOARD_u = "u";
		private readonly KEYBOARD_v = "v";
		private readonly KEYBOARD_w = "w";
		private readonly KEYBOARD_x = "x";
		private readonly KEYBOARD_y = "y";
		private readonly KEYBOARD_z = "z";

		private readonly KEYBOARD_A = "A";
		private readonly KEYBOARD_B = "B";
		private readonly KEYBOARD_C = "C";
		private readonly KEYBOARD_D = "D";
		private readonly KEYBOARD_E = "E";
		private readonly KEYBOARD_F = "F";
		private readonly KEYBOARD_G = "G";
		private readonly KEYBOARD_H = "H";
		private readonly KEYBOARD_I = "I";
		private readonly KEYBOARD_J = "J";
		private readonly KEYBOARD_K = "K";
		private readonly KEYBOARD_L = "L";
		private readonly KEYBOARD_M = "M";
		private readonly KEYBOARD_N = "N";
		private readonly KEYBOARD_O = "O";
		private readonly KEYBOARD_P = "P";
		private readonly KEYBOARD_Q = "Q";
		private readonly KEYBOARD_R = "R";
		private readonly KEYBOARD_S = "S";
		private readonly KEYBOARD_T = "T";
		private readonly KEYBOARD_U = "U";
		private readonly KEYBOARD_V = "V";
		private readonly KEYBOARD_W = "W";
		private readonly KEYBOARD_X = "X";
		private readonly KEYBOARD_Y = "Y";
		private readonly KEYBOARD_Z = "Z";

		readonly KEYBOARD_LOWER_CASE: { [key: number]: string } = {
			"48": this.KEYBOARD_0,
			"49": this.KEYBOARD_1,
			"50": this.KEYBOARD_2,
			"51": this.KEYBOARD_3,
			"52": this.KEYBOARD_4,
			"53": this.KEYBOARD_5,
			"54": this.KEYBOARD_6,
			"55": this.KEYBOARD_7,
			"56": this.KEYBOARD_8,
			"57": this.KEYBOARD_9,
			"110": this.KEYBOARD_point,

			"96": this.KEYBOARD_0,
			"97": this.KEYBOARD_1,
			"98": this.KEYBOARD_2,
			"99": this.KEYBOARD_3,
			"100": this.KEYBOARD_4,
			"101": this.KEYBOARD_5,
			"102": this.KEYBOARD_6,
			"103": this.KEYBOARD_7,
			"104": this.KEYBOARD_8,
			"105": this.KEYBOARD_9,

			"65": this.KEYBOARD_a,
			"66": this.KEYBOARD_b,
			"67": this.KEYBOARD_c,
			"68": this.KEYBOARD_d,
			"69": this.KEYBOARD_e,
			"70": this.KEYBOARD_f,
			"71": this.KEYBOARD_g,
			"72": this.KEYBOARD_h,
			"73": this.KEYBOARD_i,
			"74": this.KEYBOARD_j,
			"75": this.KEYBOARD_k,
			"76": this.KEYBOARD_l,
			"77": this.KEYBOARD_m,
			"78": this.KEYBOARD_n,
			"79": this.KEYBOARD_o,
			"80": this.KEYBOARD_p,
			"81": this.KEYBOARD_q,
			"82": this.KEYBOARD_r,
			"83": this.KEYBOARD_s,
			"84": this.KEYBOARD_t,
			"85": this.KEYBOARD_u,
			"86": this.KEYBOARD_v,
			"87": this.KEYBOARD_w,
			"88": this.KEYBOARD_x,
			"89": this.KEYBOARD_y,
			"90": this.KEYBOARD_z,
		}


		readonly KEYBOARD_BLOCK_LETTER: { [key: number]: string } = {
			"48": this.KEYBOARD_0,
			"49": this.KEYBOARD_1,
			"50": this.KEYBOARD_2,
			"51": this.KEYBOARD_3,
			"52": this.KEYBOARD_4,
			"53": this.KEYBOARD_5,
			"54": this.KEYBOARD_6,
			"55": this.KEYBOARD_7,
			"56": this.KEYBOARD_8,
			"57": this.KEYBOARD_9,

			"96": this.KEYBOARD_0,
			"97": this.KEYBOARD_1,
			"98": this.KEYBOARD_2,
			"99": this.KEYBOARD_3,
			"100": this.KEYBOARD_4,
			"101": this.KEYBOARD_5,
			"102": this.KEYBOARD_6,
			"103": this.KEYBOARD_7,
			"104": this.KEYBOARD_8,
			"105": this.KEYBOARD_9,

			"65": this.KEYBOARD_A,
			"66": this.KEYBOARD_B,
			"67": this.KEYBOARD_C,
			"68": this.KEYBOARD_D,
			"69": this.KEYBOARD_E,
			"70": this.KEYBOARD_F,
			"71": this.KEYBOARD_G,
			"72": this.KEYBOARD_H,
			"73": this.KEYBOARD_I,
			"74": this.KEYBOARD_J,
			"75": this.KEYBOARD_K,
			"76": this.KEYBOARD_L,
			"77": this.KEYBOARD_M,
			"78": this.KEYBOARD_N,
			"79": this.KEYBOARD_O,
			"80": this.KEYBOARD_P,
			"81": this.KEYBOARD_Q,
			"82": this.KEYBOARD_R,
			"83": this.KEYBOARD_S,
			"84": this.KEYBOARD_T,
			"85": this.KEYBOARD_U,
			"86": this.KEYBOARD_V,
			"87": this.KEYBOARD_W,
			"88": this.KEYBOARD_X,
			"89": this.KEYBOARD_Y,
			"90": this.KEYBOARD_Z,
		}



		readonly LOWER_CASE = {
			"0": this.KEYBOARD_0,
			"1": this.KEYBOARD_1,
			"2": this.KEYBOARD_2,
			"3": this.KEYBOARD_3,
			"4": this.KEYBOARD_4,
			"5": this.KEYBOARD_5,
			"6": this.KEYBOARD_6,
			"7": this.KEYBOARD_7,
			"8": this.KEYBOARD_8,
			"9": this.KEYBOARD_9,
			"20": this.KEYBOARD_a,
			"33": this.KEYBOARD_b,
			"31": this.KEYBOARD_c,
			"22": this.KEYBOARD_d,
			"12": this.KEYBOARD_e,
			"23": this.KEYBOARD_f,
			"24": this.KEYBOARD_g,
			"25": this.KEYBOARD_h,
			"17": this.KEYBOARD_i,
			"26": this.KEYBOARD_j,
			"27": this.KEYBOARD_k,
			"28": this.KEYBOARD_l,
			"35": this.KEYBOARD_m,
			"34": this.KEYBOARD_n,
			"18": this.KEYBOARD_o,
			"19": this.KEYBOARD_p,
			"10": this.KEYBOARD_q,
			"13": this.KEYBOARD_r,
			"21": this.KEYBOARD_s,
			"14": this.KEYBOARD_t,
			"16": this.KEYBOARD_u,
			"32": this.KEYBOARD_v,
			"11": this.KEYBOARD_w,
			"30": this.KEYBOARD_x,
			"15": this.KEYBOARD_y,
			"29": this.KEYBOARD_z,
		}

		readonly BLOCK_LETTER = {
			"0": this.KEYBOARD_0,
			"1": this.KEYBOARD_1,
			"2": this.KEYBOARD_2,
			"3": this.KEYBOARD_3,
			"4": this.KEYBOARD_4,
			"5": this.KEYBOARD_5,
			"6": this.KEYBOARD_6,
			"7": this.KEYBOARD_7,
			"8": this.KEYBOARD_8,
			"9": this.KEYBOARD_9,
			"20": this.KEYBOARD_A,
			"33": this.KEYBOARD_B,
			"31": this.KEYBOARD_C,
			"22": this.KEYBOARD_D,
			"12": this.KEYBOARD_E,
			"23": this.KEYBOARD_F,
			"24": this.KEYBOARD_G,
			"25": this.KEYBOARD_H,
			"17": this.KEYBOARD_I,
			"26": this.KEYBOARD_J,
			"27": this.KEYBOARD_K,
			"28": this.KEYBOARD_L,
			"35": this.KEYBOARD_M,
			"34": this.KEYBOARD_N,
			"18": this.KEYBOARD_O,
			"19": this.KEYBOARD_P,
			"10": this.KEYBOARD_Q,
			"13": this.KEYBOARD_R,
			"21": this.KEYBOARD_S,
			"14": this.KEYBOARD_T,
			"16": this.KEYBOARD_U,
			"32": this.KEYBOARD_V,
			"11": this.KEYBOARD_W,
			"30": this.KEYBOARD_X,
			"15": this.KEYBOARD_Y,
			"29": this.KEYBOARD_Z,
		}
	}

}