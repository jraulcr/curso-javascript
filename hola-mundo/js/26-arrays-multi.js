'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

//Ordenar arrays alfabeticamente o numericamente
peliculas.sort();
console.log(peliculas);

//Ordenar arrays alfabeticamente o numericamente a la inversa
peliculas.reverse();
console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][2]);
//console.log(cine[1][1]);

/*
var elemento = "";	
do{
	elemento = prompt("Introduce tu pelicula. Si no te acuerdas escribe ACABAR:");
	peliculas.push(elemento);

}while(elemento != "ACABAR");
peliculas.pop(); //Elimina el ultimo elemento del array
//peliculas.push("Batman") ;//Añadir elementos al array

*/

//Elimina el ultimo elemento del array controlado
var indice = peliculas.indexOf('Gran torino');

if(indice > -1){
	peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();// Extrae el contenido del array separado por comas
console.log(peliculas_string);

// Añade el contenido del String en un array separado por comas
var cadenaTexto = "texto1, texto2, texto3";
var cadena_array = cadenaTexto.split(", ");
console.log(cadena_array);