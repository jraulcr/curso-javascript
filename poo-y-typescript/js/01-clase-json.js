console.log("Clase js");

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    velocidadMaxima: '60km',
    cambiarColor: function(nuevo_color){
        this.color= nuevo_color;   
        console.log(this) ;    
    }
};

console.log('azul');