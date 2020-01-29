'use strict';

window.addEventListener('load', () => {

// JSON - JavaScript Object Notation
console.log("pelicula");
//Objeto JSON

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

console.log(pelicula);

var peliculas = [
    { titulo: "La verdad duele", year: 2016, pais: "Francia" },
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");

for (const index in peliculas) {
    if (peliculas.hasOwnProperty(index)) {

        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].pais + " - " + peliculas[index].year);
        caja_peliculas.append(p);
        
        
    }
}

});