'use strict'

const mongoose = require('mongoose');
const CityParams = mongoose.model('CityParams');

exports.get = async() => {
    let res = await CityParams.find({}, 'name email active roles created');
    return res;
}

exports.getById = async(id) => {
    let res = await CityParams.findById(id, 'name email active roles created');
    return res;
}

exports.create = async(data) => {
    let cityParams = new CityParams(data);
    await cityParams.save();
}
