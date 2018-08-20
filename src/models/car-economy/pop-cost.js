'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    distanceWithoutIntegratCost: {
        type: Number,
        required: true,
    },
    distanceWithoutIntegratMinuteCost: {
        type: Number,
        required: true,
    },
    distanceWithIntegratCost: {
        type: Number,
        required: true,
    },
    distanceWithIntegratMinuteCost: {
        type: Number,
        required: true,
    },
    travelWithoutIntegratCost: {
        type: Number,
        required: true,
    },
    travelWithIntegratCost: {
        type: Number,
        required: true,
    },
    totalCostYear: {
        type: Number,
        required: true,
    },
    totalCostPublicTransp: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('POPCost', schema);