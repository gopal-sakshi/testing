import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
// import { Common23Service } from "src/app/common23/services/common23.service";
import { Auth23Service } from "../services/auth23.service";


@Injectable()
export class AuthInterceptor23 implements HttpInterceptor {

    constructor(private auth23: Auth23Service) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return this.tryHttpRequest(req,next).pipe(
            // map((res) => {
            //     console.log(res);
            //     return res
            // }),
            switchMap(async (res) => {
                if((res as any).error == 'expired auth token') {
                    console.log("error @ intercept ===> ", res);
                    /********* NEED TO WORK ------------------------ LATERRRRRRRRRRRRRRRRRRRRRR */
                    // await this.auth23.refreshAccessToken().then(message => {
                    //     console.log(message);
                    //     console.log('promise returned');
                    // });
                } else {
                    console.log(res);
                    console.log('no error - dont make another service call');                    
                }
                return res;
            }),
            switchMap((res: HttpEvent<any>) => {
                if((res as any).error) {
                    console.log(res);
                    return this.tryHttpRequest(req,next)
                } else 
                    return null;
            })
        )
    }

    async refreshAuthToken(res:any):Promise<any> {
        // .promise()           // what this .promise() does ???
        console.log('inside doStuff ',res);
        // need to use refreshToken and get new accessToken... 
        const payload23 = {
            userName:localStorage.getItem('userName'), 
            password:localStorage.getItem('password')
        }

        return of('gopal').toPromise();
    }

    tryHttpRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('inside tryHtpRequest ',req);
        
        // let headers44 = new HttpHeaders();        // we will send token as part of http request headers for this service
        // headers44.append('token', localStorage.getItem('token'));
        // return this.httpClient.get(seeArticlesUrl, {headers: headers44});
        let headers = new HttpHeaders();        // we will send token as part of http request headers for this service
        // headers = headers.append('token', '123');        
        req.headers.set('token', localStorage.getItem('token'));
        console.log(req);
        return next.handle(req).pipe(
            // map(res => {
            //     console.log(res);
            //     return res;
            // }),
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