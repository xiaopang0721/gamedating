/**
* name 公告管理器
*/
module gamedating.managers {
	const MAX_GLOD_NUM = 100;
	export class FlyGlodMgr extends gamecomponent.managers.BaseMgr {
		constructor(game: Game) {
			super(game)
			this._delta = 0;
		}

		private _refAsset: RefAsset;
		private _glodCells: GlodCell[] = [];
		private _stageWidth ;
		private _stageHeight ;
		private _widthRate:number = 1;

		layout(width:number, height:number) {
			this._widthRate = this._stageWidth / width;
			this._stageWidth = width;
			this._stageHeight = height;
		}

		show(times:number = 1, width:number, height:number) {
			if (!this._refAsset) {
				this._refAsset = RefAsset.Get(Path.ui_atlas_effect + 'flycoin.atlas')
				this._refAsset.retain();
			}
			this._stageWidth = width;
			this._stageHeight = height;
			let refAsset = this._refAsset;			
			if (!refAsset.parseComplete) {
				refAsset.once(LEvent.COMPLETE, this, () => {
					this.onStart(times);
				});
			}
			else {
				this.onStart(times);
			}
		}
		
		private onStart(times) {
			for (var i = 0; i < times; i++) {
				Laya.timer.once(100 * i, this, ()=>{this.start()});				
			}
		}

		private start() {
			for (let index = 0; index < MAX_GLOD_NUM; index++) {
				let glodcell = GlodCell.create(this._stageWidth, this._widthRate);
				this._glodCells.push(glodcell);
			}
		}

		update(diff: number) {
			super.update(diff);
			if (Camera.ins.map_width_px != this._stageWidth || Camera.ins.map_height_px != this._stageHeight) {
				Camera.ins.setMapSize(this._stageWidth, this._stageHeight);
				Camera.ins.update();
			}
			this._game.uiRoot.top.graphics.clear();
			for (let index = 0; index < this._glodCells.length; index++) {
				let glodcell = this._glodCells[index];
				if (glodcell.isDestroy) {
					this._glodCells.splice(index, 1);
					ObjectPools.free(glodcell);
					index --;
				} else {
					glodcell.onDraw(diff, this._game.uiRoot.top.graphics, this._stageWidth, this._stageHeight, this._widthRate);
				}
			}
			if (this._widthRate != 1)
				this._widthRate = 1;
		}

		clear(fource?: boolean) {
			Laya.timer.clearAll(this);
			for (let index = 0; index < this._glodCells.length; index++) {
				let glodcell = this._glodCells[index];
				if (glodcell) ObjectPools.free(glodcell);
			}
			if (this._refAsset) {
				this._refAsset.offAll();
				this._refAsset.release(true);
				this._refAsset = null;
			}
			this._glodCells.length = 0;
		}
	}

	class GlodCell implements IPoolsObject {
		isDestroy: boolean = false;
		private _stageWidth ;
		private _stageHeight ;
		private _widthRate:number = 1;
		private _curScale: number;
		private _curRotation: number;
		private _acceleration: number;//加速度
		private _duration: number = 0;
		private _textures: Texture[] = [];
		private _curTexture: Texture;
		private _bornPos: Vector2 = new Vector2();//出生的位置
		private _curPos: Vector2 = new Vector2();//当前位置

		poolName: string = "GlodCell";
        /**
         * 进池 （相当于对象dispose函数）
         */
		intoPool(...arg: any[]): void {
			this.dispose();
		}
        /**
         * 出池 （相当于对象初始化函数）
         */
		outPool(...arg: any[]): void {

		}

		static create(width:number, widthRate:number): GlodCell {
			let obj = ObjectPools.malloc(GlodCell) as GlodCell;
			obj.create(width, widthRate);
			return obj;
		}

		private create(width:number, widthRate:number) {
			this.isDestroy = false;
			this._stageWidth = width;
			this._widthRate = widthRate;
			this.initTexture();
		}

		private initTexture(): void {
			let texture: Texture;
			let url = Path.ui_atlas_effect + 'flycoin.atlas';
			let atlas = Loader.getAtlas(url);
			for (let index = 0; index < atlas.length; index++) {
				let a: string = atlas[index];
				this._textures[index] = Loader.getRes(a);
			}
			this.calInfo();
		}

		private calInfo(): void {
			this._duration = 0;
			//隨機開始x
			this._curPos.x = this._bornPos.x = MathU.randomRange(0, this._stageWidth * this._widthRate);
			//隨機開始y
			this._curPos.y = this._bornPos.y = MathU.randomRange(-720, -360);
			//随机一个初始缩放 
			this._curScale = MathU.randomRange(0.7, 1.2);
			//随机一个初始旋轉角度 
			this._curRotation = MathU.getAngleByRotaion(MathU.randomRange(0, 360));
			//随机貼圖
			this._curTexture = this._textures[MathU.randomRange(0, this._textures.length - 1)];
			//随机加速度
			this._acceleration = Math.random() * 3 + 0.5;
		}

		//缩放心跳
		private updateRotation(): void {
			if (this.isDestroy) 
				return;
			this._curRotation += (Math.PI / 180) * 5;
		}

		onDraw(diff: number, g: Graphics, width:number, height:number, widthRate:number) {
			if (!this.isDestroy)
				this.updateRotation();
			else
				this.isDestroy = true;
			let texture = this._curTexture;
			let tw: number = texture.sourceWidth;
			let th: number = texture.sourceHeight;
			let matrix = new Laya.Matrix();

			this._duration += diff;
			this._curPos.x = this._curPos.x * widthRate;
			this._curPos.y = this._curPos.y + this._acceleration * this._duration * (diff/1000);

			if (this._curPos.y >= height)
				this.isDestroy = true;

			matrix.tx = -tw / 2;
			matrix.ty = -th / 2;
			matrix.scale(this._curScale, this._curScale);
			matrix.rotate(this._curRotation)
			matrix.tx += Camera.ins.getScenePxByCellX(this._curPos.x);
			matrix.ty += Camera.ins.getScenePxByCellY(this._curPos.y);
			g.drawTexture(texture, 0, 0, tw, th, matrix);
		}

		private dispose() {
			this._textures.length = 0;
			this._curScale = 0;
		}
	}
}