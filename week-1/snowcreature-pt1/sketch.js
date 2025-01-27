let userColor = prompt("What color would you like?")

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("skyBlue");
  //legs
  fill("f1f1f1");
  strokeWeight(20);
  stroke(userColor);
  // left leg
  ellipse(350, 650, 200);
  //right leg
  ellipse(650, 650, 200);
  //body
  ellipse(500, 450, 350, 400);
  //head
  ellipse(500, 200, 200);
  //hat brim
  strokeWeight(40);
  stroke("green");
  line(300, 120, 600, 120);
  //hat body
  quad(400, 50, 600, 50, 600, 120, 400, 120);
  //eyes
  stroke(0);
  strokeWeight(20);
  point(450, 200);
  point(550, 200);
  //mouth
  noFill;
  strokeWeight(10);
  arc(475, 220, 100, 80, -50, HALF_PI);
  //arms
  line(320, 400, 150, 200);
  line(680, 400, 850, 200);
}
