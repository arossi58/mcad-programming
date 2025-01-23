let name = prompt("What is your cat's name?");

if (!name) {
  name = "Kitty";
}

let treat = {
  x: 400,
  y: 500,
  r: 30,
  stroke: 10
}

let message = `Have a treat ${name}!`;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255, 230, 181);

  fill (190, 127, 81);
  strokeWeight (0);
  rect (0, 500, 800, 300);
  
  textSize(100);
  text("🐈‍⬛", mouseX-20, mouseY+50);

  fill(90, 225, 255);
  square(200, 400, 100, 10);

  fill("black");
  strokeWeight(0);
  textSize(36);
  text(message, 200, 100);
  textSize(16)
  text("Treats", 230, 450);
  
  fill("orange");
  stroke(91, 39, 0);
  strokeWeight(treat.stroke);
  circle( treat.x, treat.y, treat.r);

  if(dist(mouseX, mouseY, treat.x, treat.y) < treat.r) {
    treat.r = 0;
    treat.stroke = 0;
    message = `No more treats ${name} 😊`
  }
  

}
