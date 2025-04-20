

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("sketch2");
    noFill();
  }
  
  function draw() {
    background(255);
    stroke(50, 100, 200);
    strokeWeight(2);
    
    const waveCount = 10;
    const amplitude = 20;
    
    for (let i = 0; i < waveCount; i++) {
      let offsetY = map(i, 0, waveCount - 1, 50, height - 50);
      beginShape();
      for (let x = 0; x < width; x++) {
        let angle = map(x, 0, width, 0, TWO_PI * 2);
        let y = sin(angle + frameCount * 0.05 + i) * amplitude;
        vertex(x, offsetY + y);
      }
      endShape();
    }
  }
  