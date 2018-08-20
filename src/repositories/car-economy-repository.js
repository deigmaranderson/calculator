'use strict'

const mongoose = require('mongoose');
const CarEconomy = mongoose.model('CarEconomy');

exports.get = async () => {
    let res = await CarEconomy.find({});
    return res;
}

exports.getById = async (id) => {
    let res = await CarEconomy.findById(id);
    return res;
}

exports.create = async (data) => {
    let carEconomy = new CarEconomy(data);
    await carEconomy.save();
}

exports.update = async (data) => {
    let carEconomy = new CarEconomy(data);
    await carEconomy.findByIdAndUpdate(
        data.id,
        data,
        (err, todo) => {
            // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        });
}

exports.delete = async (data) => {
    let carEconomy = new CarEconomy();
    carEconomy.findByIdAndRemove(data, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "CarEconomy successfully deleted",
            id: carEconomy._id
        };
        return res.status(200).send(response);
    });
}