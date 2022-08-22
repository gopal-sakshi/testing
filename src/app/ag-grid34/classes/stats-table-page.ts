import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AgGridOptions } from "./ag-grid-types";


export interface IStatsTablePage {

    fetchPageStats(storeType: string, params?: any): Observable<any>;
    fetchPageList(storeType: string, params?: any): Observable<AgGridOptions>;
}

@Injectable()
export class StatsTablePage implements IStatsTablePage {

    constructor() { }

    fetchPageStats(storeType: string, params?: any): Observable<any> {
        throw new Error("Method not implemented.");
    }

    fetchPageList(storeType: string, params?: any): Observable<AgGridOptions> {
        throw new Error("Method not implemented.");
    }
}