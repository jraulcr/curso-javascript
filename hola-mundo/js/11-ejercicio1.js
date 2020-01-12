'use strict'

var numero1 = parseInt(prompt('¿Dime el primer numero?', 0));
var numero2 = parseInt(prompt('¿Dime el segundo numero?', 0));

//console.log(numero1, numero2);


while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){

	var numero1 = parseInt(prompt('¿Dime el primer numero?', 0));
	var numero2 = parseInt(prompt('¿Dime el segundo numero?', 0));

}



if(numero1 == numero2){
	alert('Los numeros son iguales');

}else if(numero1 > numero2){
	alert('El numero mayor es: ' + numero1);
	alert('El numero menor es: ' + numero2);
}else if(numero2 > numero1){
	alert('El numero mayor es: ' + numero2);
	alert('El numero menor es: ' + numero1);
}else{
	alert('Introduce numeros correctos');
}

