import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Credentials, User } from '../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  private userCredentials: Credentials = {
    login: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  login() {
    if ( this.userCredentials.login && this.userCredentials.password ) {
      this.authService.loginUser(this.userCredentials)
      .subscribe(
        res => {
          this.router.navigate(['home']);
        },
        error => {
          console.log(error);
          debugger;
          // Must show error message
        });
    } else {
      alert('Please enter login and password!');
    }
  }


}
