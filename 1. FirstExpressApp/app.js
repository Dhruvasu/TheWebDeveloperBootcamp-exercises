var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi");
});

app.get("/bye", function(req, res) {
	res.send("Bye");
});

app.get("/bye/good", function(req, res) {
	res.send("Goodbye");
});

app.get("*", function(req, res) {
	res.send("NAH");
});

app.listen(3000, function() {
	console.log("Server started");
});