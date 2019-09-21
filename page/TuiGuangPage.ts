/**
* name 全面代理
*/
module gamedating.page {
	export class TuiGuangPage extends game.gui.base.Page {
		static readonly TYPE_WUXIAN_DAILI = 1;//无限代理
		static readonly TYPE_QUANMIN_DAILI = 2;//全民代理

		private _viewUI: ui.nqp.dating.TuiGuangUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				DatingPath.atlas_dating_ui + "tuiguang.atlas",
				DatingPath.atlas_dating_ui + "fenxiang.atlas",
				DatingPath.atlas_dating_ui + "shouchong.atlas",
				DatingPath.atlas_dating_ui + "chongzhi.atlas",
				DatingPath.atlas_dating_ui + "geren.atlas",
			];
			this._isNeedDuang = true;
			this._isNeedBlack = true;
			this._isClickBlack = true;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("dating.TuiGuangUI");
			this.addChild(this._viewUI);
			//官网二维码
			this._viewUI.img_ewm.skin = WebConfig.ewmUrl;
			//官网链接
			this._viewUI.txt_gw.text = EnumToString.getLimitStr(WebConfig.gwUrl,17);
			//推广明细
			this._viewUI.list_mx.vScrollBarSkin = "";
			this._viewUI.list_mx.scrollBar.elasticDistance = 100;
			this._viewUI.list_mx.itemRender = this.createChildren("dating.component.TuiGuangMX_TUI", TuiGuangMX);
			this._viewUI.list_mx.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_mx.visible = false;
			//返水明细
			this._viewUI.list_fsmx.vScrollBarSkin = "";
			this._viewUI.list_fsmx.scrollBar.elasticDistance = 100;
			this._viewUI.list_fsmx.itemRender = this.createChildren("dating.component.TuiGuangMX_TUI", FanShuiMX);
			this._viewUI.list_fsmx.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_fsmx.visible = false;

			//我的用户
			this._viewUI.list_yonghu.vScrollBarSkin = "";
			this._viewUI.list_yonghu.scrollBar.elasticDistance = 100;
			this._viewUI.list_yonghu.itemRender = this.createChildren("dating.component.YongHuTUI", YongHuItemRender);
			this._viewUI.list_yonghu.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_yonghu.visible = false;

			//上周记录
			this._viewUI.list3.vScrollBarSkin = "";
			this._viewUI.list3.scrollBar.elasticDistance = 100;
			this._viewUI.list3.itemRender = this.createChildren("dating.component.FenXiangT6UI", FenXiangLastWeekT);
			this._viewUI.list3.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list3.visible = false;

			//奖励记录(无限代理)
			this._viewUI.list2.vScrollBarSkin = "";
			this._viewUI.list2.scrollBar.elasticDistance = 100;
			this._viewUI.list2.itemRender = this.createChildren("dating.component.FenXiangT5UI", FenXiangRecord);
			this._viewUI.list2.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list2.visible = false;
			//奖励记录(全民代理)
			this._viewUI.list_child.vScrollBarSkin = "";
			this._viewUI.list_child.scrollBar.elasticDistance = 100;
			this._viewUI.list_child.itemRender = this.createChildren("dating.component.FenXiangT6UI", FenXiangRecord1);
			this._viewUI.list_child.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.list_child.visible = false;

			(<Button>this._viewUI.tab.getChildByName("item6")).visible = false;
			this._viewUI.box6.visible = false;

			for (let i = 0; i < 5; i++) {
				this._tuiGuangYeJiTxt[i] = this._viewUI["txt_yeji" + i];
				this._tuiGuangYeJiTxt[i].text = this._tuiguangyeji[i] / 10000 + "万";
				this._fanYongBiLiTxt[i] = this._viewUI["txt_fanyongbili" + i];
				this._fanYongMoneyTxt[i] = this._viewUI["txt_fanyongmoney" + i];
			}

			for (let index = 0; index < this._viewUI.tab.numChildren; index++) {
				let item = this._viewUI.tab.getChildByName("item" + index) as Laya.Button;
				this._tabItems[index] = item;
			}

			for (let i = 0; i < 7; i++) {
				this._viewUI["lab" + i].text = this._btnLabel[i];
				this._viewUI["btn" + i].on(LEvent.CLICK, this, this.onMouseHandle, [i]);
			}
			this._viewUI.lab_select.text = this._btnLabel[6]
			this._viewUI.btn_selected6.selected = true;
			this._timeSelectIndex = 6;

