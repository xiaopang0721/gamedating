/**
* name 保险
*/
module gamedating.page {
	export class QuKuanPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.dating.QuKuanUI;
		private _inputMoney: MyTextInput;
		private _drawchannel: any;
		private _damaLeft:number;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "qukuan.atlas",
			];
			this._isNeedBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.QuKuanUI");
			this.addChild(this._viewUI);

			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("dating.component.QuKuanTUI", CunQuT);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_record.visible = false;

			this._viewUI.list_tab.vScrollBarSkin = "";
			this._viewUI.list_tab.scrollBar.touchScrollEnable = false;
			this._viewUI.list_tab.itemRender = this.createChildren("dating.component.TabItemRender1UI", TabItemRender);
			this._viewUI.list_tab.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_tab.selectHandler = new Handler(this, this.selectHandler);
			this._drawchannel = [];
			if (FreeStyle.getData('baseconfig_c', 'drawbankuse') == '1')
				this._drawchannel.push({bindtype: Web_operation_fields.BANK});
			if (FreeStyle.getData('baseconfig_c', 'drawalipayuse') == '1')
				this._drawchannel.push({bindtype: Web_operation_fields.ALIPAY});
			this._drawchannel.push({ title: "提现记录" });
			this._viewUI.list_tab.dataSource = this._drawchannel;

			this._viewUI.hslider.min = 0;//设置 this._viewUI.hslider0 最低位置值。
			this._viewUI.hslider.tick = 1;//设置 this._viewUI.hslider0 刻度值。
			this._viewUI.hslider.value = 0;//设置 this._viewUI.hslider0 当前位置值。
			this._viewUI.hslider.changeHandler = new Handler(this, this.onChange0);//设置 this._viewUI.hslider0 位置变化处理器。
			DatingGame.ins.cunQuMgr.on(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);

			if (!this._inputMoney) {
				this._inputMoney = new MyTextInput();
				this._inputMoney.x = this._viewUI.view_money.x;
				this._inputMoney.y = this._viewUI.view_money.y;
				this._inputMoney.width = this._viewUI.view_money.width;
				this._viewUI.view_money.parent.addChild(this._inputMoney);
				this._viewUI.view_money.removeSelf();
			}
			this._inputMoney.settext(this._game, TeaStyle.COLOR_INPUT_DEFAULT, "请输入提现的金额", TeaStyle.COLOR_WHITE, 24, 11, MyTextInput.TYPE_INPUT_NUMBER, false, Handler.create(this, this.onInputUpdate, null, false));
			this._bankMinDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawbankmin');
			this._alipayMinDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawalipaymin');	
			this._bankMaxDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawbankmax');
			this._alipayMaxDraw = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, 'drawalipaymax');

			this._viewUI.box_shoubang.addChild(this._viewUI.btn_max);
			this._viewUI.box_shoubang.addChild(this._viewUI.btn_clear);
			this._viewUI.list_tab.selectedIndex = -1;
			this._viewUI.list_tab.selectedIndex = 0;
		}
		private _bankMinDraw:number;
		private _alipayMinDraw:number;
		private _bankMaxDraw:number;
		private _alipayMaxDraw:number;
		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();					
			
			this._viewUI.txt_zhanghao.on(LEvent.CLICK, this, this.onMouseClick);
			this._inputMoney.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_max.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_duihuan.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onPlayerInfoUpdate);
			this._notStageClickUI = [this._inputMoney];		

			this._viewUI.btn_clear.visible = false;	
		}

		public close(): void {
			if (this._viewUI) {
				DatingGame.ins.cunQuMgr.clear();
				DatingGame.ins.cunQuMgr.off(CunQuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);				
				this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onPlayerInfoUpdate);
				if (this._inputMoney){
					this._inputMoney.off(LEvent.CLICK, this, this.onBtnClickWithTween);
					this._inputMoney.destroy();
					this._inputMoney = null;
				}
			}
			super.close();
		}

		private onInputUpdate(){			
			let value = parseInt(this._inputMoney.input.text) || 0;
			if (value == 0) 
				this._inputMoney.clearInput();
			this._viewUI.hslider.value = value;
			this._viewUI.btn_clear.visible = value > 0;
		}

		private onPlayerInfoUpdate():void{
			let maxValue;
			let money = WebConfig.info.money;
			if (money < 0) money = 0;
			let moneyCanDraw = 0;
			this._viewUI.txt_curmoney.text = money + '';
			this._damaLeft = (WebConfig.info.drawingRequiredFlow - WebConfig.info.drawingCurrentFlow) / 100;
			this._damaLeft = this._damaLeft < 0 ? 0 : this._damaLeft;
			this._viewUI.txt_dama.text = this._damaLeft.toString();
			this._viewUI.hslider.max = Math.floor(money);

			// 打码量大于0，不让取款
			this._inputMoney.disabled = this._viewUI.hslider.disabled = this._viewUI.btn_max.disabled = this._viewUI.btn_duihuan.disabled = this._damaLeft > 0;
			let data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
			if (!data)
				return;
			if (data.bindtype == Web_operation_fields.BANK)//银行卡
			{
				if (WebConfig.info.yinhangka) {
					let str = parsecode(WebConfig.info.yinhangka);
					this._viewUI.txt_zhanghao.text = str;
					this._viewUI.txt_zhanghao.mouseEnabled = false;
				} else {
					this._viewUI.txt_zhanghao.text = "点击绑定银行卡信息";
					this._viewUI.txt_zhanghao.mouseEnabled = true;
				}
				moneyCanDraw = money > this._bankMaxDraw ? this._bankMaxDraw : money;
			} 
			else if (data.bindtype == Web_operation_fields.ALIPAY)//支付宝
			{
				if (WebConfig.info.zhifubao) {
					let str = parsecode(WebConfig.info.zhifubao);
					this._viewUI.txt_zhanghao.text = str;
					this._viewUI.txt_zhanghao.mouseEnabled = false;
				} else {
					this._viewUI.txt_zhanghao.text = "点击绑定支付宝信息";
					this._viewUI.txt_zhanghao.mouseEnabled = true;
				}
				moneyCanDraw = money > this._alipayMaxDraw ? this._alipayMaxDraw : money;
			}
			this._inputMoney.clearInput();
			this._inputMoney.maxValue = moneyCanDraw;
			this._viewUI.hslider.max = Math.floor(moneyCanDraw);
			this._viewUI.hslider.value = 0;
		}		

		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_DRAWING) {
				if (data && data.success == 0) {
					this._inputMoney.clearInput();
					this._viewUI.hslider.value = 0;
					this._game.showTips("提取成功");
					this._game.uiRoot.general.close(DatingPageDef.PAGE_SHURU_MIMA);
				}
			} 
		}

		private _dataInfo: any[];
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = DatingGame.ins.cunQuMgr.dataInfo;
			let count: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_no.visible = !count;
			this._viewUI.list_record.visible = count > 0;
			if (!count) {
				if (!data)
					DatingGame.ins.cunQuMgr.getData(1);
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * CunQuMgr.PAGE_MAX - CunQuMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}

			this._viewUI.list_record.dataSource = this._dataInfo;
		}

		private onChange0(value: number) {
			this._viewUI.btn_clear.visible = value > 0;
			if (value == 0)
				this._inputMoney.clearInput();
			else
				this._inputMoney.setText_0(Math.floor(value).toString());
		}

		private selectHandler(index: number = -1) {
			let data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
			if (!data) {
				return;
			}

			if (!data.bindtype) {
				this._viewUI.box_shoubang.visible = false;
				this._viewUI.box_record.visible = true;

				this._viewUI.list_record.dataSource = null;

				this.onUpdateDataInfo();
			} else {
				if (data.bindtype == Web_operation_fields.BANK)//银行卡
					this._inputMoney.setPrompt = '请输入提现的金额(最低' + this._bankMinDraw + ')';
				else 
					this._inputMoney.setPrompt = '请输入提现的金额(最低' + this._alipayMinDraw + ')';
				this._viewUI.box_shoubang.visible = true;
				this._viewUI.box_record.visible = false;
				this._viewUI.btn_clear.visible = false;
				this._inputMoney.clearInput();

				this.onPlayerInfoUpdate();				
			}
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
				if (cell instanceof CunQuT) {
					let page = Math.floor((index + 10) / CunQuMgr.PAGE_MAX) + 1;
					if (!DatingGame.ins.cunQuMgr.dataInfo[page]) {
						if (DatingGame.ins.cunQuMgr.dataInfo[page - 1] && DatingGame.ins.cunQuMgr.dataInfo[page - 1].length >= CunQuMgr.PAGE_MAX) {
							DatingGame.ins.cunQuMgr.dataInfo[page] = {}
							DatingGame.ins.cunQuMgr.getData(page);
						}
					}
				}
			}
		}

		private _notStageClickUI: Laya.Node[]; //不响应舞台点击UI对象集合
		protected onMouseClick(e: LEvent) {
			if (e.currentTarget == this._viewUI.txt_zhanghao) {
				let pwd:string = this._game.sceneObjectMgr.mainPlayer.GetTakePassword();
				if (!pwd || pwd.length == 0){
					// 打开设置密码界面
					this._game.uiRoot.general.open(DatingPageDef.PAGE_SHEZHI_MIMA);
					return;
				}
				let data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];

				if (data.bindtype == Web_operation_fields.BANK) {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDYHK);
				} else if (data.bindtype == Web_operation_fields.ALIPAY) {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDZFB);
				}
			}
			
			for (let index = 0; index < this._notStageClickUI.length; index++) {
				let v = this._notStageClickUI[index];
				if (v.contains(e.target)) {
					return;
				}
			}
			if (this._viewUI != DatingGame.ins.jianPanMgr.pageUI) return;
			DatingGame.ins.jianPanMgr.closeJianPan();
		}

		protected onBtnTweenEnd(e: any, target: any) {
			let money:number;
			let data = this._viewUI.list_tab.dataSource[this._viewUI.list_tab.selectedIndex];
			switch (target) {
				case this._viewUI.btn_help://帮助
					this._game.uiRoot.general.open(DatingPageDef.PAGE_QUKUANSXDML);
					break;
				case this._viewUI.btn_clear://清除
					this._viewUI.hslider.value = 0;
					this._inputMoney.clearInput();
					this._viewUI.btn_clear.visible = false;
					break;
				case this._viewUI.btn_max://最大
					money = Math.floor(WebConfig.info.money);
					if (money < 0) money = 0;
					if (data.bindtype == Web_operation_fields.BANK && money > this._bankMaxDraw) money = this._bankMaxDraw;
					if (data.bindtype == Web_operation_fields.ALIPAY && money > this._alipayMaxDraw) money = this._alipayMaxDraw;
					this._viewUI.hslider.value = money;
					this._inputMoney.setText_0(money.toString());
					this._viewUI.btn_clear.visible = money > 0;
					break;				
				case this._viewUI.btn_duihuan://取出
					let pwd:string = this._game.sceneObjectMgr.mainPlayer.GetTakePassword();
					if (!pwd || pwd.length == 0){
						// 打开设置密码界面
						this._game.uiRoot.general.open(DatingPageDef.PAGE_SHEZHI_MIMA);
						return;
					}
					
					money = parseFloat(this._inputMoney.input.text);
					if (data.bindtype == Web_operation_fields.BANK) {
						if (!WebConfig.info.yinhangka) {
							this._game.showTips("未绑定银行卡");
							this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDYHK);
							return;
						}
						if (money < this._bankMinDraw) {
							this._game.showTips("小于最低提现金额");
							return;
						}						
					} else if (data.bindtype == Web_operation_fields.ALIPAY) {
						if (!WebConfig.info.zhifubao) {
							this._game.showTips("未绑定支付宝");
							this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDZFB);
							return;
						}
						if (money < this._alipayMinDraw) {
							this._game.showTips("小于最低提现金额");
							return;
						}						
					}

					if (!this._inputMoney.input.text) {
						this._game.showTips("请输入提现金额");
						return;
					}
					if (money > WebConfig.info.money) {
						this._game.showTips("超出可取范围");
						return;
					}
					if (money < data.minmoney) {
						this._game.showTips("小于最小可取范围");
						return;
					}
					if (this._inputMoney.input.text.indexOf(".") != -1) {
						this._game.showTips("只能取出整数金额");
						return;
					}
					
					if (this._game.sceneObjectMgr.mainPlayer.GetDrawMoneyErrorTimes() >= 3){
						// 打开超过错误次数界面
						this._game.uiRoot.general.open(DatingPageDef.PAGE_MIMA_TISHI);
						return;
					}
					this._game.uiRoot.general.open(DatingPageDef.PAGE_SHURU_MIMA, (page)=>{
						page.dataSource = [data.bindtype, money];
					});
					break;
				case this._inputMoney:
					this.openJianPan(this._inputMoney, this._viewUI, -100);
					break;

			}
		}

		private openJianPan(textUI: MyTextInput, viewUI: any, centerY: number) {
			DatingGame.ins.jianPanMgr.openJianPan(textUI, viewUI, centerY);
		}		
	}

	class CunQuT extends ui.nqp.dating.component.QuKuanTUI {

		private _isTween: boolean;
		private _game: Game;
		private _data: any;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * id:"21"
			lv:"1"
			maxmoney:"50000"
			minmoney:"1"
			name:"支付宝"
			paytype:"ZFBH5"
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this.dataSource = data;
			this.txt_time.text = Sync.getTimeStr(data.create_time * 1000);
			let color:string = data.status == '审核中' ? TeaStyle.COLOR_YELLOW : data.status == '成功' ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
			TextFieldU.createHtmlText(this.txt_zt, HtmlFormat.addHtmlColor(data.status, color));
			this.txt_money.text = data.money;
			this.txt_type.text = data.drawtype;
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong+ "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2)
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.rank * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	class TabItemRender extends ui.nqp.dating.component.TabItemRender1UI {
		private _game: Game;
		private _data: any;
		/**
		 * 
		 * @param game 
		 * id:"21"
			lv:"1"
			maxmoney:"50000"
			minmoney:"1"
			name:"支付宝"
			paytype:"ZFBH5"
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this.dataSource = data;
			if (data.bindtype == Web_operation_fields.BANK) {
				this.txt_name.text = "银行卡";
			} else if (data.bindtype == Web_operation_fields.ALIPAY) {
				this.txt_name.text = "支付宝";
			} else {
				this.txt_name.text = data.title;
			}
		}
	}
}