import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnChanges {
  @Input() name!: string;
  @Input() age!: number;
  @Input() title!: string;
  @Output() myEvent = new EventEmitter<string>();

  // Here we are passing data from child component
  passData() {
    this.myEvent.emit('Passing Data from Child to Parent');
  }
  text!: string;

  constructor() {
    console.log('constructor called', this.name);
  }
  // 1st life cycle Method:
  // Method ek he bar call hoga ..jb component bn kr tyar hota h ..
  // OR constructor bhi 1 he bar call  hota h lekin jb jb class ka instance bnega tb tb constructor call hoga..

  ngOnChanges(value: SimpleChanges) {
    // "SimpleChanges is the type of value; ngOnChnges will load after constructor and before ngOninit, this has access of @Input, if it changes then it'll load ",

    console.log("ngOnChanges =>", value);
  }

  ngOnInit() {
    this.text = 'Content Loaded';
    console.log('ngOnInItCalled');
    //properties
    //event listner
    // initial data fetch
  }
}
