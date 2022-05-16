import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-ag-grid24',
  templateUrl: './ag-grid24.component.html',
  styleUrls: ['./ag-grid24.component.scss']
})
export class AgGrid24Component implements OnInit {

  paginationPageSize: number = 5;
  pagination: boolean = true;
  paginationAutoPageSize: boolean = false;
  url = 'https://pokeapi.co/api/v2/ability';

  rowDefs: any =  []; 
  columnDefs:any = [
    { field: 'name', width: 150, sortable:true },
    { field: 'url', width: 150, resizable:true}
  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get<any>(this.url)
      .subscribe((data) => {
        console.log(data);
        this.rowDefs = data.results;
    });
  }
}
