var box;
function setup(){
  createCanvas(400,400);
box = createSprite(200,200,30,30);
}

function draw() 
{

  background(237, 226, 7);
if(keyIsDown(RIGHT_ARROW)){
background(235, 52, 52)
}
if(keyIsDown(LEFT_ARROW)){
  background(124,124,214);
}
if(keyIsDown(DOWN_ARROW)){
  background(230, 50, 197);
}
if(keyIsDown(UP_ARROW))
background(237, 109, 12);
drawSprites();

}




