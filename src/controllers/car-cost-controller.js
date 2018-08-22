'use strict'

const repository = require('../repositories/car-cost-repository');
// const validationContract = require('../validators/validator');
const md5 = require('md5');

exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

exports.getById = async (req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.update({
            id: req.body.id,
            description: req.body.description
        });

        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete({
            id: req.id
        });

        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}



