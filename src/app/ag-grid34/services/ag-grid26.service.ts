import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class AgGrid26Service {

    columnDefs1 = [
        { headerName: "Row", valueGetter: "node.rowIndex + 1" },
        { headerName: "company", field: "make", resizable: true, pinned:"left"},
        { field: "model" },
        { headerName: "price-fixedWidth", field: "price", sortable: true, width: 180 },
        { field: "comments44", cellRenderer: 'Comments14Component', resizable: true}
    ];
    rowData1 = [
        { make: "Toyota", model: "Celica", price: 35000, comments44: {india: "toyota car", USA: "decent toyota in US"} },
        { make: "Ford", model: "Mondeo", price: 32000, comments44: {india: "ford car stopped", USA: "good going ford in US"} },
        { make: "Porsche", model: "Boxter", price: 72000, comments44: {india: "expensive porsche", USA: "affordable in US"} },
        { make: "BMW", model: "Mustang", price: 45000, comments44: {india: "expensive bmw", USA: "BMW in US"} },
        { make: "Audi", model: "A6", price: 67000, comments44: {india: "pricey audi", USA: "medium range Audi in US"} },
        { make: "Tata", model: "Nano", price: 78000, comments44: {india: "affordable tata", USA: "not available tata in US"} },
        { make: "Honda", model: "City", price: 23000, comments44: {india: "decent honda", USA: "cheap honda in US"} },
        { make: "Lamborghini", model: "Lmb-model", price: 59000, comments44: {india: "costly lamborghini", USA: "premium lamb"} },
        { make: "Aston Martin", model: "Am-model", price: 56000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Bugati", model: "Bugati-model", price: 67000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Cadillac", model: "Cadillac-model", price: 23300, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Chevrolet", model: "Chev-model", price: 76000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Fiat", model: "Fiat-model", price: 98000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Ferrari", model: "Ferrari-model", price: 16000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Jaguar", model: "Jaguar-model", price: 38000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Kia", model: "Kia-model", price: 44000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
        { make: "Rolls Royce", model: "RR-model", price: 87000, comments44: {india: "no-comments-ind", USA: "no-comments-US"} },
    ];

    constructor() { }

    fetchPageStats(storeType: string, params: any = {}): Observable<any> {
        return of('get out from my motherland');
    }

    fetchPageList(storeType:string, params:any = {}):Observable<any> {
        console.log('returned be');
        return of({
            columnDefs:this.columnDefs1,
            count: 17,
            floatingFilter:false,
            rowDefs: this.rowData1,
            selectedIndex: 0        
        });
    }
}