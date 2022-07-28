class Enemy{
    constructor(x, y){
        this.enemy=createSprite(x, y,20,20)
        this.enemy.shapeColor = "blue";
        this.enemy.addAnimation("left", enemyLeft)
        this.enemy.addAnimation("right",enemyRight)
        this.enemy.addAnimation("back",enemyBack)
        this.enemy.addAnimation("front",enemyFront)
        this.enemy.scale=0.4


        enemyGroup.add(this.enemy)
    }
    wallCollide(){
        this.enemy.bounceOff(wallGroup)

        
        if(this.enemy.velocityX < 0){
            this.enemy.changeAnimation("left")
        }
    
        if(this.enemy.velocityX > 0){
            this.enemy.changeAnimation("right")
        }

        if(this.enemy.velocityY < 0){
            this.enemy.changeAnimation("back")
        }

        if(this.enemy.velocityY > 0){
            this.enemy.changeAnimation("front")
        }

        
    }

    static death(){
        enemyGroup.collide(spellGroup,function(e,s){
            var potionX=e.x
    
            e.destroy()
            s.destroy()

            createPotion(potionX)
        })
    }

   
} 

function createPotion(potionX){
    if(potionX >= 111 && potionX <= 251){
        potion1=new Potion(51, 250)
    }
    else if(potionX===1320){
        potion2=new Potion(1073, 314)
    }
}