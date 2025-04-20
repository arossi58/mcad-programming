
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("sketch3");
    angleMode(DEGREES);
  }
  
  function draw() {
    background(255);
    translate(width / 2, height / 2);
    rotate(frameCount * 0.5);
    for (let r = 50; r <= 150; r += 30) {

      for (let angle = 0; angle < 360; angle += 10) {
        push();
        rotate(angle);
        let dynamicSize = 20 + 10 * sin(frameCount * 0.1 + angle);
        fill(100 + angle, 150, r + 20);
        noStroke();
        ellipse(0, r, dynamicSize, dynamicSize);
        pop();
      }
    }
  }
  