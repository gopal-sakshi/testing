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

    fetchStats():Observable<any> {
        return this.httpClient.get(this.ip_address);        
    }

    /*

    mergeMap
    - mergeMap is used when API requests are dependent ===> when we need data from 1st API request to make requests to 2nd API.
    - you don't have to wait for every HTTP request to complete. 
    - you can react as they complete. 
    - plus, you can handle errors easier (so if one request fails you can still continue with the other requests)
    - But you have to handle your emitted values in the .subscribe() a little differently


    forkJoin
    - forkJoin is used when API requests are independent. 1st request doesnt depend on 2nd request to complete and can execute in parallel.
    - data from all http requests --> loaded inside subscribe() method
    - you have to wait for every HTTP request to finish before forkJoin emits the value


    concatMap 
    - execute the requests in order. 
    - Meaning it would wait for the first request to complete, and then send the next
    - so as not to increase server capacity

    */
    fetchpostCodeStats(): Observable<any> {
        return this.httpClient.get(this.chennaiPincodes);        
    }

    fetchDummyStats():Observable<any> {

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
        
        forkJoin([obs1, obs2, obs3, obs4]).subscribe(results => {
            console.log(results);
            fourCitiesPostalCodes = results;
        });
        return fourCitiesPostalCodes
    }

    useForkJoin2() : Observable<any> {
        const obs1 = this.httpClient.get(this.delhiPincodes).pipe(map(res => {}), catchError(e => of('Error')));
        const obs2 = this.httpClient.get(this.mumbaiPincodes).pipe(map(res => {}), catchError(e => of('Error')));;
        // const obs3 = this.httpClient.get(this.kolkattaPincodes).pipe(map(res => {}), catchError(e => of('Error')));
        const obs3 = this.httpClient.get('www.lkjs.com').pipe(map(res => {}), catchError(e => of('Error')));    // hoping this obs3 fails
        const obs4 = this.httpClient.get(this.chennaiPincodes).pipe(map(res => {}), catchError(e => of('Error')));;

        return forkJoin([obs1, obs2, obs3, obs4]);
    }

}