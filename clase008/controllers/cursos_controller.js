import Cursos from '../models/cursos_model.js'

async function getCursos() {
    let cursosActivos = await Cursos.find({"estado": true})
        .populate('autor', 'nombre mail -_id')
    return cursosActivos
}

async function createCurso(req) {
    let cursoNuevo = new Cursos({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: true,
        autor: req.params.id
/*         autor: {
            nombre: req.body.autorname,
            apellido: req.body.autorlastname,
            email: req.body.autoremail
        } */
    })
    return await cursoNuevo.save()
}

async function updateCursos(id, body) {
    let cursoActualizado = await Cursos.findByIdAndUpdate(id, {
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion,
        },
    }, {new: true})
    return cursoActualizado
}

async function deactivateCurso(id) {
    let curseoDesactivado = await Cursos.findByIdAndUpdate(id, {
        $set: {
            estado: false,
        }
    }, {new: true})
    return curseoDesactivado
}

export { getCursos, createCurso, updateCursos, deactivateCurso }