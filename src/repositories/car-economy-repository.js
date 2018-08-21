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

exports.edit = async (data) => {
    await CarEconomy.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CarEconomy.findByIdAndRemove(data._id);
}