'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    baseTax: {
        type: Number,
        required: true,
    },
    distanceTax: {
        type: Number,
        required: true,
    },
    timeTax: {
        type: Number,
        required: true,
    },
    cityTax: {
        type: Number,
        required: true,
    },
    triggerSuperKM: {
        type: Number,
        required: true,
    },
    superKMTax: {
        type: Number,
        required: true,
    },
    citySpeed: {
        type: Number,
        required: true,
    },
    publicTranpPass: {
        type: Number,
        required: true,
    },
    dynamicPrice: {
        type: Number,
        required: true,
    },
    cityId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('CityParams', schema);