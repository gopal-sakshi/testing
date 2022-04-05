import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpInterceptor24 implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // it seems even though url-endpoint was localhost:3000 ---> its still a httpcall & intercept method will be called
        console.log('interceptor24 for auth purposes');

        return next.handle(req);
    }
}