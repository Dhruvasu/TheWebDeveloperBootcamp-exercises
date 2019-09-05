var request = require("request");
var moment = require("moment");

request("https://api.sunrise-sunset.org/json?lat=43.6532&lng=-79.3832", function(error, response, body) {
	if (!error & response.statusCode === 200) {
		var data = JSON.parse(body);
		var timeStr = data["results"]["sunset"];
		var timeStr2 = timeStr.slice(0, 7);
		var time = timeStr2.split(":");
		time[0] = parseInt(time[0]) - 4;
		var ampm = timeStr.slice(9, 11);
		console.log(ampm);
		if (time[0] > 12) {
			time[0] = time[0] - 12;
			ampm = "PM";
		}
		time[0] = time[0].toString();
		var date = new Date("December 17, 1995 " + time[0] + ":" + time[1] + ":" + time[2]);
		console.log("Sunset in toronto is at: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + ampm);
	}
});