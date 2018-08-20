'use strict'

const mongoose = require('mongoose');
const CalculatorParams = mongoose.model('CalculatorParams');

exports.get = async () => {
    let res = await CalculatorParams.find({});
    return res;
}

exports.getById = async (id) => {
    let res = await CalculatorParams.findById(id);
    return res;
}

exports.create = async (data) => {
    let calculatorParams = new CalculatorParams(data);
    await calculatorParams.save();
}

exports.edit = async (data) => {
    let calculatorParams = new CalculatorParams(data);
    await calculatorParams.findByIdAndUpdate(
        data.id,
        data,
        (err, todo) => {
            // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        });
}

exports.delete = async (data) => {
    let calculatorParams = new CalculatorParams(data);
    calculatorParams.findByIdAndRemove(data.id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "CalculatorParams successfully deleted",
            id: calculatorParams._id
        };
        return res.status(200).send(response);
    });
}