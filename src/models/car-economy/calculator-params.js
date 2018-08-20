'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    maintenceCost: {
        type: Number,
        required: true,
    },
    IPVA: {
        type: Number,
        required: true,
    },
    deprecation: {
        type: Number,
        required: true,
    },
    poupanca: {
        type: Number,
        required: true,
    },
    DPVAT: {
        type: Number,
        required: true,
    },
    CRLV: {
        type: Number,
        required: true,
    },
    carWash: {
        type: Number,
        required: true,
    },
    cityParams: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('CalculatorParams', schema);