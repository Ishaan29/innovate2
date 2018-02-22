import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';

import { AuthService } from './core/auth.service';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

const firebaseConfig = {
  apiKey: "AIzaSyA5gSlf771LKcdDCNaszxdF0JM71_l6118",
  authDomain: "innovate-5d5bd.firebaseapp.com",
  databaseURL: "https://innovate-5d5bd.firebaseio.com",
  projectId: "innovate-5d5bd",
  storageBucket: "innovate-5d5bd.appspot.com",
  messagingSenderId: "881003042717"
}


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
