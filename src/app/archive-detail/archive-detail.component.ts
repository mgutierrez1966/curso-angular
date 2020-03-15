import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  year;
  month;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year');
      this.month = params.get('month');
    });
  }

  verTodo() {
    this.router.navigate(['']);
  }

}
