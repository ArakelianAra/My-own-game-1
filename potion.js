class Potion{
    constructor(x, y){
        this.potion=createSprite(x, y,20,20)
        this.potion.shapeColor = "blue";
        //this.potion.addAnimation("left", potionLeft)   
        //this.potion.scale=0.4
        potionGroup.add(this.potion)
    }
    
}