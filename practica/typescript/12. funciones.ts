// funciones declaradas
function suma( a: number, b: number){
    return a + b;
}
suma(10, 5);
// expresion de funcion 
/*
 const resta;
 resta = function(a: number, b: number){
        return a - b;

*/
const resta = function(a: number, b: number){
    return a - b;
}
resta(10, 5);
// funcion de flecha
const multiplica = (a: number, b: number) => a * b ;
// this
multiplica(10, 5);

// inmutabilidad
const agregarItem  = (arr: string[], item: string)=> [ ...arr, item];
const arreglo = ['1', '2', '3'];
const nuevoArreglo = agregarItem(arreglo, '4');

console.log(nuevoArreglo);
console.log(arreglo);