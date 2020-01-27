'use strict';

window.addEventListener('load', () => {

console.log('DOM cargado');

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none";

formulario.addEventListener('submit', () => {

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

    box_dashed.style.display = "block";


    var datos_usuarios = [nombre, apellidos, edad];

    for (const indice in datos_usuarios) {
        if (datos_usuarios.hasOwnProperty(indice)) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);
        }
    }

});




});