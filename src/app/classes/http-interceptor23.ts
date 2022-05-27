import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PincodeInterceptor23 implements HttpInterceptor {

    constructor(private router:Router,
      private activatedRoute:ActivatedRoute) {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

      console.log('inside interceptor23');      
      if(request.url.includes('pincode')) {
        // if the request object contains 'project' (or) userName in the headers ---------> you'll get CORS error        
        // request = request.clone({ headers: request.headers.append('project', 'jingchak')}); 
        // request = request.clone({ headers: request.headers.append('userName', 'jingchak')}); 
          // -----------> just comment this part & see... you wont get CORS error <-----------
      }
      return next.handle(request);
    }

}
