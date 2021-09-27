import { Directive, ElementRef } from '@angular/core';

//directives are used as attributes (like ngFor) etc so ,it is written as [] inside selector
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el: ElementRef;
  constructor(el: ElementRef) { 
    this.el = el
  //  el.nativeElement.style.backgroundColor = 'green';
  }
  
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
