(function(){
    //activar('batman')
    //activar('robin', 'ahora')
    //activar('batman', 'ahora', 'batiseñal')
    // Parametros Obligatorios, opcionales y por defecto
    function activar( quien: string, momento?: string, objeto:string = 'batiseñal'){
        if( momento ){
            console.log(`${quien} activo la ${objeto} en el ${momento}`);
        }else{
            console.log(`${quien} activo la ${objeto}`);
        }
    }
    activar('batman');
    activar('robin', 'ahora');
    activar('batman', 'noche', 'alarma secreta');
    activar('batman', undefined, 'alarma secreta');
    activar('batman', 'ahora', undefined);
    activar('batman', 'alarma secreta');

})();