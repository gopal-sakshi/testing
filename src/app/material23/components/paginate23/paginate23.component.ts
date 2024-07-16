import { Component, OnInit } from '@angular/core';
import data23 from './../../../ag-grid34/resources/olympic-winners.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app69-paginate23',
  templateUrl: './paginate23.component.html',
  styleUrls: ['./paginate23.component.scss']
})
export class Paginate23Component implements OnInit {

  olympicWinners23 = data23;
  pageSize:number = 20;
  p: number = 1;
  page: number = 1;
  clientside:boolean = true;        // implement clientside (or) serverside pagination
  passenger:any;
  totalItems: any;
  itemsPerPage = 6;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.gty(1);
  }

  pageChange23(event:any) {
    console.log("page changed ====> ", event)
    this.p = event;
  }

  gty(page: any){
    let url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      this.passenger =  data.data;
      this.totalItems = data.totalPassengers;
    })
  }

}
