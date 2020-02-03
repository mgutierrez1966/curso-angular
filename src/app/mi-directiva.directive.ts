import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

   @Input("formato") formato = "";
  
  constructor(private el: ElementRef) { }

  @HostListener("focus") onFocus(){
    let valor = this.el.nativeElement.value;
  }

}
