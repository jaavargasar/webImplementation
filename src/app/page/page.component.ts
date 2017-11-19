import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../home/user";
import {HomeComponent} from "../home/home.component";
import {Post} from "./post";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  user: User ={
    id: "1",
    name: "",
    email: "",
    street: "",
    companyName: "",
    catchPhrase: ""
  };
  photo: string="";
  posts: Post[]=[];
  comments: Comment[] =[];

  constructor(private service: UsersService) {
    this.service;
  }

  ngOnInit() {
      if (typeof(Storage) !== "undefined"){
        this.photo = localStorage.getItem("userPicture");
        this.init();
      }
  }

  init(){
    console.log("doing init page");
    this.service.getUsers("http://jsonplaceholder.typicode.com/users").subscribe(
      response =>{
        for(let user of response){
          if(user.id == localStorage.getItem("userId") ) {
            this.user = user;
            break;
          }
        }

        this.service.getPosts("https://jsonplaceholder.typicode.com/posts?userId=",this.user.id).subscribe(
          response =>{
            this.posts = response;

            for( let post of this.posts){
                this.service.getComments("https://jsonplaceholder.typicode.com/posts/",post.id).subscribe(
                  response =>{
                      this.comments = response;
                      post.setComment(this.comments);
                  },
                  error => console.log(error)
                )
            }
          },
          error=> console.log(error)
        )
      }
      ,error => console.log(error)
    )
  }

  // checkPhoto(){
  //   if (typeof(Storage) !== "undefined"){
  //     this.photo = localStorage.getItem("userPicture");
  //     return true;
  //   }
  //   else return false;
  // }

}
