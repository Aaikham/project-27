const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var paper,dustbin;
function preload(){
    dustbin=loadImage("images/dustbingreen.png")
}
function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    
    

    ball = new Ball(200,100,20);
   
    

    box1 = new Box(700+250,height-50,20,100);
    box2 = new Box(920+250,height-50,20,100);
    box3 = new Box(920+250,height-150,20,100);

    /* wall1 = new Box(width+10,height/2,20,height);
    wall2 = new Box(-10,height/2,20,height); */
    box5 = new Box(810+250,height-20,200,20);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();

    //box1.display();
    //box2.display();
   // box3.display()
    ball.display()
    imageMode (CENTER)
  image(dustbin,920+170,height-100,170,170)
    

    

   

   // box5.display();

   
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.05})
    }
}