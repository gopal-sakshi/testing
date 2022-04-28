import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Common23Service } from "src/app/common23/services/common23.service";

@Injectable()
export class AuthInterceptor22 implements HttpInterceptor {

    
    constructor(private commonService:Common23Service) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.tryHttpRequest(req, next).pipe(
            catchError(err =>
              of({}).pipe(
                switchMap(async r => {
                    await this.handleErrors();
                    console.log('i got printed')
                }),
                switchMap(r => this.tryHttpRequest(req, next))
              )
            )
          );
    }

    tryHttpRequest(req, next) {
        let headers: HttpHeaders = req.headers;
        headers = headers.append('token', localStorage.getItem('token'));
        const request = req.clone({headers});
        return next.handle(request);
    }

    handleErrors():Promise<any> {
        return new Promise((resolve, reject) => {
            if(!this.commonService.isSignInHappening) {
                this.commonService.signInAgain({
                    userName: localStorage.getItem('userName'),
                    password: localStorage.getItem('password')
                })
            }
            resolve('hello doctor')
        })
    }
}