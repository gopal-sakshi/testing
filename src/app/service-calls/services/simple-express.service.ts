import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientMockService } from "./http-mock23.service";
import { share } from "rxjs/operators";

@Injectable()
export class SimpleExpressService {
    
    /*
        suppose we have an API - that always return static data (I mean domains/city in meity)
        that value doesnt change over the application lifecycle
        and that API data is used @ multiple components (header component, home component, incubator-form.component)
        why make 3 API calls unnecessarily...
        we can use shareReplay()        NOT WORKING ??
    */
    count23:number = 0;
    public dataRes$ : Observable<any> = this.httpClientMock23.get('edo url').pipe(share())

    // https://stackoverflow.com/questions/50864978/angular-rxjs-6-how-to-prevent-duplicate-http-requests/50865911#50865911

    url:string = 'http://localhost:3044'
    
    constructor(private httpClient:HttpClient,
        private httpClientMock23: HttpClientMockService) {}

    apiCall23(url:string):Observable<any> {
        console.log("making api call23 ==> ", ++this.count23)
        // return this.httpClientMock23.get(url);          // multiple API calls will be made
        return this.dataRes$                                // ONLY one API call will be made
    }

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

    openImage() {
        // let url = this.url+'/images44/bear.jpg';
        let url = this.url+'/pdf22/football-manager.pdf';
        window.open(url);
    }

    // LOOK INTO IT... IT'S NOT WORKING
    uploadFile23(payload:FileList | File):Observable<any> {        
        console.log(payload);
        let url = this.url + `/fileUpload23`;
        return this.httpClient.post(url, payload);
    }
}