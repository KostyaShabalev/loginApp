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


  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef,
    private router: Router
  	) {

    // if (this.authService.getUser()
    //   .subscribe(res => {console.log(res)})) {
    //   this.authService.router.navigate(['/home']);
    // }
    if (localStorage.getItem('token')) {
      this.authService.router.navigate(['/home']);
    }
  }

  loginUser() {
    // Also it can be done with two-way binding (?) 
  	this.loginUserData.login = this.elementRef.nativeElement.querySelector('.login__input-name').value;
  	this.loginUserData.password = this.elementRef.nativeElement.querySelector('.login__input-password').value;

  	this.authService.route = 'login';

    this.authService.authorizedUser.login = this.loginUserData.login;
    this.authService.authorizedUser.password = this.loginUserData.password;

    this.authService.sendUserData(this.loginUserData)
      .subscribe(
          result => {
            this.authService.authorizedUser.token = result.token;
            localStorage.setItem('token', result.token);
            this.router.navigate(['/home']);
          }
        );

  }


}
