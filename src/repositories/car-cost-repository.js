'use strict'

const mongoose = require('mongoose');
const CarCost = mongoose.model('CarCost');

exports.get = async () => {
    let res = await CarCost.find({});
    return res;
}

exports.getById = async (id) => {
    let res = await CarCost.findById(id);
    return res;
}

exports.create = async (data) => {
    let carCost = new CarCost(data);
    await carCost.save();
}

exports.edit = async (data) => {
    let carCost = new CarCost(data);
    await carCost.findByIdAndUpdate(
        data.id,
        data,
        (err, todo) => {
            // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        });
}

exports.delete = async (data) => {
    let carCost = new CarCost(data);
    carCost.findByIdAndRemove(data.id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "CarCost successfully deleted",
            id: carCost._id
        };
        return res.status(200).send(response);
    });
}