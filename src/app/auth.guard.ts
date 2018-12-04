import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './_services/authentification.service';

import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
  	private authService: AuthentificationService,
    private router: Router
  	) { }


  	canActivate(): boolean {

      // if (this.isRegisteredUser() === true) {
      //   return true;
      // } else {
      //   this.router.navigate(['/login']);
      //   return false;
      // }

      // if (localStorage.getItem('token')) {
      //   return true;
      // } else {
      //   this.router.navigate(['/login']);
      //   return false;
      // }

  	}

    isRegisteredUser() {

      if (this.authService.getUser().subscribe(res => res)) {
        return true;
      } else {
        return false;
      }

      

    }


}


