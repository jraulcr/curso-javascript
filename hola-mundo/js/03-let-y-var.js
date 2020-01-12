'use strict'


//Pruebas con let y var


//Pruebas con var
var numero = 40;
console.log(numero);//valor 40

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}
console.log(numero); //valor 50


//Pruebas con let
var texto = "Curso de JS";
console.log(texto); //Curso de JS

if(true){
	let texto = "Curso de Laravel 5";
	console.log(texto); // Curso de Laravel 5
}

console.log(texto);//Curso de JS