import express from 'express'
import { getUsers, createUser, updateUser } from '../controllers/usuarios_controller.js'
import Joi from 'joi'

const ruta = express.Router()

const schema = Joi.object({
    nombre: Joi.string()
                .alphanum()
                .min(3)
                .max(10)
                .required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,6}$')),
    email: Joi.string()
    .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
})

ruta.get("/", (req, res) => {
    let resultado = getUsers();
    resultado
        .then((users) => { res.status(200).json(users)} )
        .catch((error) => { res.status(400).json(error)} )
})

ruta.post("/", (req, res) => {
    let body = req.body

    const {error, value} = schema.validate({nombre: body.nombre, email: body.email, password: body.password})
    if(!error){
        let resultado = createUser(body);
        resultado
            .then((user) => { res.status(201).json(user)} )
            .catch((err) => { res.status(400).json(err)} )
    } else {
        res.status(400).json(error)
    }
})

ruta.put("/:email", (req, res) => {
    let body = req.body
    let resultado = updateUser(body, req.params.email);
    resultado
        .then((user) => { res.status(201).json(user)} )
        .catch((error) => { res.status(400).json(error)} )
})

export default ruta