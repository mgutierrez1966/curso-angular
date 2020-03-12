import { Component, OnInit } from '@angular/core';
import { GitFollowerService } from '../services/git-follower.service';

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {

  private followers: any[];

  constructor(private service : GitFollowerService) { }

  ngOnInit() {
    this.service.getFollowers('mosh-hamedani').subscribe(
      (response: any[]) => {
        this.followers = response;
      }
    )
  }

}
