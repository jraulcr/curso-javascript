'use strict'


window.addEventListener('load', () => {

    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit', () => {

        var titulo = document.querySelector("#addpelicula").value;

        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }

    });

    var ul = document.querySelector("#peliculas-list");

    for (const i in localStorage) {
        if (localStorage.hasOwnProperty(i)
            && typeof localStorage[i] == "string") {

            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);

        }
    }

    var formularioBorrar = document.querySelector("#formBorrarPeliculas");

    formularioBorrar.addEventListener('submit', () => {

        var titulo = document.querySelector("#borrarPelicula").value;

        if (titulo.length >= 1) {
            localStorage.removeItem(titulo, titulo);
        }

    });

});