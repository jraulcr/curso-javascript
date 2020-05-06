

$(document).ready(function(){
    //Selector de ID

    var rojo = $('#rojo').css('background','red')
                        .css('color','white');

    $('#amarillo').css('background','yellow')
                        .css('color','green');

    $('#verde').css('background','green')
                        .css('color','yellow');

    var miclase = $('.cebra');
        console.log(miclase);    
    });

    //Selectores de etiqueta

    var parrafos = $('p');

    parrafos.click(function(){

        $(this).removeClass('cebra');
    });