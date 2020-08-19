var movingRect,fixRect


function setup() {

  createCanvas(800,400);
  movingRect=createSprite(200,200,50,20);
  movingRect.shapeColor="green";
  fixRect=createSprite(250,250,50,10);
  fixRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  drawSprites();
  if(movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2
    && fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2
    &&movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2
    && fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2 )
  {
     movingRect.shapeColor="red";
     fixRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
     fixRect.shapeColor="green";
  }
}