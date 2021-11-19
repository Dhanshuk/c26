const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball,ball2;
var rope,rope1;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }

  var ball_options1 = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,300,20,ball_options1);
  World.add(world,ball2);
  
  rope = Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.1
  })
  World.add(world,rope);

  rope1 = Constraint.create({
    bodyA:ball,
    bodyA:ball2,
    length:100,
    stiffness:0.1
  })
  World.add(world,rope1);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  stroke(255);
  strokeWeight(2);
  line(rope.pointA.x,rope.pointA.y,ball2.position.x,ball2.position.y)

  stroke(255);
  strokeWeight(2);
  line(rope1.pointA.x,rope1.pointA.y,ball.position.x,ball.position.y)
 
 

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();

  ellipse(ball2.position.x,ball2.position.y,20);
  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


