(()=>{
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

 class Avenger{

     constructor (
        public nombre: string,
        public equipo: string,
        public nombreReal?: string,
        public puedePelear: boolean = true,
        public peleasGanadas: number = 0
     ){}
 }

  const antman = new Avenger('Antman','capitán america');
  const spiderman = new Avenger('Spiderman','Tony', 'Peter', false, 10);

  console.log( antman );
  console.log( spiderman );




})();