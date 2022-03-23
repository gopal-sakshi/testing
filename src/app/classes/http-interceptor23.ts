import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpInterceptor23 implements HttpInterceptor {

    constructor(private router:Router,
      private activatedRoute:ActivatedRoute) {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

      // console.log(request);
      // console.log(this.router);
      // console.log(this.activatedRoute);
      return next.handle(request);
    }

}
