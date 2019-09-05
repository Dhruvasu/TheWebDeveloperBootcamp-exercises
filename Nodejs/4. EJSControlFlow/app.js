var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.send("Home");
});

app.get("/posts", function(req, res) {
	var posts = [{title: "Post1", comments: 2},
		     {title: "Post2", comments: 5}
	];
	res.render("posts.ejs", {arr: posts});
});

app.get("/:website", function(req, res) {
	var name = req.params.website;
	res.render("home.ejs", {websiteName: name});
});

app.get("*", function(req, res) {
	res.send("wrong page");
});

app.listen(3000, function() {
	console.log("Server started");
});