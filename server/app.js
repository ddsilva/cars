#!/usr/bin/env node

var express = require('express'),
    bodyParser = require('body-parser'),
    carRouter = require('./routers/car_router'),
    brandRouter = require('./routers/brand_router'),
    app = express();

app.listen(3000);

// Static files
app.use(express.static('public'));

// Parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use('/api', carRouter);
app.use('/api', brandRouter);

// Mock data
require('./mock_data');
