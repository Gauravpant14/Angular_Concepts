import { Component } from "@angular/core";

//this is called decorator and decorator always starts with @ sign. 
@Component({
  selector:'my-profile', //this is the name of our component , it can be .app-root and [app-root]
  template:'This is profile page',
})

export class ProfileComponent{

}