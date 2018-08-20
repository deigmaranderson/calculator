'use strict'

const mongoose = require('mongoose');
const POPCost = mongoose.model('POPCost');

exports.get = async() => {
    let res = await POPCost.find({}, 'name email active roles created');
    return res;
}

exports.getById = async(id) => {
    let res = await POPCost.findById(id, 'name email active roles created');
    return res;
}

exports.create = async(data) => {
    let popCost = new POPCost(data);
    await popCost.save();
}
