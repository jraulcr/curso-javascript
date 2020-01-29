'use strict';

window.addEventListener('load', () => {

console.log('DOM cargado');

var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none";

formulario.addEventListener('submit', () => {

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = document.querySelector("#edad").value;

if(nombre.trim() == null || nombre.trim().length == 0 || nombre.trim() == ""){
    document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
    box_dashed.style.display = "none";
    return false;
}else{
    document.querySelector("#error_nombre").style.display = "none";
}

if(apellidos.trim() == null || apellidos.trim().length == 0  || apellidos.trim() == ""){
    document.querySelector("#error_apellidos").innerHTML = "El apellido no es valido";
    box_dashed.style.display = "none";
    return false;
}else{
    document.querySelector("#error_apellidos").style.display = "none";
}

if(edad == null || edad  <= 0 || isNaN(edad)){
    document.querySelector("#error_edad").innerHTML = "La edad no es valida";
    box_dashed.style.display = "none";
    return false;
}else{
    document.querySelector("#error_edad").style.display = "none";
}


    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_nombre span");
    var p_apellidos = document.querySelector("#p_apellidos span");
    var p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    console.log(p_nombre);
    console.log(p_apellidos);
    console.log(p_edad);
/*
    var datos_usuarios = [nombre, apellidos, edad];
    for (const indice in datos_usuarios) {
        if (datos_usuarios.hasOwnProperty(indice)) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuarios[indice]);
            box_dashed.append(parrafo);
        }
    }
*/
});




});