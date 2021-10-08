import { JokeService } from './../services/joke.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-request',
  templateUrl: './network-request.component.html',
  styleUrls: ['./network-request.component.css']
})
export class NetworkRequestComponent implements OnInit {
  loader:string = 'Loading Users'
  joke:string = 'No joke yet';
  constructor(private JokeService: JokeService) {
   
   }

  ngOnInit(): void {
     this.JokeService.getJoke().subscribe((data:any) => {
      this.joke = data.value;
     })
  }

}
