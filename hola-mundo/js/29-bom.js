'use strict'

//BOM (Browser Object Model)

function getBom(){
//ECMA6 //const getBom = () => {

    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
//ECMA6 //const abrirVentana = (url) => {
    window.open(url, "", "width = 400, height = 300");
}

getBom();