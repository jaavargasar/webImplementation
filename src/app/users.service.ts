import { Injectable } from '@angular/core';
import {User} from "./home/user";

import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Post} from "./page/post";


@Injectable()
export class UsersService {

  users: User[];
  posts: Post[];

  constructor(private http: Http) {
    // this.users=[
    //   {name:"andres vargas",id:"123"},
    //   {name:"jaime arevalo",id:"321"},
    //   {name:"Albert Einstein",id:"1234"}
    // ]

  }

  showUsers(){
    console.log("showing json users response");
    this.getUsers().subscribe(
      response => this.users = response,
      error => console.log(error)
    )
  }

  showPost(keyword: string){
    console.log("showing json post response");
    this.getPosts(keyword).subscribe(
      response => console.log(response.json()),
      error => console.log(error)
    )
  }

  getUsers() : Observable<any>{
    return this.http
      .get("http://jsonplaceholder.typicode.com/users")
      .map(this.parseResponseUsers)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error getpictures'));
  }

  getPosts(keyword: string): Observable<any>{
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts?userId="+keyword)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error getPosts'));
  }

  parseResponseUsers(response: Response) : User[]{
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

  // getPictures() : Observable<any>{
  //   return this.http
  //     .get("http://jsonplaceholder.typicode.com/users")
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error getpictures'));
  // }
}
