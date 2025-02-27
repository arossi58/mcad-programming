let circles = [];
let circleAmount = 50;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < circleAmount; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(0);

  filter(BLUR, 10); 

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].show();
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(25, 100);
  }

  move() {
    this.x += random(-0.5, 0.5); 
    this.y += random(-0.5, 0.5);
  }

  show() {
    fill(255, 165, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
