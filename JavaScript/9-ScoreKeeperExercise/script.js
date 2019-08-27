var num = document.querySelector("input");
var playingTo = num.value;

num.addEventListener("click", function() {
	document.querySelector("p").textContent = "Playing to: " + num.value;
	playingTo = num.value;
});

var btnp1 = document.querySelector("#p1");
var btnp2 = document.querySelector("#p2");
var btnreset = document.querySelector("#reset");
var scores = document.querySelector("h1");
var p1 = 0;
var p2 = 0;

btnp1.addEventListener("click", function() {
	if (p1 < playingTo && p2 < playingTo) {
		p1 += 1;
		print();
	}
	if (p1 == playingTo) {
		print();
		var p1Score = document.querySelector("#p1Score");
		p1Score.style.color = "red";
	}
});

btnp2.addEventListener("click", function() {
	if (p1 < playingTo && p2 < playingTo) {
		p2 += 1;
		print();
	}
	if (p2 == playingTo) {
		print();
		var p2Score = document.querySelector("#p2Score");
		p2Score.style.color = "red";
	}
});