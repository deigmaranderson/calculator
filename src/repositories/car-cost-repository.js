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
    await CarCost.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CarCost.findByIdAndRemove(data._id);
}