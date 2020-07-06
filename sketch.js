
var paddle
var BrickGroup

var FORM = 0
var PLAY = 1
var END = 2
var gameState = PLAY

var score = 0
///backgrounds
var bg1,bg2,bg3,bg4
var bg5,bg6,bg7
/// Bricks 
var b1,b2
var b3,b4,b5,b6

var backgroundImg

function preload(){
// for backgrounds
bg1 = loadImage("Images/CrossHill.bg.png")
bg2 = loadImage("Images/HalloweenImage.jpg")
bg3 = loadImage("Images/HalloweenImage2.jpg")
bg4 = loadImage("Images/happy-halloween.jpg")
bg5 = loadImage("Images/MoonBg.jpg")
bg6 = loadImage("Images/spacebg.jpg")
bg7 = loadImage("Images/WarImage.jpg")

// For Bricks

b1 = loadImage("Images/DARKBLACKBRICK.png")
b2 = loadImage("Images/OrangishBrick.png")
b3 = loadImage("Images/RED.BRICK.png")
b4 = loadImage("Images/stickIMG.png")
b5 = loadImage("Images/WhiteBrick.png")
b6 =  loadImage("Images/Yellowbrick.png")

// for paddle 
p1 = loadImage("Images/Paddle.jpg")
p2 = loadImage("Images/Paddle2.jpg")

////remaing
restart = loadImage("Images/restartButton.png")
play =  loadImage("Images/playButton.png")

ufo = loadImage("Images/Ufo.jpg")
}

function setup() {

createCanvas(1200,550);

backgroundImg = createButton("back Image")
backgroundImg.position(150,200)  

BrickGroup = new Group();

paddle = createSprite(700,480,20,20)

var Paadle = Math.round(random(1,2))
switch(Paadle) {
        case 1: paddle.addImage(p1);
                break;
        case 2: paddle.addImage(p2);
                break;
       
        default: break;
      }
      paddle.scale = 0.1


}

function draw() {


  background(bg7); 
 










 spawnBricks(); 

  backgroundImg.mousePressed(() =>{

    bg = createSprite(600,270,1200,550)
   

    var rand = Math.round(random(1,7));

    switch(rand) {
      case 1: bg.addImage(bg1);
              break;
      case 2: bg.addImage(bg2);
              break;
      case 3: bg.addImage(bg3);
              break;
      case 4: bg.addImage(bg4);
              break;
      case 5: bg.addImage(bg5);
              break;
      case 6: bg.addImage(bg6);
              break;
      case 7: bg.addImage(bg7);
              break;
      default: break;
    }



  })


  drawSprites();
}


function spawnBricks(){


if(frameCount % 110 === 0){


var rad = random(200,270)       
var brick = createSprite(1200,random(100,270),30,10)
brick.velocityX = -3;

var Bricks = Math.round(random(1,6));

switch(Bricks) {
        case 1: brick.addImage(b1);
                break;
        case 2: brick.addImage(b2);
                break;
        case 3: brick.addImage(b3);
                break;
        case 4: brick.addImage(b4);
                break;
        case 5: brick.addImage(b5);
                break;
        case 6: brick.addImage(b6);
                break;
       
        default: break;
      }

      
   brick.scale = 0.5;
   brick.lifetime = 400;
                


  BrickGroup.add(brick);
  
   

}






}






