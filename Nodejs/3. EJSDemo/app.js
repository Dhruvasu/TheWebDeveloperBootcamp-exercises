var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.render("home.ejs");
});

app.get("/website/:name", function(req, res) {
	var name = req.params.name;
	res.render("website.ejs", {websiteName: name});
});

app.get("*", function(req, res) {
	res.send("wrong page");
});

app.listen(3000, function() {
	console.log("Server started");
});