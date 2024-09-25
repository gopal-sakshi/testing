import { Component, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Comments14Component } from '../comments14/comments14.component';
import olympicData from "../../resources/olympic-winners.json";
import { Colors14Component } from './Colors14Component';

// // It seems these are needed for dropdown ---> color23
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
// ModuleRegistry.registerModules([ClientSideRowModelModule, RichSelectModule]);


@Component({
    selector: 'app69-ag-grid23',
    templateUrl: './ag-grid23.component.html',
    styleUrls: ['./ag-grid23.component.scss']
})
export class AgGrid23Component implements OnInit {

    paginationPageSize: number = 100;
    pagination: boolean = true;
    paginationAutoPageSize: boolean = false;
    pages = [5, 10, 20];
    currentPage: number = 1;
    showOlympicData: boolean = false;
    showCarData1: boolean = false;


    rowData1 = [
        { make: "Toyota", model: "Celica", price: 35000, color23: "red", comments44: { india: "toyota car", USA: "decent toyota in US" } },
        { make: "Ford", model: "Mondeo", price: 32000, color23: "red", comments44: { india: "ford car stopped", USA: "good going ford in US" } },
        { make: "Porsche", model: "Boxter", price: 72000, color23: "red", comments44: { india: "expensive porsche", USA: "affordable in US" } },
        { make: "BMW", model: "Mustang", price: 45000, color23: "red", comments44: { india: "expensive bmw", USA: "BMW in US" } },
        { make: "Audi", model: "A6", price: 67000, color23: "red", comments44: { india: "pricey audi", USA: "medium range Audi in US" } },
        { make: "Tata", model: "Nano", price: 78000, color23: "red", comments44: { india: "affordable tata", USA: "not available tata in US" } },
        { make: "Honda", model: "City", price: 23000, color23: "red", comments44: { india: "decent honda", USA: "cheap honda in US" } },
        { make: "Lamborghini", model: "Lmb-model", price: 59000, color23: "red", comments44: { india: "costly lamborghini", USA: "premium lamb" } },
        { make: "Aston Martin", model: "Am-model", price: 56000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Bugati", model: "Bugati-model", price: 67000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Cadillac", model: "Cadillac-model", price: 23300, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Chevrolet", model: "Chev-model", price: 76000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Fiat", model: "Fiat-model", price: 98000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Ferrari", model: "Ferrari-model", price: 16000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Jaguar", model: "Jaguar-model", price: 38000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Kia", model: "Kia-model", price: 44000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
        { make: "Rolls Royce", model: "RR-model", price: 87000, color23: "red", comments44: { india: "no-comments-ind", USA: "no-comments-US" } },
    ];
    rowData2 = olympicData;
    columnDefs1 = [
        { headerName: "Row", valueGetter: "node.rowIndex + 1" },
        { headerName: "company", field: "make", resizable: true, pinned: "left" },
        { field: "model", hide: true },     // model column will not be visible in ag-grid

        // dropdown needs ag-enterprise I suspect...
        {
            headerName: "dropdown23", field: 'color23', cellRenderer: Colors14Component,
            cellEditor: "agRichSelectCellEditor",
            cellEditorParams: { cellRenderer: Colors14Component, values: ["red", "green", "blue"], },
        },
        { headerName: "price-fixedWidth-EditChesko", field: "price", editable: true, sortable: true, width: 280 },
        {
            field: "comments44", cellRenderer: Comments14Component, resizable: true,
            getQuickFilterText: params => { return params.value.india; }
        }
    ];
    columnDefs2 = [
        { headerName: "Row", valueGetter: "node.rowIndex + 1" },
        { field: 'athlete', headerName: "Athlete23", width: 150 },
        { field: 'age', headerName: "vaYa$$u", width: 90 },
        { field: 'country', width: 150 },
        { field: 'year', width: 90 },
        { field: 'date', width: 150 },
        { field: 'sport', resizable: true, width: 150 },
        { field: 'gold', width: 100 },
        { field: 'silver', width: 100 },
        { field: 'bronze', width: 100 },
        { field: 'total', width: 100 },
    ];

    private gridApi!: GridApi;
    columnApi: any;

    constructor() { }

    ngOnInit(): void { }

    paginationHappened(event) {
        this.currentPage = this.gridApi ? this.gridApi.paginationGetCurrentPage() : 232323;
        // console.log(this.currentPage);
        // console.log(event);
    }

    getCurrentPage() {
        // this.currentPage = this.gridApi.paginationGetCurrentPage();
        console.log(this.gridApi.paginationGetCurrentPage());
    }
    onFilterTextBoxChanged23(event) {
        console.log("event ===> ", event.target.value);
        this.gridApi.setQuickFilter(event.target.value);

        // latest Versions ===> setQuickFilter is deprecated... use setGridOption
        // this.gridApi.setGridOption("quickFilterText", event.target.value);
    }

    onGridReady(event: GridReadyEvent) {
        console.log('grid ready event fired');
        this.gridApi = event.api;
        this.columnApi = event.columnApi
    }

    onPageSelect(pageValue) {
        console.log(pageValue)
        // this.paginationPageSize = pageValue
    }

    previousFivePages() {
        this.currentPage = this.gridApi.paginationGetCurrentPage();
        if (this.currentPage > 5) {
            this.gridApi.paginationGoToPage(this.currentPage - 4)
        }
    }

    // export as EXCEL only for ag-grid-enterprise (not in community)
    downloadAsCSV() {
        this.columnApi.setColumnsVisible(['model'], true) //In that case we show them
        var params1 = { columnKeys: ['make', 'price'] };
        var params2 = {
            fileName: 'ag-grid23-jingChak.csv',
            columnSeparator: '__',
            processCellCallback: (params) => { return this.processCells23(params) }
        }
        console.log('exporting as csv');
        // this.gridApi.exportDataAsCsv();                   // all columns will be in CSV
        // this.gridApi.exportDataAsCsv(params1);             // only two columns will be in CSV
        this.gridApi.exportDataAsCsv(params2);
    }

    processCells23(params) {
        console.log(params);
        if (params.column.colId == 'comments44') {
            return params.value.USA + '_AND_' + params.value.india;
        } else {
            return params.value
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

    onCellClicked(event) {
        console.log('cell clickedd', event);
    }

    onColumnSized(event) {
        console.log('column resized ', event);
    }

    updateComments() {
        if (!this.showCarData1) {
            console.log('bhaKKKK');
        }
        var rowCount = this.gridApi.getDisplayedRowCount();
        console.log(rowCount);
        const rowNode = this.gridApi.getDisplayedRowAtIndex(3);
        console.log(rowNode);
        rowNode.setDataValue('comments44', { india: 'new comment', USA: 'new comment by USA' });
        rowNode.setDataValue('price', 12);
    }

}