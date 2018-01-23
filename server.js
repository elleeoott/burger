//dependencies

var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

//setting handlebars for view

var handlebars = require("express-handlebars");

//get routes

var routes = require("./controllers.burgers_controller.js");

//use our routes

app.use("/", routes);

//listener

app.listen(port);