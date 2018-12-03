import { Component, OnInit, ElementRef } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
  	private authService: AuthentificationService,
  	private elementRef: ElementRef
  	) { }

  ngOnInit() {
  }

  throwUsertData() {
  	let user = {
  		login: '',
  		password: ''
  	};
  	user.login = this.elementRef.nativeElement.querySelector('.login__input-name').value;
  	user.password = this.elementRef.nativeElement.querySelector('.login__input-password').value;

  	this.authService.User = user;
  	this.authService.subscribeRes();

  	// console.log();

  }


// ngAfterViewInit() {
//     const editableElements = Array.from(this.elementRef.nativeElement.querySelectorAll('.template .editable'));
//     editableElements.forEach((editableElement: any) => {
//       editableElement.addEventListener('click', this.onEditableClick);
//     });


}
