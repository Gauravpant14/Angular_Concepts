import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-request',
  templateUrl: './network-request.component.html',
  styleUrls: ['./network-request.component.css']
})
export class NetworkRequestComponent implements OnInit {
  loader:string = 'Loading Users'
  users:any = [];
  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
     this.users = data
     console.log(this.users);
    })
  }

}
