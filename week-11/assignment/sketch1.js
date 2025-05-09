

function setup() {
 
    let canvas = createCanvas(400, 400);
    canvas.parent("sketch1");
    noStroke();
  }
  
  function draw() {
    background(240);
    const gridSize = 40;
 
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
      
        let dynamicSize = gridSize * 0.8 + 10 * sin(frameCount * 0.05 + (x + y) * 0.01);
        fill(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 150);
        ellipse(x + gridSize / 2, y + gridSize / 2, dynamicSize, dynamicSize);
      }
    }
  }
  