import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/services/IUser';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser[];
  id= this.route.snapshot.paramMap.get('id');
  editUserForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {

    this.user = this.authService.findUserById(this.id);
    this.editUserForm= this.fb.group({
      name : [this.user[0].name],
      email : [this.user[0].email],
    });
  }

  update(){
    let data = this.editUserForm.value;

    this.authService.update(this.id, data);
    this.router.navigate(['admin/users']);
  }

}
