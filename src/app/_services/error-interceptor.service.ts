import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import  { Observable, throwError } from 'rxjs';
import  { catchError } from 'rxjs/operators';

import { AuthentificationService } from './authentification.service';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
  	private authServise: AuthentificationService,
  	private router: Router
  	) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  	return next.handle(request)
  	  .pipe(
  	  	catchError(err => {
  	  		if (err.status === 401) {
  				alert(`${err.status}: ` + 'Unauthorized user');
  				this.authServise.logout();
  				this.router.navigate(['/login']);
  			}

  			if (err.status === 403) {
  				alert(`${err.status}: ${err.error.error}`);
  			}

  			if (err.status === 400) {
  				alert(`${err.status}: ${err.error.error}`);
  			}

  			if (err.status === 404) {
  				alert(`${err.status}: ${err.error.error}`);
  				this.authServise.logout();
  			}

  			const error = err.error.message || err.statusText;
  			return throwError(error);

  		}))

  }


}
