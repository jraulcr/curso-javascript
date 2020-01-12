'use strict'



//Switch

var edad = 40;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Has cumplido la mayoria de edad";
		break;
	case 25:
		imprime = "Has eres adulto";
		break;		
	case 40:
		imprime = "Crisis de los cuarenta";
		break;
	case 70:
		imprime = "Eres viejo";
		break;	
	default:
	imprime = "Eres neutral";
	break;		
}
console.log(imprime);