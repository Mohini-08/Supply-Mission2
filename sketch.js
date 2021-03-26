var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG,package1Sprite, package1IMG;
var packageBody,packageBody1,ground
var line1,line2,line3;
var boxLeftBody, boxLeftSprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
   var object_options ={
	isStatic: true
}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package1Sprite=createSprite(400, 80, 10,10);
	package1Sprite.addImage(packageIMG)
	package1Sprite.scale=0.2

	package2Sprite=createSprite(330, 80, 10,10);
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    line1 = createSprite(width/2,height-50,200,20);
	line1.shapeColor = color("red");

	line2 = createSprite(510,610,20,100);
	line2.shapeColor = color("red");
   
	line3 = createSprite(310,610,20,100);
	line3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , { isStatic:false});
	World.add(world, packageBody);
	
	package1Body = Bodies.circle(width/2 , 200 , 10 , { isStatic:false});
	World.add(world, package1Body);
	
	package2Body = Bodies.circle(width/2 , 200 , 10 , { isStatic:false});
	World.add(world, package2Body);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



