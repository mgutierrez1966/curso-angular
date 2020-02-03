import { TitleCasePipe } from './titlecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ResumenPipe } from './resumen.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { LikeComponent } from './like/like.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TweetLikeComponent } from './tweet-like/tweet-like.component';
import { MiDirectivaDirective } from './mi-directiva.directive';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    LikeComponent,
    ResumenPipe, 
    FavoritoComponent,
    FavoriteComponent,
    TitleCasingComponent,
    TitleCasePipe,
    TweetLikeComponent,
    MiDirectivaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
