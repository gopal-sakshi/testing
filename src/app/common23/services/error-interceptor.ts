
// https://www.geeksforgeeks.org/service-workers-in-javascript/



import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, retryWhen } from "rxjs/operators";
import Swal from "sweetalert2";

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable({
    providedIn: 'root'
})
export class ErrorIntereptorService implements HttpInterceptor {

    // see error_500 in simple-express.service.ts
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retryWhen((error) => {
                return error.pipe(
                    mergeMap((error, index) => { 
                        if (index < maxRetries && error.status == 500) {
                            console.log("still didnt reach MaxRetries ", index, maxRetries)
                            return of(null);
                        }
                        Swal.fire({
                            html: `Internal Server Error. Please try again later`
                        })
                        return throwError(error)
                    }),
                    delay(2000)
                )}
            )
        )
    }
}


/*
    Retry twice at most
    Only retry 500 internal server errors
    Wait before retrying

    return error.pipe(
                mergeMap((error, index) => {
                  if (index < maxRetries && error.status == 500) {
                    return of(error).pipe(delay(delayMs));
                  }
      
                  throw error;
                })
              )
            )
          )

*/