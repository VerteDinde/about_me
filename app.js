// esLinter is loaded locally
// begin with 'use strict
'use strict';

alert('Hey, want to play a guessing game?');

//design if-else loop for questions and answers; must be yes/y or no/n
//Question 1: Is my name Keeley?
var answerOne = prompt('Is my full name "Keeley"?', "Yes or No").toLowerCase;

// Experimenting with code from Yuval:
var answerOne = document.getElementById('nameOne');
answerOne.innerHTML = nameOne;

if (answerOne === "yes" || answerOne === "y") {
    alert('You got it! My name is Keeley.');
    console.log('yes');

} else if {
    alert('No, sorry, it is Keeley.');
    console.log('no');

} else {
    alert('Are you confused?');
    console.log('other');
}

// Question 2: Is my favorite food 'Chinese'?
var answerTwo = prompt('Is my favorite food pancakes?', 'Yes or No').toLowerCase;

var answerTwo = document.getElementById('foodTwo');
answerTwo.innerHTML = foodTwo;

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Yes, Chinese is my favorite food!');
    console.log('yes');

} else if (answerTwo === 'no' || answerTwo === 'n') { 
    alert('Good guess, but no, my favorite food is Chinese.');
    console.log('no');

} else {
    alert('Are you confused?');
    console.log('other');
}

// Question 3: Is Tom Brady the G.O.A.T?

// Question 4: Am I tall enough to ride most roller coasters?

// Question 5: if I assemble a space elevator out of one billion hotdogs on top of each other, 
// is the resultant tower a sandwich?
/*
var answerFive = prompt('If I assemble a space elevator out of 1 billion hotdogs stacked on top of each other, is the resulting tower a sandwich?', 'Yes or No').toLowerCase;

if (answerFive === "yes" || answerFive === "y") {
    alert("A controversial answer, but the Geneva Convention of 2016 did declare that a hot dog is a sandwich - thus, your new space elevator is indeed a sandwich.")
    console.log('yes');
} */
