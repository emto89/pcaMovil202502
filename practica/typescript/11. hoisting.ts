// hoisting - elevacion 
// declaracion de la funcion se eleva la funcion y el cuerpo 
hola();

function hola(){
    console.log('Hola!!');
}

// VAR -> sube la declaración de la variable pero el valor no => undefined
/*
 var y; // offf89
 console.log(y)
 y=10  // offf89
*/
console.log(y) // el valor de undefined
var y = 10;
//LET - CONST se elevan al scope, pero quedan en la zona temporal muerta -> error de referencia
// console.log(x) dara error de referencias
let x = 10;

const sumar = ( a: number, b:number) => a + b ;