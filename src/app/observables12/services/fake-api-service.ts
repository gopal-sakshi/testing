import { Injectable } from '@angular/core';
import { of, throwError, concat } from 'rxjs';
import { delay, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class Fake23Service {

    getMsgAfterTime(afterSeconds: number, throwError: boolean = false) {
        const message: string = `Hello23, after ${afterSeconds} seconds, __${new Date().toISOString()}`;
        return of(message).pipe(
            delay(afterSeconds * 1000),
            map((message) => {
                if (throwError) { throw new Error('Not this time!'); }
                else { return message; }
            }));
    }
}