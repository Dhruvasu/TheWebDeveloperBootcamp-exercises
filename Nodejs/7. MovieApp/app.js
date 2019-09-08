var express = require("express");
var request = require("request");
var app = express();
//body-parser is required to extract body portion of request and expose it on req.body
var bodyParser = require("body-parser");
var movieToSearch;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.render("search.ejs");
});

app.post("/search", function(req, res) {
	movieToSearch = req.body.movie;
	res.redirect("/requests");
});

app.get("/requests", function(req, res) {
	request("http://www.omdbapi.com/?s=" + movieToSearch + "&apikey=thewdb", function(error, response, body) {
		if (!error && response.statusCode === 200) {
			//data received from api is string. JSON.parse converts it to JSON format.
			var parsedData = JSON.parse(response.body);
			res.render("results.ejs", {data: parsedData});
		}
	});
});

app.listen(3000, function() {
	console.log("Server started!");
});