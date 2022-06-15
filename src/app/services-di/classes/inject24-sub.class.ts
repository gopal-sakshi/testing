import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Inject24Sub {

    constructor() { }

    getNames24Sub() {
        return ['Ramos', 'Pepe'];
    }
}