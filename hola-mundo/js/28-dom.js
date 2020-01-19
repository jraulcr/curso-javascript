'use strict'

//DOM (Document Object Model)


function cambiaColor(color){

    caja.style.background = color;

}

//Conseguir elementos con ID concreto

//var caja = document.getElementById('micaja');

var caja = document.querySelector("#micaja");

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color= "white";
caja.className = "hola hola2";

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div'); //Devuelve un array de divs
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//Recorremos todos los elementos de etiqueta div
for(var valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){ //Si hay elementos del tipo div en el DOM contiene texto del tipo string?
        var parrafo = document.createElement("p"); //Creamos etiquetas de parrafo <p>
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

//Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow';

for(var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}


//console.log(caja);

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

//Si es solo un elemento Class, utilizaremos el 'querySelector'. Si hay varios class utilizaremos el 'querySelectorAll'
var claseRojo = document.querySelector("div.rojo");
console.log("Solo devuelve el primer elemento class con el nombre: ");
console.log(claseRojo);

var claseVariosRojo = document.querySelectorAll("div.rojo");
console.log("Detecta todos los elementos class con el mismo nombre: ");

console.log(claseVariosRojo);