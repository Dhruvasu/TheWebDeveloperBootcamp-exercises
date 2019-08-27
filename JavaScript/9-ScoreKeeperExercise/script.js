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