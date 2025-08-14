(function(){
    let anho = Date.now();
    console.log("La clase de desarrollo móvil" + anho + " es genial");
   
    function getEdad(){
        return 20;
    }
    function getAnho(){
        return  new Date().getFullYear().toString();
    }
    const nombre = "Medardo";
    const apellido = "Medina";
    const edad = 20;

    const nombreCompleto = nombre + " "+ apellido;
    const nombreCompletoEdad = nombreCompleto + " tiene " + edad + " años";

    const nombreCompletoTL = `${nombre} ${apellido}`;
    const nombreCompletoEdadTL = `${nombreCompletoTL} tiene ${edad} años`;

    const salida = `Hola, mi nombre es ${nombreCompletoTL} y tengo ${getEdad()} años.`;

    console.log(nombreCompleto);
    console.log(nombreCompletoEdad);
    console.log(nombreCompletoTL);
    console.log(nombreCompletoEdadTL);
    console.log(salida);
    

})();