import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Common23Service } from "src/app/common23/services/common23.service";

@Injectable()
export class Auth23Service {

    private url = 'http://localhost:3044/auth';
    isSignedIn:boolean = false;

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
        let signInUrl = this.url + '/signin'
        return this.httpClient.put<any>(signInUrl, payload, { headers });
    }

    signUp(payload:any):Observable<any> {
        console.log(payload);
        let signUpUrl = this.url + '/signup';
        return this.httpClient.put(signUpUrl, payload);
    }

    seeArticles():Observable<any> {
        let seeArticlesUrl = this.url + '/secretArticles';
        let httpHeaders = new HttpHeaders();
        console.log("whta is access_token ===> ", localStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('token', localStorage.getItem('access_token'));
        
        // return this.httpClient.get(seeArticlesUrl, { headers: httpHeaders });

        return this.httpClient.get(seeArticlesUrl, { headers: httpHeaders }).pipe(catchError(error => {
            console.log("see articles api call error ===> ", error.message);
            return of({data: "secret articles phattu"})
        }));
    }

    seeRumours():Observable<any> {
        let seeRumoursUrl = this.url + '/seeRumours';        
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('token', localStorage.getItem('access_token'));

        // return this.httpClient.get(seeRumoursUrl, {headers: httpHeaders});

        return this.httpClient.get(seeRumoursUrl, {headers: httpHeaders}).pipe(catchError(error => {
            console.log("see rumours api call error ===> ", error.message)
            return of({data: "secret rumours phattu"})
        }) );
        
    }

    logout() { 
        console.log("implement logout functionality ====> ");
    }

    refreshAccessToken():Observable<any>{ 
        let body = {
            access_token: localStorage.getItem('access_token'),
            refresh_token: localStorage.getItem('refresh_token'),
            grantType:'refresh_token',
            userName: localStorage.getItem('userName')
        }
        return this.httpClient.post<any>(this.url + '/refreshToken23' + '', body).pipe(
            map(resp => {
                this.commonService.sendMessage(resp);
            })
        )
    }

    getAccessToken() {
        return localStorage.getItem('access_token');
    }
}