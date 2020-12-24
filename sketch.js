
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var chain

function preload()
{
	boyImage=loadImage("assets/boy.png")
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(width/2, height-10, width, 20)
	tree1= new Tree(800,340)
	stone1=new Stone(350,400)
	var options={
		bodyA: stone1.stone,
		pointB: {x:350, y: 470},
		stiffness: 0.06,
		length:15
	}
	chain= Constraint.create(options)
	World.add(world, chain)

	mango1=new Mango(800,300)
	mango2=new Mango(700,300)
	mango3=new Mango(800,200)
	mango4=new Mango(700,200)
	mango5=new Mango(900,300)
	mango6=new Mango(900,200)
	Engine.run(engine);
  
}


function draw() {
 
  background(255);
 
  ground1.display()
  tree1.display();

  imageMode(CENTER)
  image(boyImage, 400,530, 150,250)
	
  if(chain.bodyA){
	strokeWeight(4)
 	line(stone1.stone.position.x,stone1.stone.position.y, 350, 470)
  }
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone1.display()
  detectCollision(stone1, mango1)
  detectCollision(stone1, mango2)
  detectCollision(stone1, mango3)
  detectCollision(stone1, mango4)
  detectCollision(stone1, mango5)
  detectCollision(stone1, mango6)
 // drawSprites();
 
}
function mouseDragged(){
	stone1.stone.position.x=mouseX
	stone1.stone.position.y=mouseY
}
function mouseReleased(){
	chain.bodyA= null

}

function detectCollision(lestone, lmango){
	stonepos=lestone.stone.position
	mngopos=lmango.body.position

	
	var distance= dist(stonepos.x, stonepos.y, mngopos.x, mngopos.y)
	
	if(distance <= (lestone.r+lmango.r)){
		Body.setStatic(lmango.body,false)
		
	}
	console.log(lmango)
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(stone1.stone, {x: 350, y: 470})
		chain.bodyA= stone1.stone
	}
}

