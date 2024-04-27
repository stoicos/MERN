import mongoose from "mongoose";

// schema
const usuarioSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
    },
    imagen: {
        type: Boolean,
        required: false,
    },
})

export default mongoose.model("users", usuarioSchema)