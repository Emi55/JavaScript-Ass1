// Assignment 1 | COMP1073 Client-Side JavaScript

var button1 = ['turkey','Mom','Dad','The Dog','My Teacher','The Elephant','The Cat'];
var select1 = document.querySelector('#button1');
console.log(select1);
select1.addEventListener('click', speak1)

var button2 = ['Sat on','Ate','Danced with','Saw','Doesn"t like it','The Cat'];
var select2 = document.querySelector('#button2');
console.log(select2);
select2.addEventListener('click', speak2)

var button3 = ['A Funny','A Scary','A Goofy','A Slimy','A Barking','A Fat'];
var select3 = document.querySelector('#button3');
console.log(select3);
select3.addEventListener('click', speak3)

var button4 = ['Goat','Monkey','Fish','Cow','Frog','Bug','Bug','Worm'];
var select4 = document.querySelector('#button4');
console.log(select4);
select4.addEventListener('click', speak4)

var button5 = ['On the Moon','On the chair','In my spaghetti','In my soup','On the grass','In my shoes'];
var select5 = document.querySelector('#button5');
console.log(select5);
select5.addEventListener('click', speak5)


function speak1(){
	var makeItHappen = getRandomArbitrary(0, button1.length-1);
	textToSpeak = textToSpeak + button1[makeItHappen]
	speakNow(textToSpeak);
}

function speak2(){
var makeItHappen = getRandomArbitrary(0, button2.length-1);
	textToSpeak = textToSpeak + button2[makeItHappen]
	speakNow(textToSpeak);
}

function speak3(){
	var makeItHappen = getRandomArbitrary(0, button3.length-1);
	textToSpeak = textToSpeak + button3[makeItHappen]
	speakNow(textToSpeak);
}

function speak4(){
	var makeItHappen = getRandomArbitrary(0, button4.length-1);
	textToSpeak = textToSpeak + button4[makeItHappen]
	speakNow(textToSpeak);
}

function speak5(){
	var makeItHappen = getRandomArbitrary(0, button5.length-1);
	textToSpeak = textToSpeak + button5[makeItHappen]
	speakNow(textToSpeak);
}

// this function was obtain from this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
  }

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak ="";
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
