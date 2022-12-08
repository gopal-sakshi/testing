import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Common23Service } from "src/app/common23/services/common23.service";

@Injectable()
export class Auth23Service {

    private url = 'http://localhost:3044/auth';
    

    constructor(private httpClient:HttpClient, 
        private commonService:Common23Service) {
            this.commonService.getSignInDetails().pipe(
                map(res => {
                    console.log(res);
                    return res;
                })
            ).subscribe(res => {
                this.signIn(res).subscribe(res => {
                    this.commonService.sendMessage(res);
                    this.commonService.isSignInHappening = false;
                });
            })
        }

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
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('token', localStorage.getItem('token'));
        return this.httpClient.get(seeArticlesUrl, {headers: httpHeaders});
    }

    seeRumours():Observable<any> {
        let seeRumoursUrl = this.url + '/seeRumours';        
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('token', localStorage.getItem('token'));
        return this.httpClient.get(seeRumoursUrl, {headers: httpHeaders});
    }
}