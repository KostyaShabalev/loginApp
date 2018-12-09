import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Credentials } from '../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{

  private userCredentials: Credentials = {
    login: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  register() {
    if ( this.userCredentials.login && this.userCredentials.password ) {
      this.authService.registerUser(this.userCredentials)
      .subscribe(res => {
        this.router.navigate(['home']);
      },
      err => {
        // Must show error message
      });
    } else {
      alert('Please enter login and password!');
    }
  }

}
