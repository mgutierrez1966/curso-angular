import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { GitFollowerService } from '../services/git-follower.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {

  private followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GitFollowerService,
    private router: Router) { }

  ngOnInit() {

    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]);

    obs.map(
      combined => {
        return this.service.getFollowers('mosh-hamedani');
      }
    )
    .subscribe( followers => {
      //this.followers = followers;
    });
    
    
    // subscribe(combinado => {
    //   let id = combinado[0].get('id');
    //   let page = combinado[1].get('page');

    //   // Usar los parametros...
    //   this.service.getFollowers('mosh-hamedani')
    //     .subscribe(
    //       (response) => {
    //         this.followers = response;
    //       }
    //     )
    // });


  }

}
