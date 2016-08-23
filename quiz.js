var questions = [
  ['How many states in the US?', 50],
  ['How many stars on the flad?', 50]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];

function print(message) {
var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr){
  var listHtml = '<ol>';
  for (var i = 0; i < arr.length; i++){
    listHtml += '<li>' +arr[i] + '</li>';
  }
    listHtml += '</ol';
    return listHtml;
  }



for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

html = "You got " + correctAnswers + "question(s) right!";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions incorrect:</h2>';
html += buildList(incorrect);

print(html);
