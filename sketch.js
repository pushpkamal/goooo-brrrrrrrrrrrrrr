
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var radius = 40;
var ground,ground1,ground1,ground;
var bin_wall;




function setup() {
  createCanvas(1600, 700);



  engine = Engine.create();
  world = engine.world;

  var ball_options={
		isStatic:false,
		restitution:0.08,
		friction:0.7,
		density:1.2
	}

 
 
  ball=Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball);
   
  
  ground =new Ground(width/2,670,width,20);

  bin_wall1 = new Ground(1100,600,20,120);
  bin_wall2 = new Ground(1350,600,20,120);


  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();

  bin_wall1.show();
  bin_wall2.show();

  Engine.update(engine);

  
  

}
function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
  }
}




  



