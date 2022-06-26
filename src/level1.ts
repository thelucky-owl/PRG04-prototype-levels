import * as PIXI from 'pixi.js'
import { Sprite, Texture } from 'pixi.js'
import { Enemy } from './enemy'
import { Game } from './game'

export class Level1 extends Sprite{
    public enemyTextures: PIXI.Texture[]=[]
    public enemyArray : Enemy [] = []
    public exit:PIXI.Sprite
    private background
    private game:Game

    constructor(bgSprite:PIXI.Texture, game:Game,enemyTexture:PIXI.Texture[],exit:Texture){
        super()
        this.game = game
        this.background  = new PIXI.Sprite(bgSprite)
        this.background.scale.set(1.4)
        this.game.underLayer.addChild(this.background)
        this.enemyTextures = enemyTexture
        for(let i = 0; i < 1; i++){
            let enemy = new Enemy(this.enemyTextures, this.game)
            this.game.underLayer.addChild(enemy)
            this.enemyArray.push(enemy)
        }
        this.exit = new PIXI.Sprite(exit)
        this.exit.scale.set(1,0.2)
        this.exit.x = 400
        this.exit.y = 0
        this.game.underLayer.addChild(this.exit)

    }
    destroyAll(){
        this.exit.destroy()
        this.background.destroy()
        for(const enemy of this.enemyArray){
            this.game.level1.enemyArray = this.game.level1.enemyArray.filter(f => f != enemy)
                enemy.destroy()
        }
        this.destroy()
    }
    
}