import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class FakeJsonStats {

    private ip_address = 'http://ip.jsontest.com/';
    private http_headers = 'http://headers.jsontest.com/';
    private date_time = 'http://date.jsontest.com';
    private key_value = 'http://echo.jsontest.com/ronaldo/RM/messi/barca/luka/RealMadrid';


    private delhiPincodes = 'https://api.postalpincode.in/pincode/110001';
    private mumbaiPincodes = 'https://api.postalpincode.in/pincode/400001';
    private kolkattaPincodes = 'https://api.postalpincode.in/pincode/700001';
    private chennaiPincodes = 'https://api.postalpincode.in/pincode/600001';

    tempVariable1:any;
    tempVariable2:any;

    constructor(private httpClient: HttpClient) {}

    fetchStats():Observable<any> { return this.httpClient.get(this.ip_address); }
    fetchpostCodeStats(): Observable<any> { return this.httpClient.get(this.chennaiPincodes); }

    mergeMapStats():Observable<any> {

        return this.httpClient.get<any>('https://api.postalpincode.in/pincode/110001').pipe(
            map(res => {
                console.log(res);
                this.tempVariable1 = res[0].PostOffice[0].Pincode;
                console.log(this.tempVariable1);
                return Number(this.tempVariable1) + 1; 
            }),
            mergeMap( somethingPincode => {
                return this.httpClient.get(`https://api.postalpincode.in/pincode/${somethingPincode}`);
            }), 
            mergeMap ( blah => {
                console.log(blah);
                return of(23);
            })
        );
    }

    useForkJoin1() {
        
        var fourCitiesPostalCodes;
        const obs1 = this.httpClient.get(this.delhiPincodes);
        const obs2 = this.httpClient.get(this.mumbaiPincodes);
        const obs3 = this.httpClient.get(this.kolkattaPincodes);
        const obs4 = this.httpClient.get(this.chennaiPincodes);        
        return forkJoin(obs1, obs2, obs3, obs4);                    // THIS IS DEPRECATED (old signature)
        // return forkJoin([obs1, obs2, obs3, obs4]);              // THIS IS NOT DEPRECATED. in new signature
                                                                // forkJoin accepts array of observables
    }

    useForkJoin2() : Observable<any> {
        const wrongUrl = 'www.lkjs.com';
        const obs1 = this.httpClient.get(this.delhiPincodes).pipe(catchError(e => of('Error')));
        const obs2 = this.httpClient.get(this.mumbaiPincodes).pipe(catchError(e => of('Error')));;
        // const obs3 = this.httpClient.get(this.kolkattaPincodes).pipe(catchError(e => of('Error')));
        const obs3 = this.httpClient.get(wrongUrl).pipe(catchError(e => of('Error')));    // hoping this obs3 fails
        const obs4 = this.httpClient.get(this.chennaiPincodes).pipe(catchError(e => of('Error')));;
        return forkJoin([obs1, obs2, obs3, obs4]);
    }

}