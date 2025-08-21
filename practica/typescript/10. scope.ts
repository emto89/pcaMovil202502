// Scope = determina donde una variable es visible y cuanto vive
/*
Global:    Visible en todo el programa     
De funcion:declarada dentro de una funcion vive alli
De bloque: let/ const entan dentro de las llaves    
*/
if(true){
    var a = 1;
    let b = 2;
    const c = 3 ;
}
console.log(a)
//console.log(b)
//console.log(c)

const puerto = 3000;
function iniciar(){
    const puerto = 8000;
    console.log(puerto);
}
iniciar()
console.log(puerto)
