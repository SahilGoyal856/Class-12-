var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  // preload all animations and images to use for the sprites
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg = loadImage ("cloud.png")
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {
// create the canvas
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  // show the t-rex's y pos in the console window
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  // make the t-rex come down after jumping
  trex.velocityY = trex.velocityY + 0.8
  
  // make the ground infinite
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //make the trex's feelt be below the visible ground.
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 // gives a gap of 50 frames
 if(frameCount%50 ===0)
 {
 
 // make the clods spawn randomley on the canvas
 cloud=createSprite(600,100,40,10);
 cloud.addImage(cloudimg)
 cloud.scale=0.5
 cloud.y=Math.round(random(10, 100))
 cloud.velocityX=-3;}
}



