
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
;
function preload()
{
	paperIMG=loadImage("paper.png");
	trashIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Paper(100,500,20,20);
	ball1.addImage(paperIMG);


	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(400,670,800,30,options);
	World.add(world,ground)

	bin = new Box(600,640,200,20);
	bin.addImage(trashIMG);
	//box2 = new Box(505,600,20,100);
	//box3 = new Box(700,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);

  //box1.display();
  //box2.display();
  //box3.display();

  bin.display();
  ball1.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}

