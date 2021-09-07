var readlineSync = require('readline-sync');

if (readlineSync.keyInYN('Do you want to play a quiz')) {
  var userName=readlineSync.question("What's your name?\n")
  console.log("Hi "+ userName+" get ready to play");
 var queList=[
  {
    options:["captain america","Ironman","hulk","captain marvel"]
  , question:"Who is first Avenger?\n"
  ,answer:"captain america"
  },
  {
    options:["Steve Rogers","Barnes","Sam Wilson","Bucky"],
    question:"What is real name of Captain America?"
    ,answer: "Steve Rogers"
  }
 ]
 var score=0;
function mcqQuiz(listAnswers,question,answer){
  var index=readlineSync.keyInSelect(listAnswers,question);
  if(listAnswers[index]==answer){
    console.log("you're Right!!")
    score=score+1;
  }else{
    console.log("you're wrong!! Watch Marvel Nerd")
    score=score-1;
  }if(score<1){
    score=0;
  }
  console.log("your score: ",score)
}
for(var i=0;i<queList.length;i++){
  var currentQuiz=queList[i];
  mcqQuiz(currentQuiz.options,currentQuiz.question,currentQuiz.answer)
}

} else {
  console.log('See you later!!');

}

console.log("Your Total Score: ",score);

// var readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');