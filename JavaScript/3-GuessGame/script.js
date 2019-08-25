var guessed = prompt("Guess a number");

var num = Math.floor(Math.random() * (11 - 0));

if (Number(guessed) < num) {
	alert("Guess is lower");
}
else if (Number(guessed) === num) {
	alert("Correct guess");
}
else {
	alert("Guess is higher");
}