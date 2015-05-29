#!/usr/bin/env node

var express = require('express'),
    bodyParser = require('body-parser'),
    carController = require('./controllers/car'),
    app = express();

app.listen(3000);

// Static files
app.use(express.static('public'));

// Parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Controllers
app.use('/api', carController);
