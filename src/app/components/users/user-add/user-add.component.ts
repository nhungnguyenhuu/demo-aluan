import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/services/IUser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user:IUser;
  id: number;


  addUserForm: FormGroup= new FormGroup({
    name : new FormControl(),
    email: new FormControl(),
    password: new FormControl(),

  });
  constructor(private route: Router,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }


  ngOnInit() {
    let users = this.authService.users;
    this.id = users[users.length-1].id+1;

  }

  addUser(){
    let data = this.addUserForm.value;
    console.log(data);
    this.authService.addUser(data);
    this.router.navigate(['admin/users']);
  }

}
