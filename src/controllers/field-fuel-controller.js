'use strict'

const repository = require('../repositories/field-fuel-repository');
// const validationContract = require('../validators/validator');
const md5 = require('md5');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        data = data.map(item => {
            return {id: item._id, description: item.description};
        });
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            description: req.body.description
        });
        res.status(200).send({ message: 'field fuel created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.edit({
            id: req.body.id,
            description: req.body.description
        });

        res.status(200).send({ message: 'field fuel updated' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete({
            _id: req.body._id
        });

        res.status(200).send({ message: 'field fuel deleted' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}



