'use strict'

const mongoose = require('mongoose');
const CalculatorParams = mongoose.model('CalculatorParams');

exports.get = async () => {
    let res = await CalculatorParams.find({});
    return res;
}

exports.create = async (data) => {
    let calculatorParams = new CalculatorParams(data);
    await calculatorParams.save();
}

exports.edit = async (data) => {
    await CalculatorParams.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CalculatorParams.findByIdAndRemove(data._id);
}