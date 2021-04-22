var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 50);
 fixedRect.shapeColor="blue"
 fixedRect.debug=true;


 movingRect= createSprite(300,300,80,30);
movingRect.shapeColor="purple"
movingRect.debug=true;
}

function draw() {
  background("black");  
  drawSprites();
movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
 movingRect.shapeColor="red"; 
 textSize(30);
 fill("white");
 text("hello",400,200);
}
else{
 movingRect.shapeColor="purple"; 
}
}