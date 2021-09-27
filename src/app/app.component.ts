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
  getInd(e:any){
   this.countryName = e.target.innerText;
  }
}
