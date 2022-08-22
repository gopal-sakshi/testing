import { Directive, Injector } from "@angular/core";
import { AgGridStats26 } from "./ag-grid-stats26";

@Directive()
export class AgGrid26 extends AgGridStats26 {

    constructor(protected injector: Injector) { 
        super(injector);
    }

    initClass() {
        this.initSubClass();
    }

    updatePayments() {

    }
}