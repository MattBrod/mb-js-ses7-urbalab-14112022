// EJERCICIOS DE CLASE

let is_pair = (a) => {
    let module = a % 2;
    if (module == 0) {
        return true;
    }
    else {
        return false;
    }
}

let foo = (array, x) => {
    let l = array.length;
    for (i=0; i < l; i++) {
        if (x === array[i]) {
            return i;
        }
    }
    return null;
}

let factorial = (a) => {
    if (a == 1) {
        return a;
    }
    else {
        return a * factorial(a-1);
    }
}

let factorial_ite = (a) => {
    if (a == 1) {
        return a;
    }
    else {
        let value = 1;
        for (i=1; i<=a; i++) {
            value = i * value;
        }
        return value;
    }
}

let cambio = (a) => {
    let billetes = {};
    let arr = [20, 10, 5, 2, 1];
    while (a>0) {
        let dividendo = arr.find(e => e <= a);
        let cociente = Math.floor(a/dividendo);
        a = a%dividendo;
        billetes[dividendo] = cociente;
    }
    return billetes;
}

// EJERCICIOS JAVASCRIPT GEEKSHUB

// EJERCICIO 1

let numero1 = 1;
let numero2 = 2;

let cualEsMayor = (x, y) => {
    if (x > y)
    {
        return x;
    } else
    {
        return y;
    }
}

// EJERCICIO 2

let nombre = "Mateusz";
console.log("Bienvenido %s", nombre)

// EJERCICIO 3

let nombre1 = prompt("Como te llamas?");
console.log("Bienvenido %s", nombre1);

// EJERCICIO 4


let area = (radio) => {
    return Math.PI * radio ** 2 ;
}

// EJERCICIO 5

let es_par = (a) => {
    let module = a % 2;
    if (module == 0) {
        return console.log("Es par");
    }
    else {
        return console.log("Es impar");
    }
}

// EJERCICIO 6

let iva = (precio) => {
    let impuesto = precio * 0.21;
    return (precio + impuesto).toFixed(2);
}

// EJERCICIO 7

let contador = 0;
while (contador < 100 ) {
    console.log(contador + 1);
    contador ++;
}

// EJERCICIO 8

for (let contador = 0; contador < 100; contador++) {
    console.log(contador + 1);
}

// EJERCICIO 9

for (let contador = 1; contador < 101; contador++) {
    if (contador == 1) {
        console.log(contador);
    }
    if (contador % 2 == 0 || contador % 3 == 0) {
        console.log(contador);
    }
}

// EJERCICIO 10

let ventas = (numero) => {
    let total = 0;
    for (i = 0; i < numero; i++) {
        let venta = prompt("Por cuánto se realizo la venta?")
        total += parseFloat(venta);
    }
    return total;
}

// EJERCICIO 11

let laboralONo = () => {
    let dia = prompt("Que día de la semana es?");
    switch (dia) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Jueves':
        case 'Viernes':
            return console.log("Es día laborable")
        case 'Sábado':
        case 'Domingo':
            return console.log("No es día laborable")
    }
}

// EJERCICIO 12

let contraseña = "DulcesPapayas"
let login = () => {
    for (i=0; i<3; i++) {
        let respuesta = prompt("Pon la contraseña")
        if (respuesta == contraseña) {
            console.log("Enhorabuena");
            break;
        }
    }
}

// EJERCICIO 13

let CalculadoraInversa = (operando1, operando2, signo) => {
    switch(signo) {
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            return operando1 / operando2;
        case '^':
            return operando1 ** operando2;
        case '%':
            return operando1 % operando2;
    }
}
