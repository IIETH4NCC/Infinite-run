var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin;
var gamestate="run";
var bomb;
var score=0;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
camera.on();
camera.isActive();


camera.zoom=1;


//coin
coin=createSprite(200,-20,10,10);
coin.addImage(coinImg);

coin.scale=0.25;

//bomb
bomb=createSprite(100,-40,10,10);
bomb.addImage(bombImg);
bomb.scale=0.1;

leftBoundary=createSprite(0,0,50,800);
leftBoundary.visible = false;
rightBoundary=createSprite(410,0,50,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  

//gamestate for run
   if (gamestate=="run"){
   boy.x = World.mouseX;
   coin.velocityY=1.3;
   bomb.velocityY=1.3;
   path.velocityY = 4;
   } 
  //gamestate for over
   if (gamestate=="over"){
   boy.x = World.mouseX;
   coin.velocityY=0;
   bomb.velocityY=0;
   path.velocityY = 0;
   coin.y=-20
   bomb.y=-20
   } 

 //code to reset coin .y
 if(coin.y>400){
   coin.y=-20; 
 }
 //code when boy touches coin
 if(coin.isTouching(boy)){
   coin.y=-20;
   coin.x=(Math.floor((Math.random() * 300) + 80));
   score+=1; 
 }
 text("Score: ",score,200,200); 
 //code to reset bomb .y
 if(bomb.y>400){
   bomb.y=-40
 } 
 //code when boy touches bomb
 if(bomb.isTouching(boy)){
   gamestate=="over"
   bomb.x=(Math.floor((Math.random() * 260) + 100));
   bomb.y=-40;
   score-=1;
 }
 

 console.log(score);


 
 edges= createEdgeSprites();
 //boy collision
 boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/4;
  }

  


  
  drawSprites();
}
