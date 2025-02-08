let questionInput;
let currentQuestion;
let response;
let responseColor = "green";
let heading;
let explanation;

let catFacts = [
  {
      question: "How many whiskers does the average cat have?",
      answer: "24",
      explanation: "The average cat has 24 whiskers, 12 on each side of its face."
  },
  {
      question: "True or false, can cats taste sweetness?",
      answer: "false",
      explanation: "Cats lack the taste receptors for sweetness, so they can't taste sweet flavors."
  },
  {
      question: "Cats can jump ___ times their body length",
      answer: "6",
      explanation: "A cat can jump up to six times its body length in a single leap."
  },
  {
      question: "What is a group of cats called?",
      answer: "Clowder",
      explanation: "The word clowder originates from the late Middle English term clodder, which referred to a clotted mass or lump. Over time, it evolved to describe a group of cats, likely because cats were often seen huddled together."
  },
  {
      question: "How many hours a day do cats sleep on average?",
      answer: "12",
      explanation: "Cats sleep an average of 12 to 16 hours a day."
  },
  {
      question: "True or false, do cats have a dominant paw?",
      answer: "True",
      explanation: "Cats often have a dominant paw, with male cats tending to be left-pawed and females right-pawed."
  },
  {
      question: "How old is the oldest known cat?",
      answer: "38",
      explanation: "The oldest known cat lived to be 38 years and 3 days old."
  },
  {
      question: "True or false, cats see in complete darkness?",
      answer: "False",
      explanation: "Cats need at least some light to see, but they can see in much lower light levels than humans."
  },
  {
      question: "How many toes does a cat typically have?",
      answer: "18",
      explanation: "Most cats have 18 toes—five on each front paw and four on each back paw."
  },
  {
      question: "True or false, are cats nocturnal?",
      answer:"False",
      explanation: "Cats are crepuscular, meaning they are most active during dawn and dusk."
  }
];

function next() {
  //end game if questions are done
  if(catFacts.length === 0){
    return null;
  }
  const randomIndex = Math.floor(Math.random() * catFacts.length);
  return catFacts[randomIndex];
}

function checkQuestion() {
  if (!currentQuestion) {
    return; // Stop if there are no more questions
  }
  let answer = String(currentQuestion.answer).toLowerCase();
  let input = questionInput.value().toLowerCase();
  if (answer === input) {
    // answer was correct and remove it form the array
    catFacts = catFacts.filter(catFactsObj => catFactsObj !== currentQuestion);
    response = "Correct! 😊";
    responseColor = "green";
  } else {
    // answer was incorrect 
    response = "Oops that is not correct! 😯";
    responseColor = "red";
  }
  //show explanation
  explanation = `Previous question: ${currentQuestion.question}

  Answer: ${currentQuestion.answer}

  Explanation: ${currentQuestion.explanation}`
  //reassign to get another question that is not the previous one
  currentQuestion = next();
  //clear input
  questionInput.value("");

  if (currentQuestion) {
    message = currentQuestion.question;
  } else {
    message = "Game Over! 🎉 Click restart to play again.";
    submitAnswerButton.attribute("disabled", true);
  }
}

currentQuestion = next();
let message = currentQuestion.question;

function restart() {
  //reset array
  catFacts = [
    {
        question: "How many whiskers does the average cat have?",
        answer: "24",
        explanation: "The average cat has 24 whiskers, 12 on each side of its face."
    },
    {
        question: "True or false, can cats taste sweetness?",
        answer: "false",
        explanation: "Cats lack the taste receptors for sweetness, so they can't taste sweet flavors."
    },
    {
        question: "Cats can jump ___ times their body length",
        answer: 6,
        explanation: "A cat can jump up to six times its body length in a single leap."
    },
    {
        question: "What is a group of cats called?",
        answer: "Clowder",
        explanation: "The word clowder originates from the late Middle English term clodder, which referred to a clotted mass or lump. Over time, it evolved to describe a group of cats, likely because cats were often seen huddled together."
    },
    {
        question: "How many hours a day do cats sleep on average?",
        answer: 12,
        explanation: "Cats sleep an average of 12 to 16 hours a day."
    },
    {
        question: "True or false, do cats have a dominant paw?",
        answer: "True",
        explanation: "Cats often have a dominant paw, with male cats tending to be left-pawed and females right-pawed."
    },
    {
        question: "How old is the oldest known cat?",
        answer: 38,
        explanation: "The oldest known cat lived to be 38 years and 3 days old."
    },
    {
        question: "True or false, cats see in complete darkness?",
        answer: "False",
        explanation: "Cats need at least some light to see, but they can see in much lower light levels than humans."
    },
    {
        question: "How many toes does a cat typically have?",
        answer: 18,
        explanation: "Most cats have 18 toes—five on each front paw and four on each back paw."
    },
    {
        question: "True or false, are cats nocturnal?",
        answer:"False",
        explanation: "Cats are crepuscular, meaning they are most active during dawn and dusk."
    }
  ];
  //reset game variables
  currentQuestion = next();
  message = currentQuestion ? currentQuestion.question : "Game Over! 🎉 Click restart to play again.";
  explanation = "";
  response = "";
  responseColor = "green";
  questionInput.value(""); 
  submitAnswerButton.removeAttribute("disabled");
}

function setup() {
  createCanvas(1000, 1000);
  background("orange");
  heading = createElement("h1", ["Cat Quiz 🐈‍⬛"]);
  heading.position(100, 100);
  questionInput = createInput('');
  questionInput.size(200, 32);
  questionInput.position(100, 250);
  submitAnswerButton = createButton("Submit Answer");
  submitAnswerButton.size(150, 32);
  submitAnswerButton.position(100, 300);
  submitAnswerButton.mousePressed(checkQuestion);
  restartButton = createButton("Restart Game");
  restartButton.size(150, 32);
  restartButton.position(280, 300);
  restartButton.mousePressed(restart);
}

function draw() {
  background("cornsilk");
  fill("black");
  textSize(24);
  textWrap(WORD);
  text(message, 100, 200, 900);
  text(explanation, 100, 400, 900);
  fill(responseColor);
  text(response, 100, 360);
}


