import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <favorito></favorito>
        <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()"/>
        <ul>
            <li *ngFor="let course of courses">  {{course | resumen}} </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'Lista de cursos';
    courses;
    email = "vacio";

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    onKeyUp(){
        console.log(this.email);
    }

}