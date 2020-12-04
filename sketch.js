
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall,dustbin,ground;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	paperBall=new Paper(75,300);
	ground=new Ground(600,380,1200,20);
	
	side1=new Dustbin(900,320,20,100);
	side2=new Dustbin(1100,320,20,100);
    side3=new Dustbin(1000,360,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  side3.display();
  side1.display();
  side2.display();
  ground.display();
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85}); 
		} 
	}


