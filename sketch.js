var trex;

function setup() {
  createCanvas(600, 200);
  trex = createSprite(100, 100, 20, 20);
}

function draw() {
  background("black");

  if (keyDown("right")) {
    trex.x+=7;
  }

  if (keyDown("left")) {
    trex.x-=7
  }
  
  if (keyDown("up")) {
    trex.y-=7
  }
 

  if (keyDown("down")) {
    trex.y+=7
  }
   



  drawSprites();
}

