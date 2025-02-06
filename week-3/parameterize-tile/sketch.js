function setup() {
  createCanvas(600, 600);
  noLoop();
}

function drawTile(x, y, bgColor, circleColor, lineColor, dotColor, squareColor) {
  push(); 
  //set location
  translate(x, y); 

  // main square
  stroke(0);
  strokeWeight(0);
  fill(bgColor);
  rect(0, 0, 200, 200);

  // big circle
  strokeWeight(0);
  fill(circleColor);
  ellipse(100, 100, 140);

  // lines
  strokeWeight(4);
  stroke(lineColor);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

  // small squares
  fill(squareColor);
  rect(10, 10, 40, 40); 
  rect(150, 10, 40, 40); 
  rect(10, 150, 40, 40); 
  rect(150, 150, 40, 40); 

  // dots
  fill(dotColor);
  ellipse(50, 50, 30); 
  ellipse(150, 50, 30);  
  ellipse(50, 150, 30); 
  ellipse(150, 150, 30); 

  pop();
}

function draw() {
  //row 1
  drawTile(0, 0, color(255, 199, 125), color(69, 128, 255), color(214, 125, 6), color(255, 100, 23), color(255, 200, 0)); // left
  drawTile(200, 0, color(100,50,150), color(250,200,0), color(0,100,200), color(255,20,147), color(50,50,50)); // center
  drawTile(400, 0, color(240, 248, 255), color(70, 130, 180), color(25, 25, 112), color(173, 216, 230), color(176, 224, 230)); // right
  //row 2
  drawTile( 0, 200, color(50, 50, 50), color(255, 215, 0), color(123, 104, 238), color(255, 20, 147), color(75, 0, 130)); // left
  drawTile(200, 200, color(255, 140, 0), color(0, 128, 128), color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)); // center
  drawTile( 400, 200, color(255, 222, 173), color(139, 69, 19), color(0, 206, 209), color(148, 0, 211), color(255, 165, 0)); // right
  //row 3
  drawTile(0, 400, color(46, 139, 87), color(255, 99, 71), color(255, 250, 205), color(70, 130, 180), color(0, 0, 139)); // left
  drawTile(200, 400, color(255, 192, 203), color(0, 255, 255), color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)); // center
  drawTile( 400, 400, color(240, 248, 255), color(105, 105, 105), color(255, 215, 0), color(255, 0, 255), color(173, 255, 47)); // right
}

