import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  username: String;
  password: String;
  constructor(private formBuilder: FormBuilder, private libraryService: LoginService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      "username": [null, Validators.required],
      "password": [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onLogin(loginForm: any) {
    this.libraryService.login(loginForm).subscribe(result => {
      sessionStorage.setItem("user", JSON.stringify(result.body));
      this.router.navigate(['home']);
    })
  }
}
