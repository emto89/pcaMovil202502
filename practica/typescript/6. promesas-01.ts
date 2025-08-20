(()=>{
  
   console.log('Inicio de la aplicación')
   
   const prom1 = new Promise( ( resolve, reject)=>{
        setTimeout(()=>{
            reject('Se termino el timeout')
        }, 2000)

   } ); 
   
   prom1
       .then( mensaje => console.log(mensaje))
       .catch( err => console.warn( err))

   
   console.log('Fin de la aplicación')

})();