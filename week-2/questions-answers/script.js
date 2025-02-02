const olympicTrivia = [
    {
        question: "In which year were the first modern Olympic Games held?",
        answer: "1896"
      },
      {
        question: "Which city has hosted the Summer Olympics the most times?",
        answer: "London"
      },
      {
        question: "What do the five rings on the Olympic flag represent?",
        answer: "The five continents participating in the Games"
      },
      {
        question: "Which country has won the most Olympic medals overall?",
        answer: "United States"
      },
      {
        question: "What is the official motto of the Olympic Games?",
        answer: "Citius, Altius, Fortius (Faster, Higher, Stronger)"
      },
      {
        question: "Which sport has been part of every Summer Olympic Games since 1896?",
        answer: "Track and Field"
      },
      {
        question: "Who is the most decorated Olympian of all time?",
        answer: "Michael Phelps"
      },
      {
        question: "Which country traditionally leads the Parade of Nations during the opening ceremony?",
        answer: "Greece"
      },
      {
        question: "Which Winter Olympic sport features events such as the Giant Slalom and Super-G?",
        answer: "Skiing"
      },
      {
        question: "Which athlete lit the Olympic cauldron at the 1996 Atlanta Olympics?",
        answer: "Muhammad Ali"
      }
  ];

let questionNumber = document.getElementById("questionNumber");

//using floor to ensure it does not round out of bounds
let randonNumber = Math.floor(Math.random()*olympicTrivia.length);

//question prompt
let userAnswer = prompt(olympicTrivia[randonNumber].question);

//set counter on page
questionNumber.innerHTML = randonNumber;

//answer alert
if (userAnswer){
    alert("You answered: " + userAnswer + "\n" + "The answer is: " + olympicTrivia[randonNumber].answer);
} else {
    alert("You did not provide an answer 😯" + "\n" + "The answer is: " + olympicTrivia[randonNumber].answer);
}
 