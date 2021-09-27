import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnChanges, OnDestroy {
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

  ngOnChanges(value: SimpleChanges) {
    console.log("ngOnChanges =>", value);
  }
 
  listnerRef!:any;

  ngOnInit() {
    this.text = 'Content Loaded';
    console.log('ngOnInItCalled');
    this.listnerRef = setInterval(() => {console.log("timer running....")}, 3000);
  }

  ngOnDestroy(){
    //here we write cleanup code
    console.log('component destroyed');
    clearInterval(this.listnerRef);
  }
}
