import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

export class AuthInterceptor24 implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('inside auth interceptor 24');
        return this.tryHttpRequest(req, next).pipe();
        
    }

    tryHttpRequest(req, next):Observable<any> {
        return next.handle(req).pipe(

            catchError((err23) => {       // this catchError is to handle HTPP errors... only if this block is present, control goes in here
                                            // otherwise, the httpRequest simply ends abruptly
                                            // now, we will process further based on error type
                console.log(err23);
                
                /* ********* HOW TO AVOID STRICT TYPE CHECKING WHEN WE CANT TELL TSC COMPILER ABOUT EXPECTED RETURN TYPE *********/
    // console.log(res.error);  // Property 'error' does not exist on type 'unknown' 
                                // to bypass this error... tell TypeScript that we’re not interested in doing strict type checking.
    
    console.log((<any>err23).error);       // APPROACH 1
    console.log(err23["error"])            // APPROACH 2
    console.log((err23 as any).error);    // APPROACH 3                
                /* ********* HOW TO AVOID STRICT TYPE CHECKING WHEN WE CANT TELL TSC COMPILER ABOUT EXPECTED RETURN TYPE *********/

                if(<any>err23.error == 'expired auth token') {
                    // we have to perform the same http request again with refreshed auth token
                    console.log('perform same http request again');
                } else if(<any>err23.error == 'invalid login details') {
                    console.log('enter proper details be');                    
                }
                return of(err23);
            })
        );
    }
}