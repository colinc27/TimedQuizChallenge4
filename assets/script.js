// Assignment code here
var Questions = [
    'Javascript is an _______ language?',
    'Which of the following methods can be used to display data in some form using Javascript?',
    'When an operators value is NULL, the type of returned by the unary operator is:',
    'What does the Javascript “debugger” statement do?',
    'Which function is used to serialize an object into a JSON string in Javascript?',
];
var Answers = [
    'Object-Oriented',
    'Object-Based',
    'Procedural',
    'None of the above',
    'document.write()',
    'console.log()',
    'window.alert()',
    'All of the above',
    'Boolean',
    'Object',
    'Undefined',
    'Interger',
    'It acts as a breakpoint in a program',
    'It will debug all the errors in a program',
    'It will debug the error in the current statement if any',
    'All of the above',
    'stringify()',
    'parse()',
    'convert()',
    'None of the above',

];
var rightAnswers = [
    'Object-Oriented',
    'All of the above',
    'Boolean',
    'It acts as a breakpoint in a program',
    'stringify()',
]
var generateBtn = document.querySelector("#start");
// Wrap most of the Javascript in run quiz function
function runQuiz() {
   //Start by asking first question 
   var i = 0;

       var number = i+1;
       var header = document.getElementById('questionHead');
       var ListH = document.getElementById('questiontop');
       var li = document.createElement("li");
       header.textContent=('Question #'+ number);
       ListH.textContent=Questions[i];
       li.innerHTML = Answers[i];
       document.getElementById("questiontop").appendChild(li);

}
// Add event listener to generate button
generateBtn.addEventListener("click", runQuiz);