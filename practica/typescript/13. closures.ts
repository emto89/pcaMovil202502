function crearContador(inicial = 0){
    let valor = inicial;
    return {
        inc(){ valor++; return valor; },
        dec(){ valor--; return valor; },
        get(){ return valor; },
        reset( n = 0){ valor = n; return valor}
    }
}

const c1 = crearContador(10);
console.log(c1.inc()); // 11
console.log(c1.get());  