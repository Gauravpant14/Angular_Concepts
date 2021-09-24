import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @Input() name!:string;
  @Input() age!:number;

  @Output() myEvent = new EventEmitter<string>();

  // Here we are passing data from child component
  passData(){
    this.myEvent.emit("Passing Data from Child to Parent")
  }

}
