function main(){
    var edade =[ 21, 22, 23, 20 ];
    var estudiantes = [
        { nombre: "Juan", edad: 20, nota:4.5 },
        { nombre: "Ana", edad: 22, nota:3.8 },
        { nombre: "Luis", edad: 21, nota:4.2 },
        { nombre: "Maria", edad: 23, nota:3.5 }
    ]
    // todos los estudiantes que tienen edad mayor a 21 años 
    var estudiantesMayores = estudiantes.filter( function(estudiante){
         return estudiante.edad > 21;
    });  
    // Mostrar estudiantes mayores a 21 
    estudiantesMayores.forEach( function(estudiante){
        console.log(estudiante.nombre + " tiene " + estudiante.edad + " años ");
    });
    // Crear un nuevo array un mensaje para cada estudiante con la información de la nota la estructura del mensae 
    // sea { estudiante: "nombre", mensaje: "tiene una nota de nota" }
    var mensajes = estudiantes.map( function(estudiante){
       return { 
         nombre: estudiante.nombre,
         mensaje: "tiene una nota de " + estudiante.nota,
       }
    });

    console.log(mensajes);

}

main();
