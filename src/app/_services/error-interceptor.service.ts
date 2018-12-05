import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import  { Observable } from 'rxjs';
import  { catchError } from 'rxjs/operators';

import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(private authServise: AuthentificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  	

  }


}
