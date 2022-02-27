// Assignment code here
var Questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
];
var Answers = [
    ''

];
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