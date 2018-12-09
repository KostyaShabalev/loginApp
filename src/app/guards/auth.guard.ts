import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import  { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private hasAcces: boolean;

  constructor(
      private authService: AuthService,
      private router: Router
    ) {
    this.authService.checkAcces()
      .subscribe(isPermitted => {
        if (isPermitted) {
          this.hasAcces = true;
          router.navigate(['home']);

          return;
        }

        this.hasAcces = false;
      });
  }

  canActivate(): Observable<boolean> | boolean {
    if (!this.hasAcces) {
      this.router.navigate(['login']);
    }

    return this.hasAcces;
  }
}
