const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var up
var right2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball= Bodies.circle(200,150,20,{restitution:1.0});
 World.add(world,ball);

 up=createImg("up.png")
 up.position(20,30)
 up.size(50,50)
 up.mouseClicked(vforce)

 right2=createImg("right.png")
 right2.position(220,30)
 right2.size(50,50)
 right2.mouseClicked(hforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);}


function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

ellipse(ball.position.x, ball.position.y,20,20)

}

function vforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}


function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}