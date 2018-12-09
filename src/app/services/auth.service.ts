import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { User } from '../models';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = 'https://incode-store.herokuapp.com';

  private isAuthorized = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(
      private http: HttpClient
    ) { }

  registerUser(credentials): Observable<User> {

    return this.http.post(`${this.baseUrl}/auth`, credentials)
    .pipe(
      switchMap((data: any) => {
        if (!!data.token) {
          localStorage.setItem('token', data.token);
          return this.getUser();
        }

        return of(null);
      })
      );
  }

  loginUser(credentials): Observable<User> {
    return this.http.post(`${this.baseUrl}/login`, credentials)
    .pipe(
      switchMap((data: any) => {
        if (!!data.token) {
          localStorage.setItem('token', data.token);
          return this.getUser();
        }

        return of(null);
      })
      );
  }

  loguotUser() {
    this.isAuthorized.next(false);
    this.currentUser.next(null);
    localStorage.clear();
    location.reload(true);
  }

  getUser(): Observable<User> {
    return this.http.get(`${this.baseUrl}/user`)
      .pipe(
        map((user: any) => {
          this.currentUser.next(user);
          this.isAuthorized.next(true);
          return user;
        })
      );
  }

  checkCurrUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  checkAcces(): Observable<boolean> {
    return this.isAuthorized.asObservable();
  }


}
