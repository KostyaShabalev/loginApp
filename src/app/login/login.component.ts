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
  	) { }

  loginUser() {
  	this.loginUserData.login = this.elementRef.nativeElement.querySelector('.login__input-name').value;
  	this.loginUserData.password = this.elementRef.nativeElement.querySelector('.login__input-password').value;

  	this.authService.route = 'login';

    this.authService.sendUserData(this.loginUserData)
      .subscribe(
          result => {
            localStorage.setItem('token', result.token);
            this.router.navigate(['/home']);
          }
        );

  }


}
