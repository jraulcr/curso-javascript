'use strict'

//Transformacion de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso";
var texto2 = "Es un buen curso";

var busqueda = texto1.indexOf("curso");
		busqueda = texto1.lastIndexOf("de");
		busqueda = texto1.search("al");
		busqueda = texto1.match("curso");//Busqueda de palabras
		busqueda = texto1.match(/curso/g);//Busqueda y cuantas palabras hay
		busqueda = texto1.substr(14, 5);
		busqueda = texto1.charAt(5);
		busqueda = texto1.startsWith("Bienvenido al curso");
		busqueda = texto1.endsWith("JavaScript curso");
		busqueda = texto1.includes("JavaScript");
		busqueda = texto1.replace("JavaScript", "Pyton");//Reemplazar texto
		busqueda = texto1.slice(14);//Recorta trozos de texto a partir de la posicion 14
		busqueda = texto1.slice(14, 22);//Recorta trozos de texto partir de la posicion 14 hasta la posicion 22
		busqueda = texto1.split(); //Añade el String dentro de un array
		busqueda = texto1.split(" "); //Añade el String dentro de un array separado por palabras
		busqueda = texto1.trim();//Elimina los espacios al comienzo y al final de palabra

console.log(busqueda);

/*
var dato = numero.toString(); //Convierte un numero a String
	dato = texto1.toUpperCase();
	dato = texto2.toLowerCase();


console.log(dato);

//Calcular longitud

var nombre = "Raul";
nombre = ["Hola", "Adios"]

//console.log(nombre.length);

//Concatenar - Unir textos

///var textoTotal = texto1+texto2;

var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);
*/