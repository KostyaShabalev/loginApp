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
  				alert('401 !!!');
  				this.authServise.logout();
  				this.router.navigate(['/login']);
  			}

  			if (err.status === 403) {
  				alert('Such user already exists');
  			}

  			if (err.status === 400) {
  				alert('Please fill all fields');
  			}

  			if (err.status === 404) {
  				alert('User not found');
  				this.authServise.logout();
  			}

  			const error = err.error.message || err.statusText;
  			return throwError(error);

  		}))

  }


}