			this._viewUI.box1_0.visible = false;
			this._viewUI.box1_1.visible = false;
			this._viewUI.box3_0.visible = false;
			this._viewUI.box3_1.visible = false;
			this._viewUI.box4_0.visible = false;
			this._viewUI.box4_1.visible = false;
			this._viewUI.box5_0.visible = false;
			this._viewUI.box5_1.visible = false;
			this._viewUI.img_type.visible = false;
			this._viewUI.box_btn.visible = false;
			this._viewUI.jiantou_up.visible = !this._viewUI.box_btn.visible;
			this._viewUI.jiantou_down.visible = this._viewUI.box_btn.visible;
			this._notStageClickUI = [this._viewUI.btn_select];
		}

		private _notStageClickUI: any[]; //不响应舞台点击UI对象集合
		protected onMouseClick(e: LEvent) {
			if (!this._viewUI.box_btn.visible) return
			for (let index = 0; index < this._notStageClickUI.length; index++) {
				let v = this._notStageClickUI[index];
				if (v.contains(e.target)) {
					return;
				}
			}
			this._viewUI.box_btn.visible = false;
		}

		private _lastIndex: number;
		private _btnLabel: string[] = ["上月", "本月", "上周", "本周", "前日", "昨日", "今日"];
		private onMouseHandle(index: number, e: LEvent) {
			if (index == this._timeSelectIndex) return;
			this._viewUI.list_yonghu.scrollTo(0);
			this._lastIndex = 0;
			this._timeSelectIndex = index;
			this._viewUI.lab_select.text = this._btnLabel[this._timeSelectIndex];
			this._viewUI.box_btn.visible = false;
			for (let i = 0; i < 7; i++) {
				this._viewUI["btn_selected" + i].selected = i == index;
			}
			this.onUpdateDataInfo();
		}

		private _dataInfo: any[];
		//当前选中的 时间位置
		private _timeSelectIndex: number;
		private onUpdateDataInfo(data?: any) {
			this._dataInfo = [];
			let value = this._game.datingGame.dailiyonghuMgr.getDataInfo(this._timeSelectIndex);
			let count: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			let agencytype = this._game.datingGame.dailiyonghuMgr.agencyType() || this.typeDaiLi;
			this._viewUI.box4_0.visible = agencytype == TuiGuangPage.TYPE_WUXIAN_DAILI;
			this._viewUI.box4_1.visible = !this._viewUI.box4_0.visible;
			this._viewUI.box_no_4.visible = !count;
			this._viewUI.box_huizong.visible = count > 0;
			this._viewUI.list_yonghu.visible = count > 0;
			let colorHtml = this._viewUI.txt_total.color;
			let innerHtml = "";
			if (!count) {
				!data && this._game.datingGame.dailiyonghuMgr.getData(this._timeSelectIndex);
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * DaiLiYongHuMgr.PAGE_MAX - DaiLiYongHuMgr.PAGE_MAX;
						}
						this._dataInfo = this._dataInfo.concat(cc);
					}
				}
			}
			this._viewUI.list_yonghu.dataSource = this._dataInfo;
			let huizong = this._game.datingGame.dailiyonghuMgr.getDataHuiZong(this._timeSelectIndex);
			this._viewUI.txt_huizong0.text = "" + huizong[0];
			this._viewUI.txt_huizong1.text = "" + huizong[1];
			this._viewUI.txt_huizong2.text = "" + huizong[2];
		}

		private renderHandlerYH(cell: any, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
				let page = Math.floor((index + 10) / DaiLiYongHuMgr.PAGE_MAX) + 1;
				if (!this._game.datingGame.dailiyonghuMgr.getDataInfo(this._timeSelectIndex)[page]) {
					if (this._game.datingGame.dailiyonghuMgr.getDataInfo(this._timeSelectIndex)[page - 1] && this._game.datingGame.dailiyonghuMgr.getDataInfo(this._timeSelectIndex)[page - 1].length >= DaiLiYongHuMgr.PAGE_MAX) {
						this._game.datingGame.dailiyonghuMgr.getDataInfo(this._timeSelectIndex)[page] = {}
						if (index - this._lastIndex < DaiLiYongHuMgr.PAGE_MAX * 0.5) return;
						this._lastIndex = index;
						this._game.datingGame.dailiyonghuMgr.getData(this._timeSelectIndex);
					}
				}
			}
		}

		private renderHandler(cell: any, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.img_ewm.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_help.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_lq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_wxhy.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_fxq.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.box_no_share.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._viewUI.tab.selectHandler = new Handler(this, this.selectHandler);
			this._viewUI.tab.selectedIndex = 0;
			this._game.playSound(Path.music_tuiguang)
			this._viewUI.btn_select.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._game.datingGame.dailiyonghuMgr.on(DaiLiYongHuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
			this.onUpdatePlayerInfo();
		}

		private onUpdatePlayerInfo() {
			if (!WebConfig.info) return;
			// let daysharegivemoney = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "daysharegivemoney");
			// this._viewUI.box_share.visible = daysharegivemoney;
			// this._viewUI.box_no_share.visible = !daysharegivemoney;
			// this._viewUI.txt_daysharegivemoney.text = daysharegivemoney;
			let agency_sharereward = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "agency_sharereward");
			this._viewUI.txt_agency_sharereward.text = agency_sharereward || "";
			let agency_shareminpay = FreeStyle.getData(Web_operation_fields.FREE_STYLE_TYPES_BASECONFIG_C, "agency_shareminpay");
			this._viewUI.txt_agency_shareminpay.text = agency_shareminpay || "";
			this._viewUI.txt_ktq.text = WebConfig.info.yongjin + "元";
			this._viewUI.txt_record.text = WebConfig.info.history_yongjin + "元";
		}

		private selectHandler(index: number) {
			for (let indx = 0; indx < 6; indx++) {
				this._viewUI["box" + indx].visible = index == indx;
			}
			// if (!WebConfig.info || (WebConfig.info.isguest && !(index == 0 || index == 1 || index == 5))) {
			// 	return;
			// }
			if (index == 0) {//分享赚钱
				this._game.network.call_get_agencyreport();
			}
			else if (index == 1 || index == 5) {//推广明细，代理教程
				this._game.network.call_get_agencylvlist();
			}
			else if (index == 2) {//奖励记录
				this._game.network.call_get_rbmoneylog();
			}
			else if (index == 3) {//奖励明细
				this._game.network.call_get_agrlastweek();
			}
			else if (index == 4) {//我的用户
				this.onUpdateDataInfo();
			}
		}

		private _tabItems: Button[] = [];
		private updatePos() {
			let total_y: number = this._tabItems[0].y;
			for (let index = 0; index < this._tabItems.length; index++) {
				let btn = this._tabItems[index];
				if (!btn || !btn.visible) continue;
				btn.y = total_y;
				total_y += btn.height + 5;
			}
		}

		private typeDaiLi: number;
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_AGENCYREPORT) {//分享赚钱
				if (data && data.success == 0 && data.msg && data.msg) {
					//根据lv是否存在来判断是否显示
					// let lvbool = data.msg.agencytype == Web_operation_fields.GAME_AGENT_TYPE_WXDL || (data.msg.agencytype == Web_operation_fields.GAME_AGENT_TYPE_QMDL && data.msg.lv);
					// if (lvbool != this._tabItems[1].visible) {
					// 	this._tabItems[1].visible = lvbool;
					// 	this.updatePos();
					// }

					this._viewUI.txt_szzjl.text = data.msg.allfy || "0";
					this._viewUI.txt_zswjrs.text = data.msg.zxnum || "0";
					this._viewUI.txt_qtwjrs.text = data.msg.qtnum || "0";
					this._viewUI.txt_szzswjjj.text = data.msg.zxfy || "0";
					this._viewUI.txt_szqtwjjj.text = data.msg.qtfy || "0";

					if (data.msg.agencyrbtype == Web_operation_fields.GAME_AGENT_REBATE_TYPE_DAY) {
						this._viewUI.txt_w0.text = "昨日总奖励："
						this._viewUI.txt_w3.text = "昨日直属玩家奖励："
						this._viewUI.txt_w4.text = "昨日其他玩家奖励："
					}
					else if (data.msg.agencyrbtype == Web_operation_fields.GAME_AGENT_REBATE_TYPE_WEEK) {
						this._viewUI.txt_w0.text = "上周总奖励："
						this._viewUI.txt_w3.text = "上周直属玩家奖励："
						this._viewUI.txt_w4.text = "上周其他玩家奖励："

					}
					else if (data.msg.agencyrbtype == Web_operation_fields.GAME_AGENT_REBATE_TYPE_MONTH) {
						this._viewUI.txt_w0.text = "上月总奖励："
						this._viewUI.txt_w3.text = "上月直属玩家奖励："
						this._viewUI.txt_w4.text = "上月其他玩家奖励："
					}
					//代理类型
					this.typeDaiLi = data.msg.agencytype;
					this._viewUI.img_type.visible = true;
					this._viewUI.img_type.skin = this.typeDaiLi == TuiGuangPage.TYPE_QUANMIN_DAILI ? DatingPath.ui_dating + "tuiguang/tit_daili.png" : DatingPath.ui_dating + "tuiguang/tit_daili1.png";
					(<Button>this._viewUI.tab.getChildByName("item1")).skin = this.typeDaiLi == TuiGuangPage.TYPE_QUANMIN_DAILI ? DatingPath.ui_dating + "tuiguang/btn_fs.png" : DatingPath.ui_dating + "tuiguang/btn_mx.png";
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_AGENCYLVLIST) {//代理等级
				if (data && data.success == 0) {
					if (data.msg && data.msg.list) {
						if (data.msg.list.lv && data.msg.list.lv.length > 0) {
							if (data.msg.list.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI) {
								this._viewUI.list_fsmx.dataSource = data.msg.list.lv;
								for (let i = 0; i < 10; i++) {
									this._viewUI["txt_percent" + i].text = data.msg.list.fybl + "%";
								}
							} else {
								this._viewUI.list_mx.dataSource = data.msg.list.lv;
								this.onSetDaiLiData(data.msg.list.lv);
							}
						}
						this._viewUI.box5_0.visible = data.msg.list.agencytype == TuiGuangPage.TYPE_WUXIAN_DAILI;
						this._viewUI.box5_1.visible = data.msg.list.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI;
						this._viewUI.box1_0.visible = data.msg.list.agencytype == TuiGuangPage.TYPE_WUXIAN_DAILI;
						this._viewUI.box1_1.visible = data.msg.list.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI;
					}
					if (data.msg.list.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI) {
						this._viewUI.list_fsmx.visible = this._viewUI.list_fsmx.dataSource && this._viewUI.list_fsmx.dataSource.length > 0
						this._viewUI.txt_no.visible = !this._viewUI.list_fsmx.visible;
					} else {
						this._viewUI.list_mx.visible = this._viewUI.list_mx.dataSource && this._viewUI.list_mx.dataSource.length > 0
						this._viewUI.txt_no.visible = !this._viewUI.list_mx.visible;
					}
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETAGRLASTWEEK) {//分享奖励明细
				if (data && data.success == 0) {
					if (data.msg && data.msg.list) {
						if (data.msg.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI) {
							this._viewUI.txt_name.text = data.msg.list.account;
							data.msg.list.fsvalue && (this._viewUI.txt_validBet.text = data.msg.list.fsvalue.toString());
							data.msg.list.fs && (this._viewUI.txt_fanshui.text = data.msg.list.fs.toString());
							this._viewUI.list_child.dataSource = data.msg.list.child;
						} else {
							this._viewUI.txt_name1.text = data.msg.list.account;
							data.msg.list.allyj && (this._viewUI.txt_yj.text = data.msg.list.allyj.toString());
							data.msg.list.allfy && (this._viewUI.txt_allfy.text = data.msg.list.allfy.toString());
							data.msg.list.fy && (this._viewUI.txt_selffy.text = data.msg.list.fy.toString());
							let list = this.onFilterList(data.msg.list.child);
							this._viewUI.list3.dataSource = list;
						}
						this._viewUI.box3_0.visible = data.msg.agencytype == TuiGuangPage.TYPE_WUXIAN_DAILI;
						this._viewUI.box3_1.visible = data.msg.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI;
					} else {
						this._viewUI.list3.dataSource = [];
					}
					if (data.msg.agencytype == TuiGuangPage.TYPE_QUANMIN_DAILI) {
						this._viewUI.list_child.visible = this._viewUI.list_child.dataSource && this._viewUI.list_child.dataSource.length > 0
						this._viewUI.box_no_3.visible = !this._viewUI.list_child.visible;
					} else {
						this._viewUI.list3.visible = this._viewUI.list3.dataSource && this._viewUI.list3.dataSource.length > 0
						this._viewUI.box_no_3.visible = !this._viewUI.list3.visible;
					}
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRBMONEYLOG) {//分享奖励记录
				if (data && data.success == 0) {
					if (data.msg && data.msg.list) {
						this._viewUI.list2.dataSource = data.msg.list;
					} else {
						this._viewUI.list2.dataSource = [];
					}
					this._viewUI.list2.visible = this._viewUI.list2.dataSource && this._viewUI.list2.dataSource.length > 0;
					this._viewUI.box_no_2.visible = !this._viewUI.list2.visible;
				}
			}
			else if (data.code == Web_operation_fields.CLIENT_IRCODE_GETRBMONEY) {
				if (data && data.success == 0) {
					this._viewUI.txt_record.text = data.msg.rb_money_history;
					// this._viewUI.txt_ktq.text = data.msg.rb_money;
					// this._game.uiRoot.general.open(PageDef.PAGE_GET_REWARD,(page:RewardPage)=>{
					// 	page.setData(data.msg.award,this._icons[this._days - 1].skin);
					// })
				}
			}
		}

		//筛选列表，去除业绩为0的数据
		private onFilterList(list) {
			let new_list = list;
			for (let i = new_list.length - 1; i >= 0; i--) {
				let data = new_list[i];
				if (data && !data.allyj) {
					new_list.splice(i, 1);
				}
			}
			return new_list;
		}

		private _tuiGuangYeJiTxt: any = [];
		private _fanYongBiLiTxt: any = [];
		private _fanYongMoneyTxt: any = [];
		private _tuiguangyeji: any = [1200000, 4500000, 3000000, 1000000, 500000];
		//设置代理等级教程
		private onSetDaiLiData(list: any) {
			let totalList: number[] = [];
			for (let i = 0; i < 5; i++) {
				let data = list[list.length - i - 1];
				if (!data) data = list[0];//取不到数据，默认LV1
				let max: number = 0;
				let jicha: number = 0;
				if (i == 0) {
					let fanyong = data.agency_fytype == 2 ? data.agency_prec + "%" : StringU.substitute("每万{0}元", data.agency_prec)
					jicha = data.agency_prec;
					this._fanYongBiLiTxt[i].text = fanyong;
				} else {
					max = list[list.length - 1].agency_prec; //最高等级代理返佣比例
					jicha = EnumToString.getPointBackNum(max - data.agency_prec, 2) //级差
					this._fanYongBiLiTxt[i].text = StringU.substitute("{0}-{1}={2}", max, data.agency_prec, jicha);
					this._fanYongBiLiTxt[i].fontSize = 20;
					if (this._fanYongBiLiTxt[i].textField.textWidth > 112) {
						this._fanYongBiLiTxt[i].fontSize = 18;
					}
				}
				let tuiguangyeji = data.agency_fytype == 2 ? this._tuiguangyeji[i] : this._tuiguangyeji[i] / 10000; //推广业绩
				let fanyongbili = data.agency_fytype == 2 ? jicha + "%" : jicha; //返佣比例
				let money = data.agency_fytype == 2 ? tuiguangyeji * jicha / 100 : tuiguangyeji * jicha; //单个代理返佣金额
				let tuiguangyejiStr = data.agency_fytype == 2 ? EnumToString.getPointBackNum(tuiguangyeji / 10000, 2) + "万" : tuiguangyeji; //推广业绩字符串
				this._fanYongMoneyTxt[i].text = StringU.substitute("{0}x{1}={2}", tuiguangyejiStr, fanyongbili, EnumToString.getPointBackNum(money, 2));
				totalList[i] = EnumToString.getPointBackNum(money, 2);
			}
			let total = totalList[0] + totalList[1] + totalList[2] + totalList[3] + totalList[4]; //全部代理返佣总金额
			this._viewUI.txt_total.text = StringU.substitute("返佣总合计：{0}+{1}+{2}+{3}+{4}={5}", totalList[0], totalList[1], totalList[2], totalList[3], totalList[4], total);
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_select:
					this._viewUI.box_btn.visible = !this._viewUI.box_btn.visible;
					break;
				case this._viewUI.img_ewm://二维码
					this._game.uiRoot.general.open(DatingPageDef.PAGE_TUIGUANG1)
					break;
				case this._viewUI.btn_record://提款记录
					this._game.uiRoot.general.open(DatingPageDef.PAGE_TIQUJILU)
					break;
				case this._viewUI.btn_help://推广帮助
					this._game.uiRoot.general.open(DatingPageDef.PAGE_TUIGUANGHELP, (page) => {
						page.dataSource = this.typeDaiLi;
					})
					break;
				case this._viewUI.btn_lq://领取
					if (!this._viewUI.txt_ktq.text || !parseInt(this._viewUI.txt_ktq.text)) {
						this._game.showTips("当前剩余可领取金额不足")
						return;
					}
					this._game.network.call_get_commission();
					break;
				case this._viewUI.btn_wxhy://分享微信好友
					this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENESESSION)
					break;
				case this._viewUI.btn_fxq://分享朋友圈
					this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENETIMELINE)
					break;
				case this._viewUI.box_no_share:
					WebConfig.copyTxt(WebConfig.gwUrl.toString());
					this._game.showTips("复制成功");
					break
			}
		}

		public close(): void {

			if (this._viewUI) {
				this._game.datingGame.dailiyonghuMgr.clear();
				this._game.datingGame.dailiyonghuMgr.off(DaiLiYongHuMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_OPRATE_SUCESS, this, this.onSucessHandler);
				this._fanYongBiLiTxt.length = 0;
				this._fanYongMoneyTxt.length = 0;
			}
			super.close();
		}
	}

	class TuiGuangMX extends ui.nqp.dating.component.TuiGuangMX_TUI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
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
			this.txt_title.text = "Lv." + data.agency_lv;
			this.txt_yjed.text = StringU.substitute("{0}-{1}", data.agency_min, data.agency_max);
			this.txt_fyvalue.text = data.agency_fytype == 2 ? StringU.substitute("返佣{0}%", data.agency_prec) : StringU.substitute("每万返佣{0}元", data.agency_prec);
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.index % 2 == 0 ? 1 : 2)
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.index * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	class FanShuiMX extends ui.nqp.dating.component.TuiGuangMX_TUI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
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
			this.txt_title.text = "Lv." + data.fs_lv;
			this.txt_yjed.text = StringU.substitute("{0}-{1}", data.fs_min, data.fs_max);
			this.txt_fyvalue.text = StringU.substitute("{0}%", data.fs_prec);
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.index % 2 == 0 ? 1 : 2);
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.index * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	//上周记录
	class FenXiangLastWeekT extends ui.nqp.dating.component.FenXiangT6UI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this._data = data;
			this.txt_selffy.text = "";
			this.txt_allfy.text = data.allfy.toString();
			this.txt_bet.text = data.allyj.toString();
			this.txt_nickname.text = data.nickname;
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.index * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	//记录(无限代理)
	class FenXiangRecord extends ui.nqp.dating.component.FenXiangT5UI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this._data = data;
			this.txt_time.text = Sync.getTimeStr(data.addtime * 1000);
			this.txt_money.text = data.money.toString();
			this.txt_type.text = data.rb_type.toString();
			this.txt_from_nickname.text = data.from_nikename;
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.index % 2 == 0 ? 1 : 2);
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.index * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	//记录(全民代理)
	class FenXiangRecord1 extends ui.nqp.dating.component.FenXiangT6UI {
		private _game: Game;
		private _data: any;
		private _isTween: boolean;
		private _itemX: number;
		constructor() {
			super();
			this._itemX = this.x;
		}
		/**
		 * 
		 * @param game 
		 * @param data 
		 */
		setData(game: Game, data: any) {
			this._data = data;
			this.txt_nickname.text = data.nickname;
			this.txt_bet.text = data.allyj.toString();
			this.txt_allfy.text = data.jishu.toString();
			this.txt_selffy.text = data.fy.toString();
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.index % 2 == 0 ? 1 : 2);
			this.visible = true;
			Laya.Tween.clearAll(this);
			if (!this._isTween) {
				this.visible = true;
				let x = this.x;
				this.x = this.width + 10;
				Laya.Tween.to(this, {
					x: x
				}, 500, Laya.Ease.linearIn, null, data.index * 200)
				this._isTween = true;
			} else {
				this.x = this._itemX;
			}
		}
	}

	class YongHuItemRender extends ui.nqp.dating.component.YongHuTUI {
		private _game: Game;
		private _data: any;
		setData(game: Game, data: any) {
			this._game = game;
			this._data = data;
			this.txt_name.text = data.nickname;
			this.txt_total.text = data.allyj.toString();
			this.txt_tallage.text = data.selfyj.toString();
			this.txt_count.text = data.regnum.toString();
			this.img_bg.skin = StringU.substitute(DatingPath.ui_dating_tongyong + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2)
		}
	}
}