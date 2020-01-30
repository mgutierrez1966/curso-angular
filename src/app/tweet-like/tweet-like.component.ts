import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tweet-like',
  templateUrl: './tweet-like.component.html',
  styleUrls: ['./tweet-like.component.css']
})
export class TweetLikeComponent  {

  @Input() likesCount = 0;
  @Input() isActive: boolean;

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive)? 1: -1;
  }
}
