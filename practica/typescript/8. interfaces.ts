(()=>{
  
    interface Xmen {
        nombre: string;
        edad:   number;
        poder?:  string;
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    const enviarMision = ( xmen: Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la misión`)
    }
    const regresarAlCuartel = ( xmen: Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} al cuartel`)
    } 

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
   
    


})();