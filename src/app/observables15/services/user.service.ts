import { Injectable } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map } from 'rxjs/operators';

export interface User {
    name: string;
}
const names: string[] = [
    'Ronaldo',
    'Benzema',
    'Bale',
    'Modric',
    'Kroos',
    'Casemiro',
    'Marcelo',
    'Ramos',
    'Pepe',
    'Carvajal',
    'Navas Keylor'
];

@Injectable({
    providedIn: 'root'
})
export class UserService {

    currentUser(): Observable<User> {
        return interval(2000).pipe(map(this.getRandomUser));
    }

    getRandomUser(): User {
        const index = Math.floor(Math.random() * names.length);
        return {
            name: names[index]
        };
    }
}