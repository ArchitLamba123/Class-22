const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies


function setup() {
  createCanvas(800,400);
  
  eng=Engine.create();
  world= eng.world;
var objectOptions= { 
  isStatic:true
}
  object = Bodies.rectangle(390,400,800,30,objectOptions)
  World.add(world,object)

  var ballOptions= { 
    restitution:1
  }
ball = Bodies.circle(390,200,30,ballOptions)
    World.add(world,ball)
  console.log(ball)
  console.log(ball.position.x)
  console.log(ball.position.y)
 
}

function draw() {
  background("yellow");  
 Engine.update(eng)
  rectMode(CENTER)
  rect(object.position.x,  object.position.y, 800, 30)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30)
}
