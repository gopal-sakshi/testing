var port = 9901;
var url = "http://localhost:" + 9966;

var express = require("express");
var app = express();

var nodeApp = require("./nodeApp");
nodeApp(url, app);

console.log("listening on " + url);
app.listen(port);