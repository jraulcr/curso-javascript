import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular';
  public mostrar_videojuejos: boolean = true;

  ocultarVideojuegos(value){
    this.mostrar_videojuejos = value;
  }
}
