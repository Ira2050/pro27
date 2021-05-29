
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roofObj;
var rope1,rope2,rope3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(400,600,100);
	bob2 = new bob(300,600,100);
	bob3 = new bob(200,600,100);
	bob4 = new bob(500,600,100);
	bob5 = new bob(600,600,100);
	
	roofObj = new roof(400,100,650,50);

	rope1 = new Rope(bob1,{x:400, y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObj.display();
  rope1.display();
  
 // drawSprites();
 
}



