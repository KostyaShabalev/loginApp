import { Component } from '@angular/core';

import { AuthentificationService } from './_services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'auth-app';

  constructor(
  	private authService: AuthentificationService
  	) {
  	if (!!localStorage.getItem('token')) {
		this.authService.getUser()
  			.subscribe(
          user => {});	
  	}
  }
}
