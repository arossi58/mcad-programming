let cols, rows;
let scl = 20;
let w = 1400;
let h = 1000;

let terrain = [];
let flying = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;
  frameRate(20);
  smooth();

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
  }
}

function draw() {
  const skyColor = color(135, 206, 235);
  background(skyColor);

  noLights();       
  noStroke();

  flying -= 0.1;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -200, 300);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  translate(0, 50);
  rotateX(PI / 3);
  translate(-w/2, -h/2);

  for (let y = 0; y < rows - 1; y++) {
    
    let stripMin = Infinity, stripMax = -Infinity;
    for (let x = 0; x < cols; x++) {
      stripMin = min(stripMin, terrain[x][y], terrain[x][y+1]);
      stripMax = max(stripMax, terrain[x][y], terrain[x][y+1]);
    }

    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
    
      let h1 = terrain[x][y];
      let t1 = map(h1, stripMin, stripMax, 0, 1);
      let col1 = lerpColor(color('#228B22'), color('#FFFFFF'), t1);
      fill(col1);
      vertex(x * scl, y * scl, h1);

  
      let h2 = terrain[x][y + 1];
      let t2 = map(h2, stripMin, stripMax, 0, 1);
      let col2 = lerpColor(color('#228B22'), color('#FFFFFF'), t2);
      fill(col2);
      vertex(x * scl, (y + 1) * scl, h2);
    }
    endShape();
  }
}


