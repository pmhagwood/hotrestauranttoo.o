var express = require("express");
var path = require("path");
const http = require("http");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
var waitlist = [];

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
	console.log("this is the reserve page");
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
	return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
	return res.json(waitlist);
});

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
