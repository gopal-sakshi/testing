import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return this.tryHttpRequest(req,next).pipe(
            map((res) => {
                console.log(res); 
                return res
            }),
            catchError(err => 
                // console.log(err);
                of({}).pipe(                    
                    switchMap(async res => await this.doStuff(res).then(message => {
                        console.log(message);
                        console.log('promise returned');
                    })),
                    switchMap(res => this.tryHttpRequest(req,next))
                )
            )
        )
    }

    async doStuff(res:any):Promise<any> {
        console.log('inside doStuff');
        fetch('https://upload.wikimedia.org/wikipedia/commons/1/1a/Elephant_Diversity.jpg');
        return of('gopal').toPromise();
    }
    tryHttpRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('inside tryHtpRequest')
        return next.handle(req);
    }
    
}