'use strict'

//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
/*
function calculadora(){

	console.log("Hola soy una calculadora");
	console.log("Si soy yo");

	return "Eso es";
}

calculadora();//Hola soy una calculadora Si soy yo

//Invocar o llamar a la funcion
var resultado = calculadora();
console.log(resultado);// Eso es
*/


function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1 + numero2));
	console.log("resultado: " + (numero1 - numero2));
	console.log("Multiplicacion: " + (numero1 * numero2));
	console.log("Division: " + (numero1 / numero2));
	console.log("************* ");
}
function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1 + numero2) + "<br/>");
	document.write("resultado: " + (numero1 - numero2) + "<br/>");
	document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
	document.write("Division: " + (numero1 / numero2) + "<br/>");
	document.write("************* " + "<br/>");
}

function calculadora(numero1, numero2, mostrar = false){

if(mostrar == false){

	porConsola(numero1, numero2)

/*console.log("Suma: " + (numero1 + numero2));
console.log("resultado: " + (numero1 - numero2));
console.log("Multiplicacion: " + (numero1 * numero2));
console.log("Division: " + (numero1 / numero2));
console.log("************* ");*/

}else{

	porPantalla(numero1, numero2);

/*document.write("Suma: " + (numero1 + numero2) + "<br/>");
document.write("resultado: " + (numero1 - numero2) + "<br/>");
document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
document.write("Division: " + (numero1 / numero2) + "<br/>");
document.write("************* " + "<br/>");*/

}

//console.log(mostrar);

//return "Hola soy una calculadora";

}

//Invocar o llamar a la funcion
calculadora(98, 2);
calculadora(55, 88, true);


/*calculadora(12, 8);
calculadora(98, 2);*/

/*for(var i = 1; i <=10; i++){
	console.log(i);
	calculadora(i, 8);
}*/