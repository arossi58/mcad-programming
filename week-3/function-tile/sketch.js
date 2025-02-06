function setup() {
  createCanvas(200 , 200);
  noLoop();
}

function drawTile() {
  // main square
  stroke(0);
  strokeWeight(0);
  fill(255, 199, 125);
  rect(0, 0, 200, 200);

  // big circle
  strokeWeight(0);
  fill(69, 128, 255);
  ellipse(100, 100, 140);

  // lines
  strokeWeight(4);
  stroke(252, 145, 3);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

  // small squares
  fill(255, 100, 23); 
  rect(10, 10, 40, 40); // top left 
  rect(150, 10, 40, 40); // top right
  rect(10, 150, 40, 40); // bottom left
  rect(150, 150, 40, 40); // bottom right 

  // small circles
  fill(255, 200, 0);
  ellipse(50, 50, 30); // top left 
  ellipse(150, 50, 30); // top right 
  ellipse(50, 150, 30); // bottom left 
  ellipse(150, 150, 30); // bottom right 

}

function draw() {
  drawTile();
}