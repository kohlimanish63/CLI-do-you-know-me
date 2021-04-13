var readLineSync = require('readline-sync');
var score = 0;

//input
var questions = [{
  question : "my favourite DC character? ",
  answer : "darksied",
},{
  question: "my favourite movie? ",
  answer : "justice league",
},{
  question: "my favourite youtuber? ",
  answer : "ashish chanchalani",
},{
  question: "Which animal scares me most? ",
  answer : "dogs",
}];
var score = 0;

// Processing

function quizQuestions(quizQuestion, quizAnswer) {
  // Output
    var userAnswer = readLineSync.question(quizQuestion);
  if(quizAnswer === userAnswer) {
    console.log("Correct !");
    score = score + 1;
  } else {
    console.log("Incorrect !");
  }
  console.log("================");
}


for(var i = 0; i < questions.length; i++) {
  quizQuestions(questions[i].question, questions[i].answer);
}

console.log("your score is : " + score);