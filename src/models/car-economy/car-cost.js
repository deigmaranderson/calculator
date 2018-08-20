'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fixedCost: {
        type: Number,
        required: true,
    },
    fuelCost: {
        type: Number,
        required: true,
    },
    parkingCost: {
        type: Number,
        required: true,
    },
    washCost: {
        type: Number,
        required: true,
    },
    maintenceCost: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('CarCost', schema);