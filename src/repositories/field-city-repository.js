'use strict'

const mongoose = require('mongoose');
const FieldCity = mongoose.model('FieldCity');

exports.get = async () => {
    let res = await FieldCity.find({});
    return res;
}

exports.create = async (data) => {
    let fieldCity = new FieldCity(data);
    await fieldCity.save();
}

exports.edit = async (data) => {
    await FieldCity.findOneAndUpdate(
        data.id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await FieldCity.findByIdAndRemove(data._id);
}