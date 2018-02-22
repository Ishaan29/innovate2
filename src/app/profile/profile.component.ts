import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showFiller = true;
  userImage: string  = "http://lorempixel.com/150/150";
  userName: string = "Jane Doe";
  userId: string = "jane doe";

  constructor( public authService: AuthService) { }

  ngOnInit() {
  }
  signOut() {
    this.authService.logout();
  }

}
