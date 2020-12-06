var monkey, monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 600)

  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width/2
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime = 0;
}


function draw() {
background("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50)
 
  if(ground.width/2){
     ground.x = 300;
     }
  
  if(keyDown("space") && monkey.y >= 314){
      monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  food();
  obstacles();

  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(700, Math.round(random(250, 200)), 20, 20) 
    banana.addImage(bananaImage)
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.setLifetime = 800;
    foodGroup.add(banana)
  }
  }

 function obstacles(){
   if(frameCount % 300 === 0){
  obstacle = createSprite(700, 325, 20, 20)
  obstacle.velocityX = -5
     obstacle.addImage(obstacleImage)
     obstacle.lifetime = 700;
     obstacle.scale = 0.1;
     obstacleGroup.add(obstacle)
   }
   
 }



