var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //Metodos o funciones o acciones del objeto
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColorUno = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColorDos = function () {
        return this.color;
    };
    return Camiseta;
}());
//Clase hija (herencia)
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("Verde", "Manga larga", "nike", "L", 14);
console.log(camiseta);
var sudaderaNike = new Sudadera("Amarillo", "Manga corta", "puma", "L", 20);
sudaderaNike.setCapucha(true);
console.log(sudaderaNike);
/*
var camiseta = new Camiseta("Rojo", "Manga larga", "nike", "L", 14);
camiseta.setColor("rojo");

console.log(camiseta);
*/
/*
var playera = new Camiseta();
playera.setColor("Azul Marino");

console.log(camiseta, playera);

*/ 
