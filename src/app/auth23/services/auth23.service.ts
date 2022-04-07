import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class Auth23Service {

    private url = 'http://localhost:3044/auth';
    

    constructor(private httpClient:HttpClient) {}

    signIn(payload:any):Observable<any> {
        console.log(payload);

        let headers = new HttpHeaders();        // it seems it MUST be named headers ONLY... headers23 (or) httpHeaders threw error
        headers.append('Content-Type', 'application/json');
        // return of(1,2,3);
        let signInUrl = this.url + '/signin'
        return this.httpClient.put<any>(signInUrl, payload, {headers});

        // let httpHeaders = new HttpHeaders();        
        // httpHeaders.append('Content-Type', 'application/json');
        // // return of(1,2,3);
        // let signInUrl = this.url + '/signin'
        // return this.httpClient.put<any>(signInUrl, payload, {headers: httpHeaders});        // Or you can use this way...
    }

    signUp(payload:any):Observable<any> {
        console.log(payload);
        // return of(1,2,3);
        let signUpUrl = this.url + '/signup'
        return this.httpClient.put(signUpUrl, payload);
    }
}