// Una variable que contenga tu altura en centímetros (entero)
let alturaCm = "165 centimetros"

console.log(parseInt(alturaCm) + " centimetros")

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetro = "1.65 centimetros"

console.log(parseFloat(alturaMetro) + " metros")

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let kg = "75 kilogramos";
console.log(parseFloat(kg) + " kilogramos")

// - Una variable que contenga tu altura en metros redondeada hacia arriba


let alturaArriba = "1.65 metros"
alturaNumeroConvertido = parseFloat(alturaArriba)

console.log(Math.ceil(alturaNumeroConvertido) + " metros (redondeados hacia arriba)")
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let kgAbajo = "72.75 kilogramos";
kgConvertido = parseFloat(kgAbajo)

console.log(Math.floor(kgConvertido) + "kilogramos (redondeados hacia abajo)")

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
//es igual al máximo valor que se puede obtener en Javascript

let maxValueJs = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log("El valor da como resultado " + maxValueJs)