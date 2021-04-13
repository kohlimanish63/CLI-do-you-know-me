var readLineSync = require('readline-sync');
var chalk = require("chalk");

var score = 0;

// //input
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
var title = chalk.bold.bgCyanBright;

console.log(title("-----welcome to do you know me!-----"))
function quizQuestions(quizQuestion, quizAnswer) {
  // Output
    var quizQues = chalk.bold.blueBright(quizQuestion);
    var userAnswer = readLineSync.question(quizQues);
  if(quizAnswer === userAnswer) {
    console.log(chalk.bold.bgGreen("Correct !"));
    score = score + 1;
  } else {
    console.log(chalk.bold.bgRed("Incorrect !"));
  }
  console.log(chalk.bold.cyanBright("================"));
}


for(var i = 0; i < questions.length; i++) {
  quizQuestions(questions[i].question, questions[i].answer);
}

console.log("your score is : " + score);