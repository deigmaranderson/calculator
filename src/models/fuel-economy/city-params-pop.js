'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    TPH: {
        type: Number,
        required: true,
    },
    PAX: {
        type: Number,
        required: true,
    },
    travelDistance: {
        type: Number,
        required: true,
    },
    travelTime: {
        type: Number,
        required: true,
    },
    ASP: {
        type: Number,
        required: true,
    },
    GNVPrize: {
        type: Number,
        required: true,
    },
    alcoholPrize: {
        type: Number,
        required: true,
    },
    gasolinePrize: {
        type: Number,
        required: true,
    },
    cityID: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('CityParamsPop', schema);