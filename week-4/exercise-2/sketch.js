let rectX = 0;
let rectWidth = 75;
let clickCount = 0;

function setup() {
  createCanvas(400, 400);
  background(155);
}

function draw() {
  background(0);
  drawShape();
  rectX ++;
  if (rectX > width) {
    noLoop;
    text("Your score was " + clickCount, 100, 300);
  }
}

function mousePressed() {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= 75)) {
    clickCount++;
    console.log("hit", clickCount);
  }
 
}

function drawShape() {
  fill("orange")
  rect(rectX, 0, rectWidth, rectWidth);
}