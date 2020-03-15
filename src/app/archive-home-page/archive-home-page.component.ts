import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive-home-page',
  templateUrl: './archive-home-page.component.html',
  styleUrls: ['./archive-home-page.component.css']
})
export class ArchiveHomePageComponent implements OnInit {

  archivos = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3}
  ];
  
  constructor() { }

  ngOnInit() {
  }



}
