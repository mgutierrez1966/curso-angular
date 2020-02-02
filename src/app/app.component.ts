import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola-mundo';
  tweet = {
    isActive: false,
    likesCount: 0,
    body: "Este es mi tweet"
  };

  modoVista = 'list';
}
