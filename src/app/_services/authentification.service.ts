import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map, switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private isAuthSubject = new BehaviorSubject<boolean>(false);

  private userData = new BehaviorSubject<User>(null);

  public route;

  private baseUrl: string = 'https://incode-store.herokuapp.com';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  sendUserData(user) {
    let observable: Observable<any>;
    if (this.route === 'login') {
      observable = this.http.post(`${this.baseUrl}/login`, user)
    }

    if (this.route === 'register') {
      observable = this.http.post(`${this.baseUrl}/auth`, user)
    }

    return observable.pipe(
      switchMap(data => {
        if (!!data.token) {
          localStorage.setItem('token', data.token);
          return this.getUser();
        }

        return of(null);
      })
    )
    
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user`)
      .pipe(
          map((result: any) => {
            this.userData.next(result);
            this.isAuthSubject.next(true);
            return result
          })
      );
  }

  logout(): void {
    this.isAuthSubject.next(false);
    this.userData.next(null);
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCurrentUser(): Observable<User>{
    return this.userData.asObservable();
  }

  getIsAuthorized(): Observable<any> {
    return this.isAuthSubject.asObservable();
  }

}


