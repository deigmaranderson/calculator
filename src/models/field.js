'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Field', schema);