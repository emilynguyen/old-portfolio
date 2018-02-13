'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'); // "express-handlebars"
var http = require('http');
var path = require('path');

// Routes
var home = require('./routes/home');
var about = require('./routes/about');
var project = require('./routes/project');
var error = require('./routes/error');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', function (req, res) {
    res.render('home');
});
*/

app.get('/', home.view);
app.get('/about', about.view);
app.get('/:title', project.view);
app.get('*', error.view);



app.listen(process.env.PORT || 3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
