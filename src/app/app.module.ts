import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {UsersService} from './users.service';
import { PageComponent } from './page/page.component';

import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class AppModule { }
