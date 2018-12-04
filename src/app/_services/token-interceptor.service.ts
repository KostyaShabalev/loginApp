import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
// import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  // constructor(private injector: Injector) { }
  constructor() { }


  intercept(req, next) {

    // let authService = this.injector.get(AuthentificationService);
    
    let tokenReq = req.clone({
      setHeaders: {
        // Authorization: `Bearer ${authService.getToken()}`
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    return next.handle(tokenReq);

  }



}
