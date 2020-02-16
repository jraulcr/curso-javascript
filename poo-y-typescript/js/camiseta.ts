//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('Camiseta estampada con el logo de ' +logo);
        }
    }
}

//Clase (molde del objeto)

@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodo (fuinciones o acciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color
    }
    public getColor() {
        return this.color;
    }
}

//Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta('dfgh', 'gfh', 'fgh', 'kkkyt', 22);
console.log(camiseta); 
camiseta.estampacion();

var sudadera_nike = new Sudadera('Rojo', 'Manga larga', "Nike", "L", 15 );
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Gris');
console.log(sudadera_nike);





/*var camiseta = new Camiseta("Rojo", "Manga larga", "Nike", "L", 15 );

camiseta.setColor("rojo");*/
//camiseta.getColor()

/*camiseta.color = "Rojo";
camiseta.modelo= "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;*/

/*var playera = new Camiseta();
playera.setColor("Azul");*/

/*playera.color = "Azul";
playera.modelo= "Manga corta";
playera.marca = "Adidas";
playera.talla = "M";
playera.precio = 15;*/

//console.log(camiseta);



