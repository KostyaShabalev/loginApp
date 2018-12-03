import { Component, OnInit, ElementRef } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef
  	) { }

  throwUsertData() {
  	let user = {
  		login: '',
  		password: ''
  	};
  	user.login = this.elementRef.nativeElement.querySelector('.register__input-name').value;
  	user.password = this.elementRef.nativeElement.querySelector('.register__input-password').value;

  	this.authService.User = user;
  	this.authService.route = 'register';
  	this.authService.subscribeRes();

  }


}
