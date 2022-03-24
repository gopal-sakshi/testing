import { Component, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Comments14Component } from '../comments14/comments14.component';
import olympicData from "../../resources/olympic-winners.json";

@Component({
  selector: 'app69-ag-grid23',
  templateUrl: './ag-grid23.component.html',
  styleUrls: ['./ag-grid23.component.scss']
})
export class AgGrid23Component implements OnInit {

  paginationPageSize: number = 100;
  pagination: boolean = true;
  paginationAutoPageSize: boolean = false;
  pages = [5,10,20]
  columnDefs1 = [
    { headerName: "company", resizable: true, pinned:"left", field: "make" },
    { field: "model" },
    { headerName: "price-fixedWidth", field: "price", sortable: true, width: 120 },
    { field: "comments", cellRenderer: Comments14Component, resizable: true}
  ];
  
  rowData1 = [
    { make: "Toyota", model: "Celica", price: 35000, comments: {india: "toyota car", USA: "decent toyota in US"} },
    { make: "Ford", model: "Mondeo", price: 32000, comments: {india: "ford car stopped", USA: "good going ford in US"} },
    { make: "Porsche", model: "Boxter", price: 72000, comments: {india: "expensive porsche", USA: "affordable in US"} },
    { make: "BMW", model: "Mustang", price: 45000, comments: {india: "expensive bmw", USA: "BMW in US"} },
    { make: "Audi", model: "A6", price: 67000, comments: {india: "pricey audi", USA: "medium range Audi in US"} },
    { make: "Tata", model: "Nano", price: 78000, comments: {india: "affordable tata", USA: "not available tata in US"} },
    { make: "Honda", model: "City", price: 23000, comments: {india: "decent honda", USA: "cheap honda in US"} },
    { make: "Lamborghini", model: "Lmb-model", price: 59000, comments: {india: "costly lamborghini", USA: "premium lamb"} },
    { make: "Aston Martin", model: "Am-model", price: 56000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Bugati", model: "Bugati-model", price: 67000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Cadillac", model: "Cadillac-model", price: 23300, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Chevrolet", model: "Chev-model", price: 76000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Fiat", model: "Fiat-model", price: 98000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Ferrari", model: "Ferrari-model", price: 16000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Jaguar", model: "Jaguar-model", price: 38000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Kia", model: "Kia-model", price: 44000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
    { make: "Rolls Royce", model: "RR-model", price: 87000, comments: {india: "no-comments-ind", USA: "no-comments-US"} },
  ];

  columnDefs2 = [
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
  rowData2 = olympicData

  private gridApi!: GridApi;
  constructor() { }

  ngOnInit(): void {
  }

  paginationHappened(event) {
    let currentPage = this.gridApi.paginationGetCurrentPage()
    console.log(currentPage);
    console.log(event);
  }

  onGridReady(event:GridReadyEvent) {
    console.log('grid ready event fired');
    this.gridApi = event.api
  }

  onPageSelect(pageValue) {
    console.log(pageValue)
    // this.paginationPageSize = pageValue
  }

  previousFivePages() {
    let currentPage = this.gridApi.paginationGetCurrentPage();
    if(currentPage > 5) {
      this.gridApi.paginationGoToPage(currentPage-4)
    }    
  }

  previousPage() {
    this.gridApi.paginationGoToPreviousPage();
  }

  nextPage() {
    this.gridApi.paginationGoToNextPage();
  }

  nextFivePages() {
    this.gridApi.paginationGoToPage(4);
  }
}
