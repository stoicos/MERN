import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/* const autorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String
}) */

const cursoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descipcion: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: true
    },
    /* autor: [autorSchema], */
    autor: {
        type: Schema.Types.ObjectId, ref: 'users',
    },
    imagen: {
        type: String,
        required: false
    }
})

export default mongoose.model('Cursos', cursoSchema)