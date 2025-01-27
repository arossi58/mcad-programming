let userColor = prompt("What is your favorite color");
let noseSize = prompt("How big of a nose do you want?");
let buttonColor = prompt("What button color do you like?");

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("skyBlue");
  //ground
  fill("white");
  strokeWeight(0);
  quad(0, 400, 1000, 400, 1000, 800, 0, 800);
  //house
  fill("orange");
  stroke("orange");
  strokeWeight(5);
  quad(50, 300, 150, 300, 150, 400, 50, 400);
  triangle(40, 310, 100, 200, 160, 310);
  //legs
  fill("f1f1f1");
  strokeWeight(20);
  stroke(userColor);
  //body
  ellipse(500, 700, 500);
  ellipse(500, 450, 400);
  //head
  ellipse(500, 200, 200);
  //nose
  fill("orange");
  strokeWeight(0);
  triangle(500, 220, noseSize, 230, 500, 240);
  //hat brim
  fill("white");
  strokeWeight(40);
  stroke("green");
  line(300, 120, 600, 120);
  //hat body
  quad(400, 50, 600, 50, 600, 120, 400, 120);
  //eyes
  stroke("black");
  strokeWeight(40);
  point(450, 200);
  point(550, 200);
  //buttons
  stroke(buttonColor);
  point(500, 400);
  point(500, 500);
  point(500, 600);
  //mouth
  stroke("black");
  noFill;
  strokeWeight(10);
  arc(500, 220, 80, 100, -200 , PI - QUARTER_PI);
  //arms
  line(320, 400, 150, 200);
  line(680, 400, 850, 200);
}
