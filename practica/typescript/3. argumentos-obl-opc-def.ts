(function(){
  
   // activar('batman')
   // activar('batman', 'noche')
   // activar('batman', 'noche', 'batiseñal');
   // Parametros obligatorios, opcionales y por defecto
   function activar(quien: string, momento?: string, objeto: string = 'batiseñal') {

     if (momento) {
         console.log(`${quien} activo la ${objeto} en la ${momento}`);
     }else {
         console.log(`${quien} activo la ${objeto}`);
     }

   }

    activar('batman');
    activar('batman', 'noche');
    activar('batman', 'noche', 'alarma secreta');
    activar('batman', undefined, 'alarma secreta');
    activar('batman', 'noche', undefined);
    activar('batman', 'alarma secreta');
})();