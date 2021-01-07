const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

var ground;
var base1;

var polygon;
var chain;

// on base1
var box1Group;
var box1Group = [];

var box2;
var box2Group = [];

var box3;
var box3Group = [];

var box4;
var box4Group = []; 

// on base2
var con1;
var con1Group = [];

var con2;
var con2Group = [];

var con3;
var con3Group = [];

var backgroundImage;
    
function preload ()
{
  getTime ();
  polygonImg = loadImage ("polygon.png");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon_options = 
                      {
                         restitution : 0.8,
                         friction : 0.5,
                         density : 1.2
                      }
    polygon = Bodies.circle(50,200,40,polygon_options); 
    World.add(world,polygon); 
    chain = new Chain (polygon, { x: 100, y : 200 })
    
    ground = new Ground (1000,390,2000,20);
    base1 = new Ground (550,300,450,20);
    base2 = new Ground (960,180,300,20);
 
    for (var i = 350; i < 760; i+=30)
    { 
      box1 = new Box (i,270,30,40); 
      box1Group.push (box1); 
    }

    for (var i = 380; i < 730; i+=30)
    { 
      box2 = new Box (i,230,30,40); 
      box2Group.push (box2); 
    } 

    for (var i = 410; i < 700; i+=30)
    { 
       box3 = new Box (i,190,30,40); 
       box3Group.push (box3); 
    } 

    for (var i = 440; i < 680; i+=30)
    { 
       box4 = new Box (i,160,30,40); 
       box4Group.push (box4); 
    }  

    // base2
    for (var i = 840; i < 1100; i+=30)
    { 
       con1 = new Box (i,175,30,40); 
       con1Group.push (con1); 
    }  

    for (var i = 870; i < 1060; i+=30)
    { 
       con2 = new Box (i,145,30,40); 
       con2Group.push (con2); 
    }  

    for (var i = 900; i < 1030; i+=30)
    { 
       con3 = new Box (i,115,30,40); 
       con3Group.push (con3); 
    } 



}

function draw()
{ 
    if (backgroundImage)
    background(backgroundImage);
    background("pink")
    Engine.update(engine);

    push ();
    imageMode (CENTER);
    image (polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    pop ();

    textSize (20);
    text ("Score - " + score,60,50);


    ground.display ();
    base1.display ();
    base2.display ();
    chain.display ();
    
    for (i = 0; i < box1Group.length; i++)
    {
      push ();
      fill ("green");
      box1 = box1Group [i];
      box1.display ();
      pop ();
    }
    
    for (i = 0; i < box2Group.length; i++)
    {
      push ();
      //fill ("blue");
      box2 = box2Group [i];
      box2.display ();
      pop ();
    } 

    for (i = 0; i < box3Group.length; i++)
    {
      push ();
     // fill ("red");
      box3 = box3Group [i];
      box3.display ();
      pop ();
    } 

    for (i = 0; i < box4Group.length; i++)
    {
      push ();
      //fill ("purple");
      box4 = box4Group [i];
      box4.display ();
      pop ();
    } 

    for (i = 0; i < con1Group.length; i++)
    {
      push ();
     // fill ("green");
      con1 = con1Group [i];
      con1.display ();
      pop ();
    } 

    for (i = 0; i < con2Group.length; i++)
    {
      push ();
     // fill ("blue");
      con2 = con2Group [i];
      con2.display ();
      pop ();
    } 

    for (i = 0; i < con3Group.length; i++)
    {
      push ();
      //fill ("red");
      con3 = con3Group [i];
      con3.display ();
      pop ();
    }
}

 function mouseDragged ()
 {
     Matter.Body.setPosition (polygon, {x: mouseX, y: mouseY})
 } 

 function mouseReleased ()
 {
     chain.fly ()
 } 

 function keyPressed ()
{
    if (keyCode === 32)
    {
      chain.attach (polygon);
    }
} 
async function getTime()
{
  var response = await fetch ("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13); 
  console.log(hour);

  if(hour >= 06 && hour <= 18)
  {
    backgroundImage ("pink");
  } else
  {
    backgroundImage ("brown");
  }

}