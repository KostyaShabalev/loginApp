import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

	public User = {};

	public sentUser;

	private url: string = 'https://incode-store.herokuapp.com/login';


  constructor(private http: HttpClient) { }

  sendUserData(user) {
  	const httpOptions = {
  		headers: new HttpHeaders({
  			'Content-Type':  'application/json',
  			'Authorization': 'my-auth-token'
  		})
  	};
  	
    console.log(user);

  	return this.http.post(this.url, user, httpOptions)
  	  .pipe(
  	  	  // catchError(this.handleError('sendUserData', user))
  	  	);
  }

  subscribeRes() {
  	this.sendUserData(this.User)
  	  .subscribe(user => this.sentUser = user);
  }
  


}


