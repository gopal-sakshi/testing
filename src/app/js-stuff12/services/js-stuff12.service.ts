import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class JsStuff12Service {

    getMockData():Observable<any> {

        // // DOESNT WORKKKKKKKKKK
        // setTimeout(() => {
        //     return of("gopal")
        // },1000);

        // WORKS
        // return of("gopal")

        // WORKS WITH DELAY of 2 seconds
        return of("gopal23").pipe(delay(2000))
    }
}