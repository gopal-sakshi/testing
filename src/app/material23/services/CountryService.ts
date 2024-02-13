import { Injectable } from "@angular/core";
import { of } from "rxjs";
import countries34 from "../../../assets/resources/countries_primeng.json";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CountryService {

    blah11 = [
        { value: 'ind', label: 'India' },
        { value: 'esp', label: 'Spain' }
    ];
    blah12:any;
    constructor(private http: HttpClient) {
        this.blah12 = countries34;
        console.log(this.blah12); 
    }
    
    getCountries() {
        return Promise.resolve(this.blah12.data);
    }

    // getCountries() {
    //     return this.http.get<any>('assets/countries.json')
    //       .toPromise()
    //       .then(res => <any[]>res.data)
    //       .then(data => { return data; });
    //     }

}