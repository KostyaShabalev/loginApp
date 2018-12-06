import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';

import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerUserData = {};

  constructor(
  	private authService: AuthentificationService,
    private router: Router
  	) {

    if(localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  registerUser() {

    if (Object.values(this.registerUserData).length) {
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


}
