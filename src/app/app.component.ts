import { Component } from "@angular/core";

//this is called decorator and decorator always starts with @ sign. 
@Component({
  selector:'app-root', //this is the name of our component
  template:'<h2>Coders Never Quit</h2>',
  styles:[`h2{
    color: red;
  }`]
})

export class AppComponent{

}