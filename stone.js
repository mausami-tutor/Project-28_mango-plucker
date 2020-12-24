class Stone{
    constructor(x,y){
        this.stone=Bodies.circle(x,y,20)
        World.add(world,this.stone)
        this.stoneImage=loadImage("assets/stone.png")
        
        
    }
    
    display(){
        imageMode(CENTER)
       image(this.stoneImage, this.stone.position.x, this.stone.position.y, 50,50)
    }
}