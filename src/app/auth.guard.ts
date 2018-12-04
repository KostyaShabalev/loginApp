import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './_services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
  	private authService: AuthentificationService,
    private router: Router
  	) { }

  	canActivate(): boolean {
  		if (this.authService.getUser()
  			.subscribe(res => res)) {
  			return true;
  		} else {
  			this.router.navigate(['/login']);
  			return false;
  		}
  	}


}


