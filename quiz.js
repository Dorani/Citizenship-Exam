var questions = [
  ['How many states in the US?', 50],
  ['How many stars on the flag', 50],
  ['How many stripes on the flag', 13],
  ['How many governers per state', 1],
  ['Who is the first president?', "George Washington"]
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
  var listHtml = '<dl>';
  for (var i = 0; i < arr.length; i++){
    listHtml += '<ul>' +arr[i] + '</ul>';
  }
    listHtml += '</dl';
    return listHtml;
  }


for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers++;
    correct.push(question);
    correct.push(answer);
  } else {
    incorrect.push(question);
    incorrect.push(answer);
  }
}

html = "You got " + correctAnswers + " question(s) right!";
html += '<h1>You got these questions correct:</h1>';
html += buildList(correct);
html +='<br></br>'
html += '<h1>You got these questions incorrect:</h1>';
html += buildList(incorrect);

print(html);
