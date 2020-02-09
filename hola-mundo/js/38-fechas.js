'use strict'

var fecha = new Date();

var anyo = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
El año es: ${anyo}
El mes es: ${mes}
El día es: ${dia}
LA hora es: ${hora}
`
console.log(textoHora);