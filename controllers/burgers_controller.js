// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
    res.render('index');
});

