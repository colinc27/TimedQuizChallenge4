// Questions and Answers Variable
const Questions = [
  "Javascript is an _______ language?",
  "Which of the following methods can be used to display data in some form using Javascript?",
  "When an operators value is NULL, the type of returned by the unary operator is:",
  "What does the Javascript “debugger” statement do?",
  "Which function is used to serialize an object into a JSON string in Javascript?",
];
const Answers = [
  "Object-Oriented",
  "Object-Based",
  "Procedural",
  "None of the above",
  "document.write()",
  "console.log()",
  "window.alert()",
  "All of the above",
  "Boolean",
  "Object",
  "Undefined",
  "Integer",
  "It acts as a breakpoint in a program",
  "It will debug all the errors in a program",
  "It will debug the error in the current statement if any",
  "All of the above",
  "stringify()",
  "parse()",
  "convert()",
  "None of the above",
];
const rightAnswers = [
  "Object-Oriented",
  "All of the above",
  "Boolean",
  "It acts as a breakpoint in a program",
  "stringify()",
];
var startBtn = document.querySelector("#start");
function runQuiz() {
  startBtn.innerHTML = "How high of a score can you get??!!!";
  startBtn.disabled = true;
  //function that resets the questions and answers
  var i = 0;
  function reset() {
    let number = i + 1;
    let header = document.getElementById("questionHead");
    let ListH = document.getElementById("questiontop");
    header.textContent = "Question #" + number;
    ListH.textContent = Questions[i];
    //for loop to add individual question answers
    for (n = 0; n < 4; n++) {
      let li = document.createElement("li");
      let button = document.createElement("button");
      button.innerHTML = Answers[n + i * 4];
      button.id = "ans";
      li.appendChild(button);
      li.className = "ansbtn";
      document.getElementById("questiontop").appendChild(li);
    }
    test()
  }
  reset();
  //Event listener for whether the right button has been selected
  function test() {
    var ansbtns = document.querySelectorAll("#ans");
      for (let a = 0; a < ansbtns.length; a++) {
        ansbtns[a].addEventListener("click", function () {
          let finalans = this.textContent;
          if (finalans === rightAnswers[i]) {
            window.alert("Congrats you got the question right!");
            console.log(i);
            reset(i++);
          } else {
            window.alert("You have selected the wrong answer!");
            console.log(i);
            reset(i++);
          }
        });
      }
    }
    }

// Add event listener to generate button
startBtn.addEventListener("click", runQuiz);
