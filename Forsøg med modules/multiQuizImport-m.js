'use strict';

export function scoreCheck { //Gives the entire loop and if sentence section a name in order to export it?
    for(var i=0; i < questions.length; i++){ //Loops for as many questions there are in the questions array.
    var response = window.prompt(questions[i].prompt);
        if(response == questions[i].answer){ //If the response to the current question is the right answer...
        score++;
        alert("Correct!");
     } else {
        alert("Wrong!"); //If the response to the current question is wrong...
        }
    }
}
