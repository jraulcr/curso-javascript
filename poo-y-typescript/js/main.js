"use strict";
exports.__esModule = true;
var camisetaa_1 = require("./camisetaa");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion js cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new camisetaa_1.Camiseta("Rojo", "Manga larga", "nike", "L", 14);
    };
    return Main;
}());
var main = new Main();
