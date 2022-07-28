class Player{
    constructor(){
      this.player=createSprite(1320,height-40,20,20)
      this.player.addAnimation("left", wizardLeft)
      this.player.addAnimation("right",wizardRight)
      this.player.addAnimation("back",wizardBack)
      this.player.addAnimation("front",wizardFront)
      this.playerDirection="left"
      this.player.debug = true;
      this.player.scale=0.8;
      
    }

    movement(){
      if(keyDown(UP_ARROW)){
       this.player.y-=3
       this.player.changeAnimation("back");
      this.playerDirection="up"
      }
    
      if(keyDown(DOWN_ARROW)){
        this.player.y+=3
        this.player.changeAnimation("front");
        this.playerDirection="down"
      }
    
      if(keyDown(RIGHT_ARROW)){
        this.player.x+=3
        this.player.changeAnimation("right");
        this.playerDirection="right"
      }
    
      if(keyDown(LEFT_ARROW)){
        this.player.x-=3
        this.player.changeAnimation("left");
        this.playerDirection="left"
      }

      this.player.collide(wallGroup)
    }

    attack(){
      if(keyWentDown("space")){
        var spell=createSprite(this.player.x,this.player.y,20,20)
        
        switch(this.playerDirection){
          case "up": spell.velocityY=-4
                      break

          case "down": spell.velocityY=4
                      break

          case "left": spell.velocityX=-4
                      break
                      
          case "right": spell.velocityX=4
                      break
        }
        
        spellGroup.add(spell)
      }

    }
}