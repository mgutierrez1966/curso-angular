import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  // templateUrl: './like.component.html',
  template: '{{seleccionado}}',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
  private _seleccionado: boolean = false;
  constructor() { 

  }

  get seleccionado(): boolean {
    return this._seleccionado;
  }

  set seleccionado(seleccionado: boolean){}

  ngOnInit() {
  }

}
