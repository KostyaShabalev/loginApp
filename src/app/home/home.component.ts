import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from '../_services/authentification.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public userData: Observable<User | null> = this.authService.getCurrentUser();

  constructor(
  	private authService: AuthentificationService,
  	private router: Router
  	) {}

  ngOnInit() {
  }

  logoutUser() {  	
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }

}
