import { Injectable } from '@angular/core';
import {User} from "./home/user";

import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class UsersService {

  users: User[];
  constructor(private http: Http) {
    // this.users=[
    //   {name:"andres vargas",id:"123"},
    //   {name:"jaime arevalo",id:"321"},
    //   {name:"Albert Einstein",id:"1234"}
    // ]

  }

  showPictures(){
    console.log("showing json users response");
    this.getPictures().subscribe(
      response => this.users = response,
      error => console.log(error)
    )

    //console.log("now showing the response manually");
  }

  // getPictures() : Observable<any>{
  //   return this.http
  //     .get("http://jsonplaceholder.typicode.com/users")
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error getpictures'));
  // }

  getPictures() : Observable<any>{
    return this.http
      .get("http://jsonplaceholder.typicode.com/users")
      .map(this.parseResponse)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error getpictures'));
  }

  parseResponse(response: Response) : User[]{
     if(!response.json() ) return [];

     return response.json().map(
       jsonUser => new User(
         jsonUser['id'],
         jsonUser['name'],
         jsonUser['email'],
         jsonUser.address['street'],
         jsonUser.company['name'],
         jsonUser.company['catchPhrase']
       )
     )
  }



}
