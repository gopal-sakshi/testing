import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class Auth23Service {

    private url = 'localhost:3044/auth';

    constructor(private httpClient:HttpClient) {}

    signIn(payload:any):Observable<any> {
        console.log(payload);
        return of(1,2,3);
        // return this.httpClient.put(this.url, payload);
    }

    signUp(payload:any):Observable<any> {
        console.log(payload);
        return of(1,2,3);
        // return this.httpClient.put(this.url, payload);
    }
}