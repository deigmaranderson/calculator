'use strict'

const mongoose = require('mongoose');
const CityParamsPop = mongoose.model('CityParamsPop');

exports.get = async() => {
    let res = await CityParamsPop.find({});
    return res;
}

exports.getById = async(id) => {
    let res = await CityParamsPop.find({});
    res = res.filter(item => {
        return item.cityID === id;
    });
    return res;
}

exports.create = async(data) => {
    console.log(data);
    let cityParamsPop = new CityParamsPop(data);
    await cityParamsPop.save();
}

exports.edit = async (data) => {
    await CityParamsPop.findOneAndUpdate(
        data._id,
        data,
        {new: true});
}

exports.delete = async (data) => {
    await CityParamsPop.findByIdAndRemove(data._id);
}