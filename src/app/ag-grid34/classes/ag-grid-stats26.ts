import { Directive, Injector, Input } from "@angular/core";
import { map } from "rxjs/operators";
import { AgGridOptions } from "./ag-grid-types";
import { StatsTablePage } from "./stats-table-page";

@Directive()
export class AgGridStats26 {
    
    // @Input() agGridOptions: AgGridOptions;
    agGridOptions: AgGridOptions;
    
    statsTablePage:StatsTablePage;

    constructor(protected injector:Injector) {
        this.statsTablePage = this.injector.get(StatsTablePage);
    }

    initSubClass() {
        this.subscribeToStatsChange();
        this.statsTablePage.fetchPageStats('someStore').pipe(
            map(res => { console.log(res); return res })
        ).subscribe(res => {
            console.log(res);
        })
    }

    subscribeToStatsChange() {
        this.loadStats();
    }

    loadStats() {
        this.statsTablePage.fetchPageList('someStore').pipe(
            map(res => { console.log(res); return res })
        ).subscribe(res => {
            console.log(res);
            this.agGridOptions = res;
        })
    }

}