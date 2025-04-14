// sketch3.js - Enhanced Rotational Pattern with More Animated Circles

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("sketch3");
    angleMode(DEGREES);
  }
  
  function draw() {
    background(255);
    translate(width / 2, height / 2);
  
    // Apply a slow global rotation for overall motion
    rotate(frameCount * 0.5);
  
    // Outer loop: iterate over multiple radii to create rings of circles.
    // Adjust the start, stop, and step values as needed.
    for (let r = 50; r <= 150; r += 30) {
      // Inner loop: iterate over angles (in degrees) for each ring.
      // A smaller increment creates more circles per ring.
      for (let angle = 0; angle < 360; angle += 10) {
        push();
        // Rotate for the current angle along the ring
        rotate(angle);
        // Animate each circle’s size using the sine function.
        let dynamicSize = 20 + 10 * sin(frameCount * 0.1 + angle);
        // Use a fill color that varies with angle and ring radius.
        fill(100 + angle, 150, r + 20);
        noStroke();
        // Draw the ellipse at distance r along the current angle.
        ellipse(0, r, dynamicSize, dynamicSize);
        pop();
      }
    }
  }
  