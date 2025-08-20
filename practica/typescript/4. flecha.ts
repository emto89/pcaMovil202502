(function(){
 
   const miFuncion = function(a: string) {
    return a.toUpperCase();
   }

   const miFuncionF = (a: string) => a.toUpperCase();

   console.log(miFuncion("hola"));
   console.log(miFuncionF("hola"));
 
   const miFuncionF2 = (a: number, b: number) => a + b;
   console.log(miFuncionF2(5, 10));
   let a = 19;
   const hulk = {
     nombre: "Hulk",
     smash(){
        setTimeout(() => {
            console.log(`${this.nombre} smash!!!`);
        }, 3000);
     },
     edad: 30,
   }

   hulk.smash();
})();