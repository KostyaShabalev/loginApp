import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

	public User = {};

  public route;

	public sentUser;

	private loginUrl: string = 'https://incode-store.herokuapp.com/login';
  private registerUrl: string = 'https://incode-store.herokuapp.com/auth';


  constructor(private http: HttpClient) { }

  sendUserData(user) {
  	const httpOptions = {
  		headers: new HttpHeaders({
  			'Content-Type':  'application/json',
  			'Authorization': 'my-auth-token'
  		})
  	};

    if (this.route === 'login') {
      console.log(this.route);
      return this.http.post(this.loginUrl, user, httpOptions)
      .pipe(
          // catchError(this.handleError('sendUserData', user))
        );
    } else {
      console.log(this.route);
      return this.http.post(this.registerUrl, user, httpOptions)
      .pipe(
          // catchError(this.handleError('sendUserData', user))
        );
    }

  }

  subscribeRes() {
  	this.sendUserData(this.User)
  	  .subscribe(user => this.sentUser = user);
  }
  


}


