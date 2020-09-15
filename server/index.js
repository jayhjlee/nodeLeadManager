const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../build/static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.get("*", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../build/static/index.html"));
});

module.exports = app;
