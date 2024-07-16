import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, shareReplay, tap } from "rxjs/operators";

@Injectable()
export class HttpClientMockService {
    private cpt = 1;

    constructor() { }

    // mock http service -- 
    get<T>(url: string): Observable<T> {
        return of({
            clubName: "realMadrid",
            details: { manager: "ancelotti", city: 'Madrid'}
        }).pipe(
            tap(() => console.log(`Request n°${this.cpt++} - URL "${url}"`)),
            delay(500)
        ) as any;
    }
}