import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()       // send message to NodeJS backend
export class FirebaseService {

    // firebaseBackendUrl: `http://localhost:3069/firebase/send`        //  Cannot read properties of undefined (reading 'toLowerCase')
                                                                            // at HttpXsrfInterceptor.intercept
                                                                            // 30 mins bokka
    firebaseBackendUrl:string =  `http://localhost:3050/firebase/send`
    constructor(private httpClient:HttpClient) {}
    

    sendMessage(payload):Observable<any> {
        return this.httpClient.post(this.firebaseBackendUrl, payload);
    }
}