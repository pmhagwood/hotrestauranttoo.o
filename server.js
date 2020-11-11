var express = require("express");
var path = require("path");

var app = express();
var PORT = 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
