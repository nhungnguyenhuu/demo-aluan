import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/services/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin: IUser;

  constructor() { }

  ngOnInit() {
    this.getUserLogin();
  }

  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.userLogin = JSON.parse(data);
  }

}
