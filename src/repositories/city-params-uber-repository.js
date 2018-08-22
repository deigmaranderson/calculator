'use strict'

const mongoose = require('mongoose');
const CityParamsUber = mongoose.model('CityParamsUber');

exports.get = async() => {
    let res = await CityParamsUber.find({});
    return res;
}

exports.getById = async(id) => {
    let res = await CityParamsUber.find({});
    res = res.filter(item => {
        return item.cityID === id;
    });
    return res;
}

exports.create = async(data) => {
    console.log(data);
    let cityParamsUber = new CityParamsUber(data);
    await cityParamsUber.save();
}

exports.edit = async (data) => {
    await CityParamsUber.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CityParamsUber.findByIdAndRemove(data._id);
}