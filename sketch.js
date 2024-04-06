let scoopY = 350; 
let iceCreamY = 350; 

function setup() {
  createCanvas(400, 400);
  background(220);
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
  icecream(20, iceCreamY, 30, color(255));
  scoopY -= 5;
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
  ellipseMode(CORNER);
  ellipse(20, scoopY - 30, 40, 41);
  if (scoopY < 40) {
    background(220);
    icecream(20, iceCreamY, 30, color(255));
    scoopY = iceCreamY - 5;
  }
}