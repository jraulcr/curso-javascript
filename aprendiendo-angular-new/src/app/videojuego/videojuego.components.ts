import { Component } from '@angular/core';

@Component({
	selector: 'videojuego',
	template: ` 
	<h2>Componente de videojuegos</h2>
	<ul>
		<li>GTA</li>
		<li>Prince of Persia</li>
		<li>Final Fantasy X</li>
	</ul>
	`


})

export class VideojuegoComponent{
	constructor(){
		console.log("Se ha cargado el componente: videojuego.component.ts");
	}

}