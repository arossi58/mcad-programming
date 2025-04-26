let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  background(30);


  ambientLight(80);
  pointLight(255, 255, 255, 0, 0, 300);


  rotateY(angle * 0.3);
  rotateX(angle * 0.2);

  let major = 100 + 20 * sin(angle * 1.5);
  let minor = 30  + 10 * sin(angle * 2.2);


  let bob = 50 * sin(angle * 1.1);

  push();
    translate(0, bob, 0);
    normalMaterial();   
    torus(major, minor, 64, 32);
  pop();

  angle += 0.01;
}
