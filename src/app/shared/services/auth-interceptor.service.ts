import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('New Request')
    const uid : any = JSON.parse(localStorage.getItem("user")).uid
    const modifiedRequest = req.clone({
      headers: req.headers.append("token", uid)
    })

    console.log(modifiedRequest)
    return next.handle(modifiedRequest)
  }
}
