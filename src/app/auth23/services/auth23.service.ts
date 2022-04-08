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
        let signUpUrl = this.url + '/signup';
        return this.httpClient.put(signUpUrl, payload);
    }

    seeArticles():Observable<any> {
        let seeArticlesUrl = this.url + '/secretArticles';
        
        // let headers44 = new HttpHeaders();        // we will send token as part of http request headers for this service
        // headers44.append('token', localStorage.getItem('token'));
        // return this.httpClient.get(seeArticlesUrl, {headers: headers44});

        let headers = new HttpHeaders();        // we will send token as part of http request headers for this service
        // headers = headers.append('token', '123');
        headers = headers.append('token', localStorage.getItem('token'));
        return this.httpClient.get(seeArticlesUrl, {headers});
    }
}