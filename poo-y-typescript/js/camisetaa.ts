
//Interface
interface CamisetaBase{
	setColor();
	getColor();
}

//Clase (molde del objeto)
class Camiseta implements CamisetaBase {

	//Propiedades o caracteristicas del objeto
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	//Metodos o funciones o acciones del objeto

	constructor(color, modelo, marca, talla, precio){
		this.color=color;
		this.modelo=modelo;
		this.marca=marca;
		this.talla=talla;
		this.precio=precio;
	}


	public setColorUno(color){
		this.color=color;
	}

	public getColorDos(){
		return this.color;
	}

}


//Clase hija (herencia)

class Sudadera extends Camiseta {
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}
	getCapucha():boolean{
		return this.capucha;
	}
}


var camiseta = new Camiseta("Verde", "Manga larga", "nike", "L", 14);

console.log(camiseta);


var sudaderaNike = new Sudadera("Amarillo", "Manga corta", "puma", "L", 20);
sudaderaNike.setCapucha(true);
console.log(sudaderaNike);

/*
var camiseta = new Camiseta("Rojo", "Manga larga", "nike", "L", 14);
camiseta.setColor("rojo");

console.log(camiseta);
*/
/*
var playera = new Camiseta();
playera.setColor("Azul Marino");

console.log(camiseta, playera);

*/