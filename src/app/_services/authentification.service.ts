import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/internal/operators';

import { Router } from '@angular/router'

// import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

	public User = {};

  public route;

  public authToken: string;

	private loginUrl: string = 'https://incode-store.herokuapp.com/login';
  private registerUrl: string = 'https://incode-store.herokuapp.com/auth';
  private getUserUrl: string = 'https://incode-store.herokuapp.com/user';


  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  sendUserData(user) {

  	const httpOptions = {
  		headers: new HttpHeaders({
  			'Content-Type':  'application/json'
  		})
  	};

    if (this.route === 'login') {
      return this.http.post<any>(this.loginUrl, user, httpOptions)
      .pipe(
        map((result: any) => result)
        );
    } else {
      return this.http.post<any>(this.registerUrl, user, httpOptions)
      .pipe(
        map((result: any) => result)
        );
    }

  }

  
  // loggedIn() {
  //   return !!localStorage.getItem('token');
  // }

  getUser() {

    // return !!localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ` Bearer ${localStorage.getItem('token')}`
      })
    };

    return this.http.get(this.getUserUrl, httpOptions)
      .pipe(
          map((result: any) => result));


  }


}


