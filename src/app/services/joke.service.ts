import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //iska mtlb ye h ki hm services ko pure app m khi bhi use kr skte h..
})
export class JokeService {
// private ka use kr k hmne httpclient ko pue class m use kiya h iseko hm dependency injection bhi bolte h...
  constructor(private http:HttpClient) { }

  getJoke(){
   return  this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
