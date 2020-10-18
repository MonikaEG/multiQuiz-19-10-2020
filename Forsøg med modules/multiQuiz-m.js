'use strict';

//List of array objects (questions in this case)
var questions = [
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

var score = 0;

import {scoreCheck} from './multiQuizImport-m.js';

alert("You got " + score + "/" + questions.length);