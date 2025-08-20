"use strict";
(() => {
    /*class Avenger{
       nombre: string;
       equipo: string;
       nombreReal: string;
       puedePelear: boolean;
       peleasGanadas: number;
 
       constructor( nombreCompleto: string,
          equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number){
             this.nombre = nombreCompleto;
             this.equipo= equipo;
             this.nombreReal = nombreReal;
             this.peleasGanadas = peleasGanadas;
             this.puedePelear = puedePelear;
          }
    }*/
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'capitán america');
    const spiderman = new Avenger('Spiderman', 'Tony', 'Peter', false, 10);
    console.log(antman);
    console.log(spiderman);
})();
