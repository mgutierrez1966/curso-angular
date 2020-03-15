import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from './titlecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ResumenPipe } from './resumen.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { GitFollowerService } from './services/git-follower.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArchiveHomePageComponent } from './archive-home-page/archive-home-page.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchiveNotFoundComponent } from './archive-not-found/archive-not-found.component';


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
    CourseFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    PostComponentComponent,
    GitFollowersComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    ArchiveHomePageComponent,
    ArchiveDetailComponent,
    ArchiveNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
    RouterModule.forRoot([
      {path: "", component: ArchiveHomePageComponent},
      { path: "archive/:year/:month", component: ArchiveDetailComponent},
      { path: "**", component: ArchiveNotFoundComponent}
    ])
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'followers/:id', component: GithubProfileComponent },
    //   { path: 'followers', component: GitFollowersComponent },
    //   { path: 'profile/:username', component: GithubProfileComponent },
    //   { path: 'post', component: PostComponentComponent },
    //   { path: '**', component: NotFoundComponent }
    // ])
  ],
  providers: [
    CoursesService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GitFollowerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
