'use strict'

//Eventos de raton

function cambiarColor() {

    console.log("Me has dado click");

    var bg = boton.style.background;

    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;

}

var boton = document.querySelector("#boton");
//Click
boton.addEventListener('click', function () {//addEventListener captura el evento es la forma mas limpia que llamandolo en el HTML
    cambiarColor();
});

//MouseOver
boton.addEventListener('mouseover', function () {
    boton.style.background = "yellow";
});

//Mouseout
boton.addEventListener('mouseout', function () {
    boton.style.background = "#ccc";
});

var input = document.querySelector("#campo_nombre");
//Focus
input.addEventListener('focus', function () {
    console.log("[focus] Estas dentro del imput")
});

//Blur
input.addEventListener('blur', function () {
    console.log("[blur] Estas fuera del imput")
});

//Keydown
input.addEventListener('keydown', function (event) {
    console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
});

//Keypress
input.addEventListener('keypress', function (event) {
    console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
});

//Keyoup
input.addEventListener('keyup', function (event) {
    console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
});