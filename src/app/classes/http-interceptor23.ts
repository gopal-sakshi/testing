import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpInterceptor23 implements HttpInterceptor {

    constructor() {}

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

        const blah = request.headers.get('project');

        // if(!blah) {
        //     // console.log("no project key yet");
        //     request = request.clone({
        //         headers: request.headers.append('project', 'testing')
        //     });
        // }
        return next.handle(request);
    }

}
