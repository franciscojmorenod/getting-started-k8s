// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained) 1
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home.pug', {
  });
});

app.listen(8080);
module.exports.getApp = app;