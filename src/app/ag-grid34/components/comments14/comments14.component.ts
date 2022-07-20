import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app69-comments14',
  templateUrl: './comments14.component.html',
  styleUrls: ['./comments14.component.scss']
})
export class Comments14Component implements ICellRendererAngularComp {

  cellValue1!: string;
  cellValue2!: string;
  cellValue3!: string;
  constructor() { 
    // console.log('nannu puttinchaaru');     // this got printed 17 times
  }

  refresh(params: ICellRendererParams): boolean {
    console.log('refresh happened ',params);
    this.agInit(params);
    return true;
  }
  agInit(params: ICellRendererParams): void {
    
    this.cellValue1 = params.value.USA;
    this.cellValue2 = params.value.india;
    // console.log(this.cellValue1);
    // console.log(this.cellValue2);
    this.cellValue3 = this.cellValue1 +' ___ '+ this.cellValue2;
  }

  ngOnInit(): void {
  }

}

