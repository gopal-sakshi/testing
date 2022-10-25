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

    soapProtocol() {

        // https://nodeblogger.com/how-to-perform-soap-requests-with-node-js/
        // https://developers.redhat.com/blog/2016/02/19/apps-101-an-absolute-beginners-guide-to-integrating-with-a-node-js-backend#let_s_get_coding_

        let soapUrl = this.url+'/soap14/soap1';
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('token', '22');
        return this.httpClient.get(soapUrl, {headers, responseType: 'text' as const});
    }
}