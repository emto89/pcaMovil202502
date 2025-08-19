(function(){

   function getEdad(){
     return 25;
   }

    const nombre: string = "Medardo";
    const apellido: string = "Mendoza";
    const edad: number = 25;

    const nombreCompleto = "El señor: " + nombre + " " + apellido + ", Edad: " + edad;

    const nombreCompletoTL = `El señor: ${nombre} ${apellido}, Edad: ${edad}`;

    console.log(nombreCompleto);
    console.log(nombreCompletoTL);

    const salida = `Hola, mi nombre es ${nombre} ${apellido}, tengo ${edad} años y mi edad es: ${getEdad()}`;

})();