import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SimpleExpressService {
    
    url:string = 'http://localhost:3044'
    
    constructor(private httpClient:HttpClient) {}

    showStream() {
        let streamUrl = this.url+'/stream';
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('token', '22');
        return this.httpClient.get(streamUrl, {headers, responseType: 'text' as const});
    }
}