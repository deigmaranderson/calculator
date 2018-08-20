'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carCost: {
        type: Number,
        required: true,
    },
    city: {
        type: Number,
        required: true,
    },
    divingDistanceIntegration: {
        type: Number,
        required: true,
    },
    drivingDays: {
        type: Number,
        required: true,
    },
    drivingDistance: {
        type: Number,
        required: true,
    },
    fuelConsumption: {
        type: Number,
        required: true,
    },
    fuelCost: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: Number,
        required: true,
    },
    insuranceCost: {
        type: Number,
        required: true,
    },
    parkingCost: {
        type: Number,
        required: true,
    },
    publicTransportIntegration: {
        type: Number,
        required: true,
    },
    travelsPerDay: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('CarEconomy', schema);