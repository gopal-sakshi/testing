import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid-community";

// import * as data from "../../resources/olympic-winners.json";
  // this didnt work... inquire WHY

import olympicData from "../../resources/olympic-winners.json";



@Component({
  selector: 'app69-ag-grid22',
  templateUrl: './ag-grid22.component.html',
  styleUrls: ['./ag-grid22.component.scss']
})
export class AgGrid22Component implements OnInit {

  // style: any = {
  //   width: '100%',
  //   height: '100%',
  //   flex: '1 1 auto',
  // };


  paginationPageSize: number = 500;
  pagination: boolean = true;
  paginationAutoPageSize: boolean = false;

	columnDefs = [
    { field: 'athlete', width: 150 },
    { field: 'age', width: 90 },
    { field: 'country', width: 150 },
    { field: 'year', width: 90 },
    { field: 'date', width: 150 },
    { field: 'sport', resizable: true, width: 150 },
    { field: 'gold', width: 100 },
    { field: 'silver', width: 100 },
    { field: 'bronze', width: 100 },
    { field: 'total', width: 100 },
	];


	rowData:any;
  url = 'https://www.ag-grid.com/example-assets/olympic-winners.json';

  gridOptions:GridOptions = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const queryParams = {
      offset: 0,
      limit: 500
    };
    this.url = this.url + '?offset=0&limit=500';
    this.http
      .get(this.url)
      .subscribe((data) => {
        console.log(data);
        this.rowData = data as any[];
    });

    // this.rowData = require('../../resources/olympic-winners.json')
      // because require used in node... we need to change types in compiler options

    // this.rowData = olympicData;
  }

  afterRowClicked(event) {
    console.log(event);
  }

  showStats() {
    console.log(this.columnDefs);
    console.log(this.rowData);
  }
}



/**
  a) We use two modules
    ag-grid-angular
    ag-grid-community

  b) We also need to import some ag-grid styles in styles.css
    @import "~ag-grid-community/dist/styles/ag-grid.css";
    @import "~ag-grid-community/dist/styles/ag-theme-balham.css";

  c)

  // https://www.ag-grid.com/javascript-data-grid/getting-started/
    ----> this is ag-grid using plain javascript... no angular, react nothing...
  // https://www.ag-grid.com/angular-data-grid/row-pagination/
    ----> unbelievable website

    
  Some of the columnDefs
  a) headerName (or) field = The name to render in the column header
  b) 
  
*/
