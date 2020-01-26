import { Component } from '@angular/core';


@Component ({
  selector: "favorito",
  template: `
  
    <span class="glyphicon"
    [class.glyphicon-star]="isFavorito"
    [class.glyphicon-star-empty]="!isFavorito"></span>
  
  `  
})
export class FavoritoComponent {

    isFavorito: boolean = true;

}