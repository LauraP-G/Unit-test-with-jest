console.log("Hello World")

const sum = (a,b) =>{
    return a + b;
}


// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

let fromDollarToYen = (dollarAmount) => {
    let euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

let fromYenToPound = (yenAmoun) => {
    let  euroAmount = yenAmoun/oneEuroIs.GBP
    return euroAmount * oneEuroIs.GBP
}


console.log(fromYenToPound(1))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };



