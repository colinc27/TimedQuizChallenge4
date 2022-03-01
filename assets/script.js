// Questions and Answers Variable
const Questions = [
    'Javascript is an _______ language?',
    'Which of the following methods can be used to display data in some form using Javascript?',
    'When an operators value is NULL, the type of returned by the unary operator is:',
    'What does the Javascript “debugger” statement do?',
    'Which function is used to serialize an object into a JSON string in Javascript?',
];
const Answers = [
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
const rightAnswers = [
    'Object-Oriented',
    'All of the above',
    'Boolean',
    'It acts as a breakpoint in a program',
    'stringify()',
]
var startBtn = document.querySelector("#start");
function runQuiz() {
    //for(var i = 0;i<5;){
        var i = 1;
       var number = i+1;
       var header = document.getElementById('questionHead');
       var ListH = document.getElementById('questiontop');
       header.textContent=('Question #'+ number);
       ListH.textContent=Questions[i];
 //for loop to add individual question answers
       for(n=0;n<4;n++){
           var li = document.createElement("li");
           var button = document.createElement("button")
           button.innerHTML= Answers[n+i*4];
           button.id="ans";
           li.appendChild(button);
           li.className="ansbtn"
           document.getElementById("questiontop").appendChild(li);
       }
//Event listener for whether the right button has been selected
       console.log(document.querySelectorAll('button'))
       document.querySelector('#ans').addEventListener('click', event=>{
           let target=event.target;
           let finalans= target.textContent
           if (finalans===rightAnswers[i]){
            window.alert("Congrats you got the question right!");
        }
            else{ 
                window.alert("You have selected the worng answer!");

            }

        });
    };
// Add event listener to generate button
startBtn.addEventListener("click", runQuiz);