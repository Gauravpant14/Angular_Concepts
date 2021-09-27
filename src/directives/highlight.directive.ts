import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

//directives are used as attributes (like ngFor) etc so ,it is written as [] inside selector
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //when we use private inside cunstructor then  the element inside constuctor is available to the whole class
  // this is also called as constructor injection....
  constructor(private el: ElementRef) { 
 
  }

  @HostBinding('style.backgroundColor') bgColor:any;
  @HostListener('mouseenter')
  onEnter(){
    this.bgColor = 'red'
  }
  @HostListener('mouseleave')
  onOut(){
    this.bgColor = 'transparent'
  }
  ngOnInit(){
    this.bgColor = 'yellow'
  }
}
