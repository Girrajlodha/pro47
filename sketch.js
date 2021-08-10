var spaceship,background1,gameoverimg,background1;
var enemy1img,enemy2img,enemy3img,spaceshipimg, backgroundImage,missileimg;
var score
var START = 1;
var PLAY = 2;
var END = 0;
var gameState =START
var b2img

function preload(){

  
 // backgroundImage = loadImage("b2.jpg");
  gameoverimg= loadImage("gameover.png")
  missileimg = loadImage("missile.png");
  spaceshipimg = loadImage("spaceship.png");
  enemy1img = loadImage("enemy1.png");
  backgroundImage=loadImage("background.jpg")
  enemy2img = loadImage("enemy2.png");
  enemy3img = loadImage("enemy3.png");
  b2img=loadImage("bg3.jpg")
}



function setup() {
  createCanvas(650, 600);
  
  //creating background
  background1 = createSprite(0,-100,0,0);
  //background1.addImage(backgroundImage);
  background1.scale = 2
  
  // creating astronot to shoot beam
  spaceship = createSprite(1250,500,20,50);
  spaceship.addImage(spaceshipimg); 
  spaceship.scale = 0.3;
  
  enemyGroup = new Group();
  
  
  missileGroup = new Group();
  
  score=0
 
  
}

function draw() {
  background(0)
  if (gameState === START)
  {
    background("black");
    

    
    
    textSize(20);
    fill("yellow")
    text("Year 2500...", 140,200);     
    text("Some asteroids are comming towords Earth",200,240);
    text("Your a space fighter.",200,280);
    text("Help the people and Earth !",200,320);
    text("press'space' to shoot",200,360);
    text("use mouse to move",200,400);
    text("press 's' to start game.",250,440);
    textSize(23)
    fill("white")
    text("ENJOY THE GAME !",190,500);
    
    
    if(keyDown("S"))
    {
      gameState = PLAY;
    }
  }
if(gameState=== PLAY){
  background(backgroundImage)

  textSize(40)
 
  text("SCORE:"+score,230,40)
  

  spaceship.x = World.mouseX
  if(gameState=== PLAY){
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createMissile();
    
  }
  enemys();
   
   if(missileGroup.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    missileGroup.destroyEach();
    score=score+1
  }else if(enemyGroup.isTouching(spaceship)){
    gameState= END
  }}}
 if(gameState===END){
  background(b2img)
  textSize(45)
  fill("red")
  text("You defeat!",200,340)
  text("Game Over!",200,380)
 // background1.addImage(gameoverimg)
 // background1.scale=0.5
 // background1.x=325
 // background1.y=300
  enemyGroup.setLifetimeEach(-1)
  enemyGroup.setVelocityXEach(0)

  
 }
 
  
  drawSprites();

}


function enemys(){
  
  if(World.frameCount%80===0){ 
   enemy=createSprite(400,100,20,20);
   enemy.scale=0.8;
   r=Math.round(random(1,3)); 
   if(r ==1 ) {
   enemy.addImage(enemy1img);
   } else if (r == 2){
   enemy.addImage(enemy2img)
   } else if (r == 3){
   enemy.addImage(enemy3img)
   } 
    enemy.x=Math.round(random(0,600));
    enemy.velocityY=7;
    enemy.setlifetime=100;
    enemy.debug=false
    enemy.setCollider("circle",-4,0,40)
    enemyGroup.add(enemy);
 }
 }
   

 function createMissile() {
  var missile= createSprite(1250, 220, 60, 10);
  missile.addImage(missileimg);
  missile.x =spaceship.x;
  missile.y=spaceship.y-63;
  missile.velocityY = -20;
  missile.lifetime = 400;
  missile.scale = 0.2;
  missileGroup.add(missile);
 
  return missile;
 }