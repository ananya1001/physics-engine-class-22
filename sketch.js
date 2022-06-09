const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var groundoption={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,10,groundoption);
  World.add(world,ground);

  var balloption={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,balloption);
  World.add(world,ball);
  //console.log(object);
}

function draw(){
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}