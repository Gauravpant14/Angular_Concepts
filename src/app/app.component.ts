import { Component } from '@angular/core';
import { User } from 'src/models/user';

//this is called decorator and decorator always starts with @ sign.
@Component({
  selector: 'app-root', //this is the name of our component , it can be .app-root and [app-root]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countryName!:string;
  countryNum: number = 567565445;
  title:string = 'header'
  show:boolean = true
  users:Array<User> = [
    { name: 'React', age: 22 },
    // { name: 'Node', age: 23 },
    // { name: 'Vue', age: 21},
    // { name: 'Angular', age: 23 },
  ];

  //here we are getting child data
  receivedData(e:any){
    console.log(e);
  }

  getInd(e:any){
   this.countryName = e.target.innerText;
  }
}
