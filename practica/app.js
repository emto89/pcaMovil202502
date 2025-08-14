"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarNF = function (a, b) { return a + b; };
    console.log(miFuncion("hola"));
    console.log(miFuncionF("hola"));
    console.log(sumarN(5, 10));
    console.log(sumarNF(5, 10));
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smash!");
            }, 1000);
        }
    };
    hulk.smash();
})();
