import { Injectable } from '@angular/core';

@Injectable()
export class Auth12Service {
    public isAuthorized(loggedIn: string): boolean {
        return loggedIn === '1';
    }
}