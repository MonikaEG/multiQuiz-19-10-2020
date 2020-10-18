'use strict';

//List of array objects (questions in this case)
export var questions = [
    {
        prompt: "In which Danish city is IBA located?\n(a) Aalborg\n\(b) Esbjerg\n(c) Haderslev\n(d) Kolding",
        answer: "d"
},
{
        prompt: "Which education programme does IBA not offer?\n(a) Multimediadesign\n\(b) Financial controller\n(c) Architect\n(d) Web development",
        answer: "c"
},
{
        prompt: "What color is Dannebrog, Denmark's flag?\n(a) Red/white\n\(b) Purple/yellow\n(c) Blue/white\n(d) Green/blue",
        answer: "a"
},
] 

export var score = 0;

for(var i=0; i < questions.length; i++){ //Loops for as many questions there are in the questions array.
    var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){ //If the response to the current question is the right answer...
        score++;
        alert("Correct!");
     } else {
        alert("Wrong!"); //If the response to the current question is wrong...
        }
}

alert("You got " + score + "/" + questions.length);

