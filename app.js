// esLinter is loaded locally
// begin with 'use strict'
'use strict';

alert('Hey, want to play a guessing game?');

//design if-else loop for questions and answers; must be yes/y or no/n
//Question 1: Is my name Keeley? Yes. id = nameOne
var answerOne = prompt('Is my full name "Keeley"?', "Yes or No").toLowerCase();

// Experimenting with code from Yuval:
// I FINALLY FIGURED THIS OUT, WOW. Needs HTML to work.
var nameOne = document.getElementById('answerOne');
nameOne.innerHTML = answerOne;

if (answerOne === "yes" || answerOne === "y") {
  alert('You got it! My name is Keeley.');
  console.log('yes');

} else if (answerOne === 'no' || answerOne === 'n') {
  alert('No, sorry, it is Keeley.');
  console.log('no');

} else {
  alert('Are you confused? Yes or no, please.');
  console.log('other');
}

// Question 2: Is my favorite breakfast food pancakes? No. id = foodTwo.
var answerTwo = prompt('Is my favorite breakfast food pancakes?', 'Yes or No').toLowerCase();

var foodTwo = document.getElementById('answerTwo');
foodTwo.innerHTML = answerTwo;

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('No, I actually love cereal. Pancakes are amazing, though.');
  console.log('yes');

} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Good guess, my favorite breakfast food is actually cereal.');
  console.log('no');

} else {
  alert('Are you confused? Yes or no.');
  console.log('other');
}

// Question 3: Can I play the piano? Yes.
var answerThree = prompt('Can I play the piano?', 'Yes or No').toLowerCase();

var pianoThree = document.getElementById('answerThree');
pianoThree.innerHTML = answerThree;

if (answerThree === 'yes' || answerThree === 'y') {
  alert('I can play the piano!');
  console.log('yes');

} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Nope, sorry, I actually can play the piano.');
  console.log('no');

} else {
  alert("Are you confused? This is a yes or no, check your spelling.");
  console.log('other');
}

// Question 4: Am I tall enough to ride most roller coasters? No.
var answerFour = prompt ('Am I tall enough to ride most rollercoasters?').toLowerCase();

var tallFour = document.getElementById('answerFour');
tallFour.innerHTML = answerFour;

if (answerFour === 'yes' || answerFour === 'y') {
  alert('No, I\'m too short');
  console.log('yes');

} else if (answerFour === 'no' || answerFour === 'n') {
  alert('I am not tall enough, it\'s true.');
  console.log('no');

} else {
  alert('Are you confused? You have to say yes or no.');
  console.log('other');
}

// Question 5: if I assemble a space elevator out of one billion hotdogs on top of each other, 
// is the resultant tower a sandwich? Yes.
var answerFive = prompt('If I assemble a space elevator out of 1 billion hotdogs stacked on top of each other, is the resulting tower a sandwich?', 'Yes or No').toLowerCase();

var sandwichFive = document.getElementById('answerFive');
sandwichFive.innerHTML = answerFive;

if (answerFive === 'yes' || answerFive === 'y') {
  alert("A controversial answer, but the Geneva Convention of 2016 did declare that a hot dog is a sandwich - thus, your new space elevator is indeed a sandwich.");
  console.log('yes');

} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Come on now, everyone knows a hot dog is a sandwich - this is deeply controversial, I know.');
  console.log('no');

} else {
  alert('I know, I think it\'s a dumb question too.');
  console.log('other');
}
