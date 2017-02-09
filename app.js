// esLinter is loaded locally
// begin with 'use strict'
'use strict';

alert('Hey, want to play a guessing game?');

// Ask for user's name
var userName = prompt('What\'s your name?');
alert(userName + ', nice to meet you.');

// store user's name for printing onto HTML
var userID = document.getElementById('userName');
userID.innerHTML = userName;

var rightAnswers = 0; // track user correct answers

// design if-else loop for questions and answers; must be yes/y or no/n
// Question 1: Is my name Keeley? Yes. id = nameOne
var answerOne = prompt('Is my full name "Keeley"?', "Yes or No").toLowerCase();

// Experimenting with code from Yuval:
// I FINALLY FIGURED THIS OUT, WOW. Needs HTML to work.
var nameOne = document.getElementById('answerOne');
nameOne.innerHTML = answerOne;

if (answerOne === "yes" || answerOne === "y") {
  alert('You got it! My name is Keeley.');
  rightAnswers++;
  console.log('Yes, correct answer. rightAnswers +1');

} else if (answerOne === 'no' || answerOne === 'n') {
  alert('No, sorry, it is Keeley.');
  console.log('No, incorrect.');

} else {
  alert('Are you confused? Yes or no, please.');
  console.log('Other');
}

// Question 2: Is my favorite breakfast food pancakes? No. id = foodTwo.
var answerTwo = prompt('Is my favorite breakfast food pancakes?', 'Yes or No').toLowerCase();

var foodTwo = document.getElementById('answerTwo');
foodTwo.innerHTML = answerTwo;

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('No, I actually love cereal. Pancakes are amazing, though.');
  console.log('Yes, incorrect answer.');

} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Good guess, my favorite breakfast food is actually cereal.');
  rightAnswers++;
  console.log('No, correct answer. rightAnswer +1.');

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
  rightAnswers++;
  console.log('Yes, correct answer. rightAnswer +1.');

} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Nope, sorry, I actually can play the piano.');
  console.log('No, incorrect answer.');

} else {
  alert("Are you confused? This is a yes or no, check your spelling.");
  console.log('other');
}

// Question 4: Am I tall enough to ride most roller coasters? No. answerFour
var answerFour = prompt ('Am I tall enough to ride most rollercoasters?').toLowerCase();

var tallFour = document.getElementById('answerFour');
tallFour.innerHTML = answerFour;

if (answerFour === 'yes' || answerFour === 'y') {
  alert('No, I\'m too short.');
  console.log('Yes, incorrect answer.');

} else if (answerFour === 'no' || answerFour === 'n') {
  alert('I am not tall enough, it\'s true.');
  rightAnswers++;
  console.log('No, correct answer. rightAnswers +1');

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
  rightAnswers++;
  console.log('Yes, correct answer. rightAnswer +1');

} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Come on now, everyone knows a hot dog is a sandwich.');
  console.log('No, incorrect answer.');

} else {
  alert('I know, I think it\'s a dumb question too.');
  console.log('other');
}

//Question 6: How old am I? 28, id=answerSix
// Need to give the user four opportunities, and tell them if they are too high or low
var age = 28; //Set answer
var counter = 5; //Start counter

while (answerSix != age && counter > 0) {  //run loop while guess not equal to age AND counter is greater than 0
  var answerSix = prompt('How old am I? I\'ll give you 5 guesses. You have ' + counter ' left.');
  console.log(answerSix, typeof(answerSix));

  if (answerSix < age) {
    alert('Guess higher! You have ' + counter + ' more tries.');
    counter--;
    console.log('User guessed too low. ' + counter + ' more tries.');
  } else if (answerSix > age) {
    alert('Guess lower! You have ' + counter + ' more tries.');
    counter--;
    console.log('User guessed too high. ' + counter + ' more tries.');
  } else if (counter === 0) {
    alert('Sorry, you ran out of tries!');
  }
}

if (answerSix == age) {
  alert('Yep, I\'m ' + age + '!');
  rightAnswers++;
  counter = -1;
  console.log('User guessed correct age (28). rightAnswer +1');
}

var ageSix = document.getElementById('answerSix');
ageSix.innerHTML = answerSix;

//Question 7: Can you guess an outdoor activity I like?
var activityArray = ['running', 'biking', 'hiking', 'camping'];

// two for loops; one for user guesses and one for searching through the array
for (counter = 6; counter > 0; counter--) {

  var answerSeven = prompt('Can you guess an outdoor activity that I like? You have ' + counter + ' guesses left.').toLowerCase();
  console.log(answerSeven, typeof(answerSeven)); // debugging code  

  for (var i = 0; i < activityArray.length; i++) { // loop sorts through array
    if (activityArray[i] === answerSeven) {
      alert('You guessed it! I like ' + answerSeven + '.');
      i = activityArray.length;
      rightAnswers++;
      counter = -1;
      console.log('Answer was in array. rightAnswer +1');
      break;
    } else if (activityArray[i] != answerSeven) {
      console.log('Answer was not in array.');
     // break;
    } else {
      counter--;
      alert('Guess again! You have ' + counter + 'tries left!');
      //break;
    }
  } 
  if (counter > 0) {
    alert('Sorry, you didn\'t guess right. Guess again.');
  };
} //end main for loop

var outsideSeven = document.getElementById('answerSeven');
outsideSeven.innerHTML = answerSeven;

// Final Answer Tally

alert('Congrats, ' + userName + '! You got ' + rightAnswers + ' out of 7!');

var finalTally = document.getElementById('rightAnswers');
finalTally.innerHTML = rightAnswers;
