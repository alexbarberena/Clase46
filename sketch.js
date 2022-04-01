var sec1,sec2,sec3,sec4,sec5;

var alex;

var ld1,ld2,ld3;

var backgroundImage;



function preload(){

  backgroundImage=loadImage("images/background.jpg");

}

function setup(){
    createCanvas(displayWidth,displayHeight);


    //Creando los sprites de los personajes

    alex=createSprite(715,815,30,30);
    alex.shapeColor="white";

    ld1=createSprite(displayWidth-100,315,30,30);
    ld1.shapeColor="red";
    ld2=createSprite(300,365,30,30);
    ld2.shapeColor="red";
    ld3=createSprite(835,380,30,30);
    ld3.shapeColor="red";

   createEdgeSprites();

}

function draw(){
     background(backgroundImage);
     console.log("y:" + alex.y);
     console.log("x:" + alex.x);

     
     if(keyDown(UP_ARROW)){

        alex.y=alex.y-5;

     }

     if(keyDown(DOWN_ARROW)){

        alex.y=alex.y+5;

     }

     if(keyDown(RIGHT_ARROW)){

        alex.x=alex.x+5;

     }

     if(keyDown(LEFT_ARROW)){

        alex.x=alex.x-5;

     }
     /*
     ld1.velocityX=-2;
     ld1.velocityY=-2;

     ld2.velocityX=-2;
     ld2.velocityY=-2;

     ld3.velocityX=-2;
     ld3.velocityY=-2;*/


     drawSprites();
}