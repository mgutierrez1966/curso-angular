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
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyBoxDirective } from './zippy-box.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
//import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';


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
    MiDirectivaDirective,
    ZippyComponent,
    ZippyBoxDirective,
    ContactFormComponent,
    SignupFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //FontAwesomeModule
    
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
