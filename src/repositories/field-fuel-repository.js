'use strict'

const mongoose = require('mongoose');
const FieldFuel = mongoose.model('FieldFuel');

exports.get = async () => {
    let res = await FieldFuel.find({});
    return res;
}

exports.create = async (data) => {
    let fieldFuel = new FieldFuel(data);
    await fieldFuel.save();
}

exports.edit = async (data) => {
    await FieldFuel.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await FieldFuel.findByIdAndRemove(data._id);
}