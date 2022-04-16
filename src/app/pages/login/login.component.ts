import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMessage:string;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  login() {
    let data = this.loginForm.value;
    let user = this.authService.checkAccount(data);
    if(user){
        localStorage.setItem('userLogin', JSON.stringify(user));
        this.router.navigate(['admin/users']);
    }else{
        this.errMessage = 'Account not exist!!';
    }
  }

}
