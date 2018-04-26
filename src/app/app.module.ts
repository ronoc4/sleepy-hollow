import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfigComponent} from "../data/config.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "../auth/login.component";

const appRoutes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'login',
  redirectTo:'blogs',
  pathMatch: 'full'
  },
  { path: 'blogs', component: ConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
