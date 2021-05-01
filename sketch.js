var  wall, bullet, thickness;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);

  speed =  random(223,321);
  thickness =  random(22,83);
  weight = random(30,52);

  bullet = createSprite(50, 200, 60, 50);
  bullet.shapeColor = "white";
  wall = createSprite(width-100,200, 60, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0); 
  
  bullet.debug = true;
  bullet.velocityX = speed;


  if (hasCollided(bullet, wall)) {
    bullet.velocityX=0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage>10){
      bullet.shapeColor = color(255, 0 , 0);
    }

    if (damage<10){
      bullet.shapeColor = color(0, 255 , 0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
    return false
  }
}