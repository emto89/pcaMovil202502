(()=>{
   
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán américa',
        poder: 'Droga'
    }
    /*console.log( avenger.nombre)
    console.log( avenger.clave)
    console.log( avenger.poder)*/

    const extraer = ( {nombre, poder }: any )=>{
        // const {nombre, poder } = avenger;
            console.log( nombre)
            //console.log( clave)
            console.log( poder)
    }

    extraer( avenger )

    const avengers: string[] = ['Thor','Ironman','Spiderman'];

    const [ , , s] = avengers;
    console.log( s )

    const extraerArr = ( [thor, Ironman, Spiderman]: string[])=>{
        console.log( thor )
    }

    extraerArr(avengers);
    
})();