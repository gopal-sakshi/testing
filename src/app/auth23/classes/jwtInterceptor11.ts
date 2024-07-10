import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { filter, switchMap, take, catchError } from "rxjs/operators";
import { Auth23Service } from "../services/auth23.service";

@Injectable()
export class JwtInterceptor11 implements HttpInterceptor {

    private refreshTokenInProgress = false;
    // Refresh Token Subject tracks the current token, or is null if no token is currently available (refresh pending)
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(public auth: Auth23Service) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAuthenticationToken(request))
        .pipe(catchError(error => {
            if (request.url.includes("refreshToken23") || request.url.includes("signin")) {       // STEP 01                
                if (request.url.includes("refreshToken23")) {            // STEP 02
                    this.auth.logout();
                }
                return throwError(error);
            }
            if (error.status !== 401) {         // STEP 03
                return throwError(error);
            }

            if (this.refreshTokenInProgress) {                  // STEP 04
                return this.refreshTokenSubject.pipe(
                    filter(result => result !== null),
                    take(1),
                    switchMap(() => next.handle(this.addAuthenticationToken(request))));
            } else {
                this.refreshTokenInProgress = true;
                this.refreshTokenSubject.next(null);            // STEP 05
                return this.auth.refreshAccessToken()                       // STEP 06
                .pipe(
                    switchMap((token: any) => {                 // STEP 07
                        this.refreshTokenInProgress = false;
                        this.refreshTokenSubject.next(token);
                        return next.handle(this.addAuthenticationToken(request));
                    }),
                    catchError((err: any) => {
                        this.refreshTokenInProgress = false;
                        this.auth.logout();
                        return throwError(error);
                    })
                );
            }
        }));
    }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    //     return next.handle(request);
    // }

    addAuthenticationToken(request) {
        const accessToken = this.auth.getAccessToken();
        if (!accessToken) {
            return request;
        }

        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + "chumma, urike idi... but token eh important manaki",
                Token: this.auth.getAccessToken()
            }
        });
    }


    /*************************************************************************************************************/
    // refresh_access_token_is_this__fn_needed(next, request, error) {
    //     this.refreshTokenInProgress = true;
    //     // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
    //     this.refreshTokenSubject.next(null);

    //     // Call auth.refreshAccessToken(this is an Observable that will be returned)
    //     return this.auth.refreshAccessToken()
    //     .pipe(
    //         switchMap((token: any) => {
    //             //When the call to refreshToken completes we reset the refreshTokenInProgress to false
    //             // for the next time the token needs to be refreshed
    //             this.refreshTokenInProgress = false;
    //             this.refreshTokenSubject.next(token);

    //             return next.handle(this.addAuthenticationToken(request));
    //         }),
    //         catchError((err: any) => {
    //             this.refreshTokenInProgress = false;
    //             this.auth.logout();
    //             return throwError(error);
    //         })
    //     );
    // }
}
