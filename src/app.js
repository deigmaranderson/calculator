'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.CONNECTION_STRING, { useNewUrlParser: true });

//load models
const User = require('./models/user');
const CarEconomy = require('./models/car-economy/car-economy');
const CarCost = require('./models/car-economy/car-cost');
const CalculatorParams = require('./models/car-economy/calculator-params');
const CityParams = require('./models/car-economy/city-params');
const POPCost = require('./models/car-economy/pop-cost');
const Field = require('./models/field');

//load routes
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
const carEconomyRoute = require('./routes/calc-car-economy-route');
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS ()
if(config.MODE == 'development') {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });
}

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/car-economy', carEconomyRoute);

module.exports = app;