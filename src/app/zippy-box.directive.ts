import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ZippyBox]'
})
export class ZippyBoxDirective {
  
  @Input('title') title: string;


  constructor() { }

}
