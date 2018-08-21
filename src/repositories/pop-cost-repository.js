'use strict'

const mongoose = require('mongoose');
const POPCost = mongoose.model('POPCost');

exports.get = async() => {
    let res = await POPCost.find({}, 'name email active roles created');
    return res;
}

exports.getById = async(data) => {
    let res = await POPCost.findById(data, 'name email active roles created');
    return res;
}

exports.create = async(data) => {
    let popCost = new POPCost(data);
    await popCost.save();
}

exports.edit = async (data) => {
    await POPCost.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await POPCost.findByIdAndRemove(data._id);
}