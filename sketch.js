const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint;

var engine, world
var angle =45
var balls = [];
var buckets = []

var score = 0;



function setup(){
  createCanvas(1200,800)

  engine = Engine.create()
  world = engine.world


  bowl = new Bowl(200,200,20,200)

  bucket1 = new Bucket(800,500,5,200)
  bucket2 = new Bucket(1050,500,5,200)
  bucket3 = new Bucket(900,600,160,50)

 

 // connect = new Connect(bowl.body,bowl1.body)


}

function draw(){
  background(0)
  Engine.update(engine)

  text("SCORE:  " + score, 300,200)

  text("Press space to rotate the box",200,20)
  text("Press D to stop rotation ",200,40)

  bucket1.display()
  bucket2.display()
  bucket3.display()
  
  if(frameCount%10===0){
ball = new Ball(100,-100,40)
   // ball = new Ball(random(width),-100,20)
    balls.push(ball)
  }
  

  // rotate the body
  if(keyCode===32){
  Matter.Body.setAngle(bowl.body, angle);
  Matter.Body.setAngularVelocity(bowl.body, 0.15);
 
  
  angle = angle+ 5

  }
//stop rotating the body
  else if (keyCode===68){
 Matter.Body.setAngularVelocity(bowl.body,0)
  }

  //collision detection

  bowl.display()
 




for(var i=0;i< balls.length;i++){
  balls[i].display();
  var collision = Matter.SAT.collides(bowl.body,balls[i].body)
  if(collision.collided){
    Matter.Body.setVelocity(balls[i].body,{
      x:10,
      y:-20
    })
    score = score+1;
  }
  
}
//connect.display()

}

