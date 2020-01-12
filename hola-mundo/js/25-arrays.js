'use strict'

//Arrays, Arreglos, , Matrices


var nombre = "Raul";

var nombres = ["Raul", "Bego", "Maria", 50, true];

var lenguajes = new Array ("Java", "JS", "PHP", "C#", "Pyton");

/*console.log(nombres);
console.log(nombres.length);
console.log(nombres[2]);

console.log(lenguajes);*/
/*
var elemento = parseInt(prompt("Que elemento del array queres??", 0));
//Filtramos casos posibles
if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que: " + nombres.length);
}else{
		alert("El usuario seleccionado es: " + nombres[elemento]);

}

*/
document.write("<h1>Lenguajes de programacion</h1>");

document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>" + lenguajes[i] + "</li>");
}
*/

/*
lenguajes.forEach( (elemento, indice) => {
		document.write("<li>" + indice + " - " + elemento + "</li>");
} );
*/


//Nota fuera del curso let in recorre las keys y let of recorre el valor
//for(let lenguaje of lenguajes){
for(let lenguaje in lenguajes){
		document.write("<li>"  + lenguaje + " - " + lenguajes[lenguaje] +"</li>");//
	//document.write("<li>"  + lenguaje +"</li>");
}

document.write("</ul>");


//Busquedas

var precios = [10, 20, 50, 80, 12];

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");//Busqueda y muestra el elemento
	busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");//Busqueda y muestra el index
	busqueda = precios.some(precio => precio >= 20);//Encontrar si hay valores de un tipo u otro de numeros y cumple la condicion'true or false'

console.log(busqueda);