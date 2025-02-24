let myCard;
const DOWN = "down";
const UP = "up";
let cards = [];
let matchesFound = 0;  
let totalMatches = 0;  
const gameState = {
  totalPairs: 8,
  flippedCards: [],
  numMatched: 0, 
  attempts: 0,
  waiting: false
};
let cardBack;
let gridSize = 4;
let cellSize;
let gapSize = 16;
let gridOffsetX, gridOffsetY;
let cardFaceArray = [];

function preload() {
  cardBack = loadImage("./assets/card-image.png");
  cardFaceArray = [
    loadImage("./assets/PXL_20230603_141553996.png"),
    loadImage("./assets/PXL_20230608_233713832.MP.png"),
    loadImage("./assets/PXL_20230613_235943034.png"),
    loadImage("./assets/PXL_20230614_004740340.MP.png"),
    loadImage("./assets/PXL_20230621_112550752.png"),
    loadImage("./assets/PXL_20230705_122821349.png"),
    loadImage("./assets/PXL_20230729_154043428.png"),
    loadImage("./assets/PXL_20230801_005523684.png"),
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateCellSize();
  initializeCards();
  textAlign(CENTER, TOP);
}

function calculateCellSize() {
  let minDimension = min(windowWidth, windowHeight) * 0.7;
  cellSize = (minDimension - (gridSize - 1) * gapSize) / gridSize;
  let gridWidth = gridSize * cellSize + (gridSize - 1) * gapSize;
  let gridHeight = gridSize * cellSize + (gridSize - 1) * gapSize;

  gridOffsetX = (width - gridWidth) / 2;
  gridOffsetY = (height - gridHeight) / 2 + 80;

  resizeCanvas(windowWidth, windowHeight);
}

function initializeCards() {
  cards = [];
  let selectedFaces = [];
  
  for (let z = 0; z < 8; z++) {
    const face = cardFaceArray[z];
    selectedFaces.push(face);
    selectedFaces.push(face);
  }
  
  selectedFaces = shuffleArray(selectedFaces);
  
  let index = 0;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = gridOffsetX + i * (cellSize + gapSize);
      let y = gridOffsetY + j * (cellSize + gapSize);
      let cardFace = selectedFaces[index];
      cards.push(new Card(x, y, cardFace));
      index++;
    }
  }
  totalMatches = cards.length / 2; 
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text("Vinny's Memory Game!", width / 2, 20);
  text("Your Score: " + matchesFound, width / 2, 80);
  text("Attempts: " + gameState.attempts, width / 2, 140);

  for (let c = 0; c < cards.length; c++) {
    cards[c].show();
  }
// check if all matches are made
  if (matchesFound === totalMatches) {
    textSize(64);
    fill(0, 255, 0); 
    text("You win!", width / 2, height / 2);
  }
}

function mousePressed() {
  // loop through all cards to see if one was clicked
  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && !cards[k].isFlipped() && cards[k].didHit(mouseX, mouseY)) {
      cards[k].flip();
      gameState.flippedCards.push(cards[k]);
      console.log("flipped", cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  // increment each attempt 
  gameState.attempts++;
  
  if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
    matchesFound++;
    gameState.flippedCards = []; 
  } else {
    // set cards back after 2 seconds if they don't match
    setTimeout(() => {
      gameState.flippedCards[0].flip();
      gameState.flippedCards[1].flip();
      gameState.flippedCards = [];
    }, 2000);
  }
}

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show() {
    if (this.face === UP || this.isMatch) {
      image(this.cardFaceImg, this.x, this.y, this.width, this.height);
    } else {
      image(cardBack, this.x, this.y, this.width, this.height);
    }
    noFill();
    stroke("#FFCD76");
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.height, 8);
  }
// determine if mouse hit the card area
  didHit(mx, my) {
    return mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height;
  }

  flip() {
    this.face = this.face === DOWN ? UP : DOWN;
  }

  isFlipped() {
    return this.face === UP;
  }
}

//shuffle the cards
function shuffleArray(array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}

function windowResized() {
  calculateCellSize();
  initializeCards();
}
