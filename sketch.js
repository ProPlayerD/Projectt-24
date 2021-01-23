
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var dustbin1;
var barrier1,barrier2

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(500,450);

	paper1 = new Paper(150,345);

	dustbin1 = new Dustbin(720,380);

	Engine.run(engine);

	barrier1 = createSprite(780,340,100,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();

  dustbin1.display()
 
  paper1.display();
}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:190,y:-100})

	}
}



