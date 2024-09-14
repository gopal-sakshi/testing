import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'app69-colors14',
    // template: `
    //     @if (value23) {
    //         <span> <i [class]="iconClass"> </i> {{ value23 }} </span>
    //     }
    // `,
    template: `{{value23}}`
})
export class Colors14Component implements ICellRendererAngularComp {

    value23:any;
    constructor() { }

    refresh(params: ICellRendererParams): boolean {
        console.log('refresh happened ', params);
        this.agInit(params);
        return true;
    }
    agInit(params: ICellRendererParams): void {
        this.value23 = params.value;
    }

    ngOnInit(): void {
    }

}