class Mango{
    constructor(x,y){
        this.body= Bodies.circle(x,y,10, {isStatic: true})
        World.add(world, this.body)
        this.image=loadImage("assets/mango.png")

    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x,this.body.position.y, 40,40)
    }
}