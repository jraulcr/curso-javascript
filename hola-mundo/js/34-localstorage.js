'use strict'

// localStorage


window.addEventListener('load', () => {

//Comprobar disponibilidad del localstorage

if(typeof(Storage) != 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
}
//debugger;

//Guardar datos en el localStorage
localStorage.setItem("titulo", "Curso de JavaScript");

//Recuperar elemento del localStorage
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos en el localStorage
var usuario = {
    nombre : "Juan Raúl Crespo",
    email: "elqueroba@roba.es",
    web: "www.mandawevos.es"
};
localStorage.setItem("usuario", JSON.stringify(usuario)); // Convertimos un objeto en String con 'JSON.stringify()'

// Recuperar objetos del localStorage

var userjs = JSON.parse(localStorage.getItem("usuario")); //Convertimos el String a objeto con un ' JSON.parse'

console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

//Borrado de un determinado elemento con id
localStorage.removeItem("usuario");

//borrado de todo el localStorage
localStorage.clear();



});