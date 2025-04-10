function setup() {
  createCanvas(800, 600, WEBGL);
  noStroke();
}

function draw() {
  background(30);

  ambientLight(80);

  // orange light poistined in front
  directionalLight(247, 120, 0, 0.5, 0.5, -1);
  
  // size of each grid cell
  let gridSize = 50;
  
  // loop over to draw a grid of boxes
  for (let x = -width / 2; x < width / 2; x += gridSize) {
    for (let y = -height / 2; y < height / 2; y += gridSize) {
      push(); //save current position
      
      translate(x, y, 0);
      
      // starting size is 40, 20 multiplier is varied using sin and cos to form wave
      let size = 40 + 20 * sin(frameCount * 0.05 + x * 0.1) * cos(frameCount * 0.05 + y * 0.1);
      
      // set material to also be orange
      ambientMaterial(255, 165, 0);
      
      box(size);
      
      pop();//reset position for next box
    }
  }
}