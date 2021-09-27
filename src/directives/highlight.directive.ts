import { Directive, ElementRef } from '@angular/core';

//directives are used as attributes (like ngFor) etc so ,it is written as [] inside selector
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //when we use private inside cunstructor then  the element inside constuctor is available to the whole class
  // this is also called as constructor injection... 
  constructor(private el: ElementRef) { 
 
  }
  
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
