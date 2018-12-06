import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './_services/authentification.service';

import { map } from 'rxjs/internal/operators';
import  { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private hasAccess: boolean;

	constructor(
  	private authService: AuthentificationService,
    private router: Router
  	) { 
    this.authService.getCurrentUser()
      .subscribe(user => {
          if (!!user) {
            this.router.navigate(['/home']);
            this.hasAccess = true;  

            return; 
          }

          this.hasAccess = false;            
      });    
  }


  	canActivate(): Observable<boolean> | boolean {
      if (!this.hasAccess) {
        this.router.navigate(['/login']);
      }
      return this.hasAccess;
  	}


}
