'use strict'

//Condicional IF
// Si A es igual a B entonces haz algo

/*var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
	console.log("edad 1 es mayor que edad 2");
}else{
	console.log("edad 2 es mayor que edad 1");
}
*/
var edad = 18;

var nombre = 'Raúl';

if(edad >= 18){
//Es mayor de edad
console.log(nombre + " tiene " + edad + " años, es mayor de edad");

if(edad <= 40){
	console.log("Eres joven");
}else{
	console.log("Eres viejo");
}

}else{
//Es menor de edad	
console.log(nombre + " tiene " + edad + " años, es MENOR de edad");

}

