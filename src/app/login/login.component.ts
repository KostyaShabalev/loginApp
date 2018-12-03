import { Component, OnInit, ElementRef } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef
  	) { }

  throwUsertData() {
  	let user = {
  		login: '',
  		password: ''
  	};
  	user.login = this.elementRef.nativeElement.querySelector('.login__input-name').value;
  	user.password = this.elementRef.nativeElement.querySelector('.login__input-password').value;

  	this.authService.User = user;
  	this.authService.route = 'login';
  	this.authService.subscribeRes();

  }


}
