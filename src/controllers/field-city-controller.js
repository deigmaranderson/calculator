'use strict'

const repository = require('../repositories/field-city-repository');
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
        data = data.map(item => {
            return {id: item._id, description: item.description};
        });
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
        await repository.create({
            description: req.body.description
        });
        res.status(200).send({ message: 'field city created' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.edit({
            id: req.body.id,
            req
        });

        res.status(200).send({ message: 'field city updated' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete({
            _id: req.body._id
        });

        res.status(200).send({ message: 'field city deleted' });
    } catch (e) {
        res.status(500).send({ error: e });
    }
}



