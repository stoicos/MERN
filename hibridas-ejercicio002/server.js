import express from 'express'

const app = express()

app.use("/", (req, res) => {
    res.send("Marcelo Daniel Anavia")
})

app.use("/materia", (req, res) => {
    res.send("Aplicaciones Híbridas")
})

app.use("/profesor", (req, res) => {
    res.send("Marcos Galbán")
})

const tecnologias = ["HTML", "CSS", "Javascript", "Taildwind", "Vue js"]

app.use("/stack/:tecnologia", (req, res) => {
    let tecnologia = req.params.tecnologia
    if(tecnologias.includes(tecnologia)) {
        res.send("Dónde te dejo el CV?")
    } else {
        res.send("A leer la documentación entonces...")
    }
})

let listado = [
    {
        id: 1,
        nombre: "Oreos",
        precio: 500
    },
    {
        id: 2,
        nombre: "Pepitos",
        precio: 400
    },
    {
        id: 3,
        nombre: "Pitusas",
        precio: 300
    },
    {
        id: 4,
        nombre: "Saladix",
        precio: 600
    },
    {
        id: 5,
        nombre: "Rex",
        precio: 500
    },
    {
        id:6,
        nombre: "Pipas",
        precio: 200
    },
    {
        id: 7,
        nombre: "Bizznike",
        precio: 600
    },
    {
        id: 8,
        nombre: "Block",
        precio: 1000
    },
    {
        id: 9,
        nombre: "Guaymallen",
        precio: 200
    },
    {
        id: 10,
        nombre: "Jorgito",
        precio: 300
    }
]

app.use("/productos", (req, res) => {
    res.send(listado)
})

app.use("/productos/:id", (req, res) => {
    if(listado.find(producto => producto.id === req.params.id)) {
        res.send({producto})
    }
})

app.listen(2023, () => {
    console.log("Servidor corriendo en http://localhost:2023")
})