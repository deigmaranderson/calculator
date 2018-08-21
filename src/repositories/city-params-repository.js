'use strict'

const mongoose = require('mongoose');
const CityParams = mongoose.model('CityParams');

exports.get = async() => {
    let res = await CityParams.find({});
    return res;
}

exports.getById = async(id) => {
    let res = await CityParams.find({});
    res = res.filter(item => {
        return item.cityId === id;
    });
    return res;
}

exports.create = async(data) => {
    console.log(data);
    let cityParams = new CityParams(data);
    await cityParams.save();
}

exports.edit = async (data) => {
    await CityParams.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CityParams.findByIdAndRemove(data._id);
}