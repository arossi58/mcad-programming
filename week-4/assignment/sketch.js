//I did a bit extra on this assignment because I will be away next weekend

let gridSize = 4; 
let cellSize; 
let gapSize = 16;

function preload() {
  bgImage = loadImage('./assets/card-image.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateCellSize();
  textAlign(CENTER, TOP);
}

//wanted the grid to be responsize. this function sets the grid dimensions of 80% of the shortest viewport dimension
function calculateCellSize() {
  //determine smaller of two window dimensions
  let minDimension = min(windowWidth, windowHeight)* .7;

  //calculate size of each square accounting for a gap
  cellSize = (minDimension - (gridSize - 1) * gapSize) / gridSize;
  let gridWidth = gridSize * cellSize + (gridSize - 1) * gapSize;
  let gridHeight = gridSize * cellSize + (gridSize - 1) * gapSize;

  //to center the grid, calculate an offset in both dimensions
  gridOffsetX = (width - gridWidth) / 2;
  gridOffsetY = (height - gridHeight) / 2;

  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255); 
  strokeWeight(0);
  textSize(32);  
  text("Vinny's Memory Game!", width / 2, 20);  
  text("Your Score: 00", width / 2, 80); 
  //draw the grid in both x and y directions with two loops. includes offset and responsive cellSize
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = gridOffsetX + i * (cellSize + gapSize);
      let y = gridOffsetY + j * (cellSize + gapSize) + 5;
      // style each cell
      drawingContext.shadowColor = color(220, 139, 0, 100);
      drawingContext.shadowOffsetX = 0;  
      drawingContext.shadowOffsetY = 0;  
      drawingContext.shadowBlur = 8;    
      // Draw the background image inside each square
      image(bgImage, x, y, cellSize, cellSize);
      noFill();
      stroke("#FFCD76");
      strokeWeight(2);
      rect(x, y, cellSize, cellSize, 14);
    }
  }
  //reset drop shadow
  drawingContext.shadowColor = color(0, 0);
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
}

function windowResized() {
  calculateCellSize();
  redraw();
}

function mousePressed() {
  // get the coordinate fo the square by taking into account the offset, and gap. then round so it is a wwhole number
  let i = floor((mouseX - gridOffsetX) / (cellSize + gapSize));
  let j = floor((mouseY - gridOffsetY) / (cellSize + gapSize));

  // ensure the click is within the grid
  if (i >= 0 && i < gridSize && j >= 0 && j < gridSize) {
    console.log(`Clicked square: Row ${j + 1}, Column ${i + 1}`);
  }
}