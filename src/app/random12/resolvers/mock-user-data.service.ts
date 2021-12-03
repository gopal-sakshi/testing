import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockUserDataService {
    private users = [
        'Freddie',
        'Brian',
        'Roger',
        'John'
    ];

    getUsers(): Observable<any> {
        return of(this.users).pipe(delay(500));
    }
}