let pianoSample;
let shapes = [];

const keyNoteMap = {
  'a': 0,   // C4
  's': 2,   // D
  'd': 4,   // E
  'f': 5,   // F
  'g': 7,   // G
  'h': 9,   // A
  'j': 11,  // B
  'k': 12,  // C5
  'l': 14,  // D
  ';': 16,  // E
  "'": 17,  // F
};

function preload() {
  soundFormats('mp3', 'wav');
  pianoSample = loadSound('piano.mp3');
}

function setup() {
  createCanvas(600, 400, WEBGL);
  noStroke();
  pianoSample.playMode('restart');
}

function draw() {
  background(20);
  lights();

  for (let i = shapes.length - 1; i >= 0; i--) {
    let s = shapes[i];
    s.update();
    s.display();
    if (s.alpha <= 0) {
      shapes.splice(i, 1);
    }
  }
}

function keyPressed() {
  let keyChar = key.toLowerCase();
  if (key === 'Enter') keyChar = 'Enter';
  if (!(keyChar in keyNoteMap)) return;

  const semitoneOffset = keyNoteMap[keyChar];
  const rate = pow(2, semitoneOffset / 12);

  const newNote = new p5.SoundFile();
  newNote.buffer = pianoSample.buffer;
  newNote.play(0, rate); 
  newNote.playMode('sustain');

  
  shapes.push({
    x: random(-width / 2 + 50, width / 2 - 50),
    y: random(-height / 2 + 50, height / 2 - 50),
    z: random(-100, 100),
    size: random(40, 100),
    color: [random(255), random(255), random(255)],
    alpha: 255,
    fading: false,
    sound: newNote,
    update() {
      if (!this.sound.isPlaying() && !this.fading) {
        this.fading = true;
      }
      if (this.fading) {
        this.alpha -= 5;
      }
    },
    display() {
      push();
      translate(this.x, this.y, this.z);
      ambientMaterial(this.color[0], this.color[1], this.color[2], this.alpha);
      box(this.size);
      pop();
    }
  });
}

