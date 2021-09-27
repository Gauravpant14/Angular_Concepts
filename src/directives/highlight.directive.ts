import { Directive, ElementRef } from '@angular/core';

//directives are used as attributes (like ngFor) etc so ,it is written as [] inside selector
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
   el.nativeElement.style.backgroundColor = 'green';
  }
}
