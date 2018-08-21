'use strict'

const repository = require('../repositories/car-economy-repository');
// const validationContract = require('../validators/validator');
const md5 = require('md5');

/**
 * @api {get} /user Request Users information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {String} name Full name of the user
 * @apiSuccess {String} email  Email address of the User.
 * @apiSuccess {Boolean} active  Status of the User.
 * @apiSuccess {Object[]} roles  Roles of the User.
 * @apiSuccess {Datetime} created  Date user was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "name": "Luis Filipe",
 *              "email": "lionphilips@gmail.com",
 *              "active": true,
 *              "roles": ["user", "admin"],
 *              "created": "2018-01-01 11:00:00",
 *          }
 *     ]
 *
 */
exports.get = async (req, res, next) => {
    try {
        let data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

/**
 * @api {get} /user/:id Request a specific User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} name Full name of the user
 * @apiSuccess {String} email  Email address of the User.
 * @apiSuccess {Boolean} active  Status of the User.
 * @apiSuccess {Object[]} roles  Roles of the User.
 * @apiSuccess {Datetime} created  Date user was created.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "name": "Luis Filipe",
 *           "email": "lionphilips@gmail.com",
 *           "active": true,
 *           "roles": ["user", "admin"],
 *           "created": "2018-01-01 11:00:00",
 *     }
 *
 */
exports.getById = async (req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
}

/**
 * @api {post} /user/ Create a new User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} name User fullname.
 * @apiParam {String} email User email address.
 * @apiParam {String} password User password.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User created"
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "errors": {}
 *     }
 */
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



