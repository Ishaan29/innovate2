import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  showFiller = true;
  userImage: string  = "http://lorempixel.com/150/150";
  userName: string = "Jane Doe";
  userId: string = "jane doe";

  constructor() { }

  ngOnInit() {

    
  }

}
