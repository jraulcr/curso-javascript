import { Camiseta } from './camisetaa';

class Main {
	constructor(){
		console.log("Aplicacion js cargada");
	}

	getCamiseta(){
		return new Camiseta("Rojo", "Manga larga", "nike", "L", 14);
	}
}

var main = new Main();