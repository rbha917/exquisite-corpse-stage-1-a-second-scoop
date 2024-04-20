let scoopY = 600; 
let iceCreamY = 600; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

function icecream(x, y, size, colour){
  noStroke();
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);
  fill(colour);
  ellipseMode(CORNER);
  ellipse(x, y - 35, 40, 41);
}

countInterval = setInterval(addScoop, 1000);

function addScoop() {
  icecream(width/2, iceCreamY, 30, color(255));
  scoopY -= 5;
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
  ellipseMode(CORNER);
  ellipse(width/2, scoopY - 30, 40, 41);
  if (scoopY < 40) {
    background(50);
    icecream(width/2, iceCreamY, 30, color(255));
    scoopY = iceCreamY - 5;
  }
}