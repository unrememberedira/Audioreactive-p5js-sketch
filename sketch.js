let mic;


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  angleMode(DEGREES);
  rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(0);
  noFill();
  stroke(random(225));
  

  let vol = mic.getLevel();
  
  translate(width/2,height/2);
  
  for(var i=0; i<vol*800;i++){
    push()
    
    rotate(sin(frameCount+i)*90)
    rect(i, i ,600-20*i,600-20*i,0);
    
  
    pop()
  
  }
  
}