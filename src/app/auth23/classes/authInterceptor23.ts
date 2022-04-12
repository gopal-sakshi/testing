import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Common23Service } from "src/app/common23/services/common23.service";


@Injectable()
export class AuthInterceptor23 implements HttpInterceptor {

    constructor(private commonService: Common23Service) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return this.tryHttpRequest(req,next).pipe(
            map((res) => {
                console.log(res);
                return res
            }),
            switchMap(async (res:any) => {
                if(res.error == 'expired auth token') {
                    console.log(res);
                    await this.refreshAuthToken(res).then(message => {
                        console.log(message);
                        console.log('promise returned');
                    });
                } else {
                    console.log(res);
                }
            }),
            switchMap(res => {
                console.log(res);
                return this.tryHttpRequest(req,next)
            })
        )
    }

    async refreshAuthToken(res:any):Promise<any> {
        // .promise()           // what this .promise() does ???
        console.log('inside doStuff ',res);
        // need to regenerate authToken... we will do that by calling signin service again
        const payload23 = {
            userName:localStorage.getItem('userName'), 
            password:localStorage.getItem('password')
        }

        return of('gopal').toPromise();
    }

    tryHttpRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('inside tryHtpRequest')
        return next.handle(req).pipe(
            map(res => {
                console.log(res);
                return res;
            }),
            tap(evt => {}),
            catchError((err:any) => {
                if (err instanceof HttpErrorResponse) {
                    console.log(err);
                }
                return of(err)
            })
        );
    }
    
}