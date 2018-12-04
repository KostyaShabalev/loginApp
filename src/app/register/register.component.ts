import { Component, OnInit, ElementRef } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerUserData = {
    login: '',
    password: ''
  };

  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef,
    private router: Router
  	) { }

  registerUser() {
  	this.registerUserData.login = this.elementRef.nativeElement.querySelector('.register__input-name').value;
  	this.registerUserData.password = this.elementRef.nativeElement.querySelector('.register__input-password').value;

  	this.authService.route = 'register';

    this.authService.sendUserData(this.registerUserData)
      .subscribe(
          result => {
            localStorage.setItem('token', result.token);
            this.router.navigate(['/home']);
          }
        );

  }


}
