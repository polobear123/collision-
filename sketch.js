var mrect,frect
function setup() {
  createCanvas(1200,800);
  mrect=createSprite(400, 200, 80, 30);
  frect=createSprite(600,400,50,80);
  mrect.shapeColor = "green";
  frect.shapeColor = "green";
}

function draw() {
  background(0); 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY; 
  if(mrect.x-frect.x<frect.width/2+mrect.width/2 &&
    frect.x-mrect.x<frect.width/2+mrect.width/2 &&
    mrect.y-frect.y<frect.height/2+mrect.height/2 &&
    frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor = "yellow";
    frect.shapeColor = "yellow";
  }
  else{
  mrect.shapeColor = "green";
  frect.shapeColor = "green";
  }
  drawSprites();
}