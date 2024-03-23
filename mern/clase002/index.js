const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicacion = (num1, num2) => {
    return num1 * num2
}

// Common.js
// module.exports = {suma, resta, multiplicacion}

// Named export (greet)
export function greet(name) {
    return `Hello, ${name}`
}

// Me lo puedo traer con cualquier nombre
export default {resta,multiplicacion}

function greet2(name) {
    return `Holaaa, ${name}`
}

export {greet2 as greetings};