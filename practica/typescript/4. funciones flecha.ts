(function() {

    const miFuncion = function(a: string){
        return a.toUpperCase();
    }

    const miFuncionF = (a: string) => a.toUpperCase();

    const sumarN = function(a: number, b: number){
        return a + b;
    }

    const sumarNF = (a: number, b: number) => a + b;

    console.log(miFuncion("hola"));
    console.log(miFuncionF("hola"));
    console.log(sumarN(5, 10));
    console.log(sumarNF(5, 10));


    const hulk = {
        nombre: "Hulk",
        smash(){
            setTimeout(() => {
                console.log(this.nombre + " smash!");
            }, 1000);
        }
    }
    hulk.smash();




})();