/**
* 设置取款密码
*/
module gamedatingnqp.page {
	export class QuKuanSetPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.QuKuan_shezhiMMUI;
		private _inputKey: MyTextInput;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qukuan.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.QuKuan_shezhiMMUI");
			this.addChild(this._viewUI);

            this._viewUI.btn_mima_enter.visible = false;

			if (!this._inputKey) {
				this._inputKey = new MyTextInput();
				this._inputKey.x = this._viewUI.view_input.x;
				this._inputKey.y = this._viewUI.view_input.y;
				this._inputKey.width = this._viewUI.view_input.width;
				this._viewUI.view_input.parent.addChild(this._inputKey);
				this._viewUI.view_input.removeSelf();
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._inputKey.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入6位数字取款密码", TeaStyle.COLOR_WHITE, 24, 6, MyTextInput.TYPE_INPUT_NUMBER, false, Handler.create(this, this.onUpdateInput, null, false));

			this._inputKey.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_eyes.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_mima_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._notStageClickUI = [this._inputKey];
		}

        public close(): void {

			if (this._viewUI) {
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
                this._viewUI.img_eyes.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._inputKey.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._inputKey.destroy();
				this._inputKey = null;
			}
			super.close();
		}

        private onUpdateInput():void{
            let pwd:string = this._inputKey.isPassword ? this._inputKey.password : this._inputKey.input.text;
            if (pwd.length >= 6 && pwd.length <= 10) {
                this._viewUI.txt_tishi.visible = false;
                this._viewUI.btn_mima_enter.visible = true;
            } else {
                this._viewUI.txt_tishi.visible = true;
                this._viewUI.btn_mima_enter.visible = false;
            }
        }

		private _notStageClickUI: Laya.Node[]; //不响应舞台点击UI对象集合
		protected onMouseClick(e: LEvent) {
			for (let index = 0; index < this._notStageClickUI.length; index++) {
				let v = this._notStageClickUI[index];
				if (v.contains(e.target)) {
					return;
				}
			}
			if (this._viewUI == this._game.datingGame.jianPanMgr.pageUI) {
				this._game.datingGame.jianPanMgr.closeJianPan();
			}else if(e.target instanceof Box && e.target.parent == this._viewUI){
				this.close();
			}
		}

		/**
		 * 黑底点击事件
		 */
		protected onBlackSpriteClick(): void {
			if (this._isClickBlack) {
				if (this._view == this._game.datingGame.jianPanMgr.pageUI) {
					this._game.datingGame.jianPanMgr.closeJianPan();
				} else {
					this.close();
				}
			}
		}

		protected onSucessHandler(data: any) {
			if (data.reason == Operation_Fields.OPRATE_GAME_PWD_SUCCESS) {
                this._game.showTips("密码设置成功");
                this.close();
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_mima_enter://确认绑定
                    let pwd:string = this._inputKey.isPassword ? this._inputKey.password : this._inputKey.input.text;
					if (!pwd) {
						this._game.showTips("取款密码不能为空")
						return;
					}
					this._game.network.call_set_money_pwd(pwd);
					break;
				case this._inputKey:
					this.openJianPan(this._inputKey, this._viewUI, -60);
					break;
                case this._viewUI.img_eyes:
                    if (this._inputKey.isPassword){
                        this._viewUI.img_eyes.skin = DatingPath.ui_dating + 'tongyong/btn_eyeon.png';
                    } else {
                        this._viewUI.img_eyes.skin = DatingPath.ui_dating + 'tongyong/btn_eyeoff.png';
                    }
                    this._inputKey.showPassword(!this._inputKey.isPassword);
                    break;
			}
		}

		private openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
			 DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
		}		
	}
}