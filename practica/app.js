"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    console.log(miFuncion("hola"));
    console.log(miFuncionF("hola"));
    var miFuncionF2 = function (a, b) { return a + b; };
    console.log(miFuncionF2(5, 10));
    var a = 19;
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log("".concat(_this.nombre, " smash!!!"));
            }, 3000);
        },
        edad: 30,
    };
    hulk.smash();
})();
