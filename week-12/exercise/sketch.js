let pianoSound, drumSound, ambientSound;
let pianoButton, drumButton, ambientButton;

function preload() {
  soundFormats('mp3', 'wav');
  pianoSound = loadSound('piano.mp3');
  drumSound = loadSound('drum.mp3');
  ambientSound = loadSound('ambient.mp3');
}

function setup() {
  createCanvas(400, 300);
  background(245);


  pianoButton = createButton('Play Piano');
  pianoButton.position(30, 100);
  pianoButton.mousePressed(() => {
    if (pianoSound.isPlaying()) {
      pianoSound.stop();
    } else {
      stopAllExcept(pianoSound);
      pianoSound.play();
    }
  });


  drumButton = createButton('Play Drum');
  drumButton.position(150, 100);
  drumButton.mousePressed(() => {
    if (drumSound.isPlaying()) {
      drumSound.stop();
    } else {
      stopAllExcept(drumSound);
      drumSound.play();
    }
  });


  ambientButton = createButton('Play Ambient');
  ambientButton.position(270, 100);
  ambientButton.mousePressed(() => {
    if (ambientSound.isPlaying()) {
      ambientSound.stop();
    } else {
      stopAllExcept(ambientSound);
      ambientSound.play();
    }
  });

  textAlign(CENTER);
  textSize(18);
  fill(50);
  text('Click a button to play or stop a sound!', width / 2, 50);
}

function stopAllExcept(currentSound) {
  if (pianoSound !== currentSound && pianoSound.isPlaying()) pianoSound.stop();
  if (drumSound !== currentSound && drumSound.isPlaying()) drumSound.stop();
  if (ambientSound !== currentSound && ambientSound.isPlaying()) ambientSound.stop();
}
