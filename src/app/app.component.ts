import { Component } from "@angular/core";

//this is called decorator and decorator always starts with @ sign. 
@Component({
  selector:'app-root', //this is the name of our component , it can be .app-root and [app-root]
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{

}