(()=>{

const retirarDinero = ( montoRetirar: number ): Promise<number>=>{
    let dineroActual = 10000

    return new Promise( (resolver, reject )=>{
        if( montoRetirar > dineroActual){
            reject('No hay dinero suficiente')
        }else{
            dineroActual -= montoRetirar
            resolver(dineroActual)
        }
    })
}

 retirarDinero(15000)
     .then( montoActual => console.log(`Me queda ${montoActual}`))
     .catch( console.warn )

})();