var express = require("express");
var app = express();
var animals = {
	"pig": "Oink",
	"cow": "Moo",
	"cat": "Meow"
};

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment.");
});

app.get("/speak/:animal", function(req, res) {
	res.send("The " + req.params.animal + " says " + animals[req.params.animal]);
});

app.get("/repeat/:word/:num", function(req, res) {
	var str = "";
	for (var i = 0; i < req.params.num; i++) {
		str = str + req.params.word + " ";
	}
	var len = str.length;
	str = str.slice(0, len - 1);
	res.send(str);
});

app.get("*", function(req, res) {
	res.send("Wrong page!");
});

app.listen(3000, function() {
	console.log("Started server");
});