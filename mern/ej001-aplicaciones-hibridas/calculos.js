const addition = (number1, number2) => number1 + number2

const division = (number1, number2) => {
    if (number2 === 0) {
        return "No es posible hacer esta división: No se puede dividir por 0"
    } else {
        return number1 / number2
    }
}

function theHighest(arr) {
    let highest = 0
    arr.forEach(number => {
        if (number >= highest) { highest = number };
    });    
    return highest
}

console.log(addition(5, 10))
console.log(division(20, 2))
console.log(division(20, 0))
console.log(theHighest([2,8,9,7,5,6]))