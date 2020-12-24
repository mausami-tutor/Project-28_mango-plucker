class Tree{
    constructor(x,y){
        
        this.tree=Bodies.rectangle(x,y,100,480,{isStatic:true})
        World.add(world,this.tree)
        this.image=loadImage("assets/tree.png")

    }
    display(){
        imageMode(CENTER)
        image(this.image,this.tree.position.x, this.tree.position.y,400,500)
        
    }
}