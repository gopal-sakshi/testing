import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class FakeJsonStats {

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
        return this.httpClient.get('http://ip.jsontest.com/');        
    }

    nestedApiCalls() {
        // get 1st to do activty... then get comments for that to do activity
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
        .pipe(map(todo => todo['id']))
        .subscribe(todoId => {
            this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${todoId}/comments`)
            .subscribe( comment => { console.log("comments23 ===> ", comment); });
        })
    }

    nestedApiCallsMergeMap() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
        .pipe(
            map(todo => todo['id']),
            mergeMap(todoId => this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${todoId}/comments`))
        ).subscribe(response => { console.log("comments23 ===> ", response ); })
    }


    useMergeMap():Observable<any> {

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
                return of(blah);
            })
        );
    }

    useForkJoin1() {
        
        var fourCitiesPostalCodes;

        const obs1 = this.httpClient.get(this.delhiPincodes);
        const obs2 = this.httpClient.get(this.mumbaiPincodes);
        const obs3 = this.httpClient.get('www.lkjs.com');       // deliberately FAIL this observable
        const obs4 = this.httpClient.get(this.chennaiPincodes);
        
        forkJoin([obs1, obs2, obs3, obs4]).subscribe(results => {
            console.log(results);
            fourCitiesPostalCodes = results;
        });
        return fourCitiesPostalCodes
    }

    useForkJoin2() : Observable<any> {
        const obs1 = this.httpClient.get(this.delhiPincodes).pipe(map(res => res), catchError(e => of('Error')));
        const obs2 = this.httpClient.get(this.mumbaiPincodes).pipe(map(res => res), catchError(e => of('Error')));;
        const obs3 = this.httpClient.get('www.lkjs.com').pipe(map(res => res), catchError(e => of('lkjs entra idiot')));    // FAILS
        const obs4 = this.httpClient.get(this.chennaiPincodes).pipe(map(res => res), catchError(e => of('Error')));;
        return forkJoin([obs1, obs2, obs3, obs4]);
    }

}