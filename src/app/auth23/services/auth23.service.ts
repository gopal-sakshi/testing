import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class Auth23Service {

    private url = 'http://localhost:3044/auth';
    httpHeaders:HttpHeaders;

    constructor(private httpClient:HttpClient) {}

    signIn(payload:any):Observable<any> {
        console.log(payload);
        this.httpHeaders = new HttpHeaders().append('content-type', 'application/json');
        // return of(1,2,3);
        let signInUrl = this.url + '/signin'
        return this.httpClient.put(signInUrl, payload, {
            'headers': this.httpHeaders
        });
    }

    signUp(payload:any):Observable<any> {
        console.log(payload);
        // return of(1,2,3);
        let signUpUrl = this.url + '/signup'
        return this.httpClient.put(signUpUrl, payload);
    }
}