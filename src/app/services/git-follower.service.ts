import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GitFollowerService {
  
  
  private baseUrl = "https://api.github.com/users/";

  getFollowers(user: string) {
    return this.http.get(this.baseUrl + user + "/followers");
  }

  constructor(private http: HttpClient) { }
}
