require('dotenv').config();
//DEPENDENCIES
const dotenv = require('dotenv');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

//express
var app = express();
app.use(express.static("public"));


//bodyParser (may need to change to true here)
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());


//methodOverride
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//connecting to burgers_controller.js route file
var routes = require('./controllers/burgers_controller.js');
app.use('/',routes);

//setting PORT
var PORT = process.env.PORT;
app.listen(PORT, function () {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});

