var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
var fruits = ["apple", "banana", "mango"];

app.get("/", function(req, res) {
	res.render("home.ejs");
});

app.get("/fruits", function(req, res) {
	res.render("fruits.ejs", {fruits: fruits});
});

app.post("/addFruit", function(req, res) {
	var newFruit = req.body.newfruit;
	fruits.push(newFruit);
	console.log(req.body.newfruit);
	res.redirect("/fruits");
});

app.get("*", function(req, res) {
	res.send("Page does not exist");
});

app.listen(3000, function() {
	console.log("Server started");
});