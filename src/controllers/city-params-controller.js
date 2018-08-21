'use strict'

const repository = require('../repositories/city-params-repository');
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



