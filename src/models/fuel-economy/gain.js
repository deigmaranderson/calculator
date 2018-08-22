'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    mounthWithoutTax: {
        type: Number,
        required: true,
    },
    fuelCost: {
        type: Number,
        required: true,
    },
    finalGain: {
        type: Number,
        required: true,
    },
    gainYear: {
        type: Number,
        required: true,
    },
    workMoreHourGain: {
        type: Number,
        required: true,
    },
    GNVKitGain: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Gain', schema);