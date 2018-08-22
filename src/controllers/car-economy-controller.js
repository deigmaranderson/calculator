'use strict'

const repository = require('../repositories/car-economy-repository');
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
        // let contract = new validationContract();
        // contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        // contract.isEmail(req.body.email, 'Invalid email');
        // contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        // if(!contract.isValid()) {
        //     res.status(400).send(contract.errors()).end();
        //     return;
        // }

        await repository.create({
            carCost: req.body.carCost,
            city: req.body.city,
            divingDistanceIntegration: req.body.divingDistanceIntegration,
            drivingDays: req.body.drivingDays,
            drivingDistance: req.body.drivingDistance,
            fuelConsumption: req.body.fuelConsumption,
            fuelCost: req.body.fuelCost,
            fuelType: req.body.fuelType,
            insuranceCost: req.body.insuranceCost,
            parkingCost: req.body.parkingCost,
            publicTransportIntegration: req.body.publicTransportIntegration,
            travelsPerDay: req.body.travelsPerDay
        });

        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.put = async (req, res, next) => {
    try {
        // let contract = new validationContract();
        // contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        // contract.isEmail(req.body.email, 'Invalid email');
        // contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        // if(!contract.isValid()) {
        //     res.status(400).send(contract.errors()).end();
        //     return;
        // }

        await repository.update({
            id: id,
            carCost: req.body.carCost,
            city: req.body.city,
            divingDistanceIntegration: req.body.divingDistanceIntegration,
            drivingDays: req.body.drivingDays,
            drivingDistance: req.body.drivingDistance,
            fuelConsumption: req.body.fuelConsumption,
            fuelCost: req.body.fuelCost,
            fuelType: req.body.fuelType,
            insuranceCost: req.body.insuranceCost,
            parkingCost: req.body.parkingCost,
            publicTransportIntegration: req.body.publicTransportIntegration,
            travelsPerDay: req.body.travelsPerDay
        });

        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.delete = async (req, res, next) => {
    try {
        // let contract = new validationContract();
        // contract.hasMinLen(req.body.name, 3, 'The name has to be at least 3 characters');
        // contract.isEmail(req.body.email, 'Invalid email');
        // contract.hasMinLen(req.body.password, 6, 'The password has to be at least 3 characters');

        // if(!contract.isValid()) {
        //     res.status(400).send(contract.errors()).end();
        //     return;
        // }

        await repository.delete({
            id: req.body.id
        });

        res.status(200).send({ message: 'User created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}



