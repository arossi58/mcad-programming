let blockX = 0;
let blockY = 0;
let drawTimer;
let speed = 200;
let distance = 50;
let blockColor;

function setup() {
  createCanvas(500 , 500);
  background(0);
}

function drawBlock(x, y, color) {
  fill(color || 255);
  rect(x, y, 50, 50);
}

function keyTyped() {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)){
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  blockColor = keyToNumber;
}


drawTimer = window.setInterval(() => {
  if (blockY - 50 <= height) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
  } else {
    blockY = 0;
    blockX += 50;
  }
  if (blockY - 50 > height && blockX - 50 > width){
    window.clearInterval(drawTimer);
    alert("Done!");
    console.log("stopped");
  }
}, speed)


