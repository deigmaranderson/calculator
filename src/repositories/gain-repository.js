'use strict'

const mongoose = require('mongoose');
const Gain = mongoose.model('Gain');

exports.get = async() => {
    let res = await Gain.find({}, 'name email active roles created');
    return res;
}

exports.getById = async(data) => {
    let res = await Gain.findById(data, 'name email active roles created');
    return res;
}

exports.create = async(data) => {
    let gain = new Gain(data);
    await gain.save();
}

exports.edit = async (data) => {
    await Gain.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await Gain.findByIdAndRemove(data._id);
}