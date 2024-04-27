import Usuario from '../models/usuarios_model.js'

async function getUsers() {
    let usuarios = await Usuario.find()
    return usuarios
}

async function createUser(body) {
    let user = new Usuario({
        nombre: body.nombre,
        password: body.password,
        email: body.email,
        estado: true,
    })
    return await user.save()
}

async function updateUser(body, email) {
    let user = new Usuario.updateOne({"email":email}, {
        $set:{
            nombre: body.nombre,
            password: body.password
        }
    })

    return user
}

export { getUsers, createUser, updateUser }