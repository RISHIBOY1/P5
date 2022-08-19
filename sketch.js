var ball;


function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,20,20);
  ball.shapeColor = "yellow";
}

function draw() {
  background(220);
  if(keyDown("left")){
    ball.x = ball.x - 3
  }
  drawSprites();
}

