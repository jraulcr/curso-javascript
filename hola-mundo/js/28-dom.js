'use strict'

//DOM (Document Object Model)


function cambiaColor(color){

    caja.style.background = color;

}

//Conseguir elementos con ID concreto

//var caja = document.getElementById('micaja');

/*var caja = document.querySelector("#micaja");

caja.innerHTML ="TEXTO EN LA CAJA DESDE JS";

caja.style.background = "red";
caja.style.padding = "20px;"
caja.style.color= "white";
caja.className = "hola hola2";*/

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div'); //Devuelve un array de divs

var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");


var valor;
for(valor in todosLosDivs){

    if(typeof todosLosDivs[valor].textContent == 'string'){

        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}
seccion.append(hr);

//Conseguir elementos por su clase css




//console.log(caja);