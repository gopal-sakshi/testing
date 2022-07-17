import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class SearchService {

    constructor() { }

    search(keyword23: any): Observable<any> {
        var keyword = keyword23.searchTerm
        return of([
            { name: `${keyword}_1`, description: `${keyword}_1_description` },
            { name: `${keyword}_2`, description: `${keyword}_2_description` },
            { name: `${keyword}_3`, description: `${keyword}_3_description` },
            { name: `${keyword}_4`, description: `${keyword}_4_description` },
            { name: `${keyword}_5`, description: `${keyword}_5_description` }
        ]);
    }
}