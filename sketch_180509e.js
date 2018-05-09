var img,tt,brow,eye;
var move,Move;
move=200;
Move=200;
function setup() {
  
  createCanvas(750,541);
  

  img=loadImage("cry.jpg");
  tt=loadImage("tt.png");
  brow=loadImage("brow.png");
  eye=loadImage("eye.png");
  
  
  
  
}

function draw() {
  
  image(img,0,0,750,541);
  if(move>400)
  {
    move=140;}
    
  move++;
  
  if(Move>300){
    Move=90;}
    
    
  if(Move<100){
      Move=110;}
    
    Move=Move+0.5;
  image(tt,375,move);
  image(tt,670,Move);
  
  
  image(eye,mouseX-500,0);
  if(mouseX>550)
  mouseX=510;
  
}