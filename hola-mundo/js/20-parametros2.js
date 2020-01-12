'use strict'

//Parametro REST y SPREAD


function listadoDeFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas); // Parametro REST '...resto_de_frutas'
}

listadoDeFrutas("Naranja", "Limon", "Pera", "Manzana", "Fresa", "Melon");


var frutas = ["Naranja", "Limon"];
// Parametro SPREAD '...frutas'
listadoDeFrutas(...frutas, "Pera", "Manzana", "Fresa", "Melon");