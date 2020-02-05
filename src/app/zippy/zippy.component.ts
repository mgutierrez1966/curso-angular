import { Component, Input } from '@angular/core';
//import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  // faChevronDown = faChevronDown;
  // faChevronUp = faChevronUp;

  private collapsed = true;
  @Input("title") title: string;

  onClick(){
    this.collapsed = !this.collapsed;

  }

}
