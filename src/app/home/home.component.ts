import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UsersService} from '../users.service';
import '../rxjs-operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : User[];

  //dependency injection, once , pattern singleton
  constructor(private service: UsersService) { }


  ngOnInit() {
    this.service.showUsers();

  }

  ngDoCheck(){
    this.users = this.service.users;
  }

  goToUser(userID){
    this.service.showPost(userID.toString());
  }
}
