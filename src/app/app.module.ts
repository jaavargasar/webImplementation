import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {UsersService} from './users.service';
import { PageComponent } from './page/page.component';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
