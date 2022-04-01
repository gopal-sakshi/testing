import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class JsStuff12Service {

    getMockData():Observable<any> {
        // setTimeout(() => {
        //     return of("gopal")
        // },1000);
        return of("gopal")
    }
}