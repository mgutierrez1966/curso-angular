import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  
  posts: any[];
  
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe((response:any) => {
      this.posts = response;
    });
  }


  constructor(private service: PostService) { };

  createPost(input: HTMLInputElement){
    let post = { title: input.value};
    this.service.createPost(post).subscribe( response => {
      this.posts.splice(0, 0, post);
    })
  }

  updatePost(post) {
    this.service.updatePost(post, {isRead : true})
      .subscribe(response => {
        console.log(response);
      })
    // this.http.put(this.url, post);
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }
}
