// create web server
var express = require('express');
var app = express();

// create file system object
var fs = require('fs');

// create body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create server
var server = app.listen(8000, function() {
  console.log('Server is running at http://localhost:8000');
});
