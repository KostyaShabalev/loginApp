import { Component, OnInit, ElementRef } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';

import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginUserData = {
    login: '',
    password: ''
  };

  // public loginUserData = {};


  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef,
    private router: Router
  	) {

    if(localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
    
  }

  loginUser() {

  	this.authService.route = 'login';

    this.authService.sendUserData(this.loginUserData)
      .subscribe(
          result => {
            this.router.navigate(['/home']);
          }
        );

  }


}
