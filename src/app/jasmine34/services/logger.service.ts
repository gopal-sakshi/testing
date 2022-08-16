import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() { }

    log(msg) { console.log(msg); }
}