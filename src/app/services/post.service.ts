import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  };

  createPost(post) {
    return this.http.post(this.url, post);
  };

  updatePost(post, object) {
    return this.http.patch(this.url + "/" + post.id, object);
  };

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id).pipe(
      catchError(error => {
        return Observable.throw(new AppError(error));
      })
    )
  }
}
