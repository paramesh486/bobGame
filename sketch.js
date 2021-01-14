const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var x=0;


function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    moon = new Moon(1000, 100, 200, 200)
    moon2=new Moon(750,400,400,400);
    squarepants = new Spongebob(750,400, 100, 150)
    ground = new Ground(200,height,400,20)
     imoon = createSprite(1000,100,100,100)
      imoon.visible=false;
     patrick=new SitingPat(900,250,100,150);
     squid=new Squid(450,200,200,250)
}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(50);
    textFont("Comic Sans MS");
    fill ('red')
    text(mouseX+"   "+mouseY,50,50)
       drawSprites();
        ground.display();
    
    if(x==0){
            moon.display()
            if(mousePressedOver(imoon)){
                x=1;
               
                }
        }
       
       

     
      
     if(x==1){
            moon.removeMoon();
            patrick.display();
            squid.display();
            text("click squid to save patrick",400,400)
            isquid=createSprite(450,200,100,100);
            isquid.visible=false;
            if(mousePressedOver(isquid)){
                x=2;
               
                }

        }
       if(x==2)
       {
            squid.removeSquid();
            text("Yay! You've Saved Me! Thank You!😀",300,600)
       }
        
         
        squarepants.display()
    }