import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UsersService} from '../users.service';
import '../rxjs-operators';
import {UserPicture} from "./userPicture";
import {Picture} from "./picture";
import {Post} from "../page/post";
import {Album} from "./album";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[]=[];
  pictures: Picture[]=[];
  userPictures: UserPicture[]=[];

  albums : Album[]=[];
  albumId="";
  checkPrint: boolean =false;
  singleUser: User;


  //dependency injection, once , pattern singleton
  constructor(private service: UsersService) {
    this.service;
  }

  ngOnInit() {
    this.init();
  }


  init(){
    //console.log("doint init home");
    this.service.getUsers("http://jsonplaceholder.typicode.com/users").subscribe(
      response =>{
        this.users=response;

        this.service.getAllPictures("https://jsonplaceholder.typicode.com/photos?albumid=[albumId]").subscribe(
          response =>{
            this.pictures = response;

            for(let user of this.users){
              this.service.getAlbumByUser("https://jsonplaceholder.typicode.com/albums?userId=",user['id']).subscribe(
                response => {
                  this.albums =response;
                  this.albumId= this.albums[0]['id'].toString();
                  //console.log(this.albumId);
                  for(let picture of this.pictures){
                    if(picture['albumId']==this.albumId){

                      var newUserPicture= {
                        id: user['id'],
                        name: user['name'],
                        street: user['street'],
                        url: picture['url'],
                        thumbnailUrl:picture['thumbnailUrl'],
                      }

                      this.userPictures.push(newUserPicture);
                      break;
                    }
                  }
                },
                error => console.log(error)
              )
            }
            this.checkPrint= true;
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    )
  }

  goToUser(userID,userPicture){
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("userId", userID);
      localStorage.setItem("userPicture",userPicture);
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage!";
    }


    for(let user of this.users){
      if( user.id == userID) {
        this.service.user = user;
        this.singleUser = user;
        break;
      }
    }

    //console.log(userID,userPicture);
  }


}
