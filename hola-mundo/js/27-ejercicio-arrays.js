'use strict'


/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenar y mostrar
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/


function mostrarArray(elementos, textoCustom = "") {

    document.write("<h1>Contenido de array" + textoCustom + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    });
    document.write("</ul>");
}



//Pedir 6 numeros
var numeros = [];

for (var i = 0; i <= 5; i++) {

    //  numeros[i] = parseInt(prompt("Introduce un número", 0));

    numeros.push(parseInt(prompt("Introduce un número", 0)));

}

// Mostrar el contenido en el cuerpo de la página
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//Ordenar y mostrar 'function (a, b) { return a - b }' Esta funcion ordena numericamente y no alfabeticamente. Se puede invertir de mayor a menor cambiando b-a
numeros.sort(function (a, b) { return a - b });
mostrarArray(numeros, 'ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//Contar elementos 
document.write("<h1>El array tiene: " + numeros.length + "</h1>");

//Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la busqueda: "+posicion+"</h1><hr/>");
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1>");

}
