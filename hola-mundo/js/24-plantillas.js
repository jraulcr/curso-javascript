'use strict'

//Plantillas de texto


var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

//var texto = " Mi nombre es: "+nombre+" <br/>Mi apellidos son: " + apellidos;

var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellidos son: ${apellidos}</h3>
`;

document.write(texto);
