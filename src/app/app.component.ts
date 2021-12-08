import { Component, OnInit } from '@angular/core';

import { ProductGuardService } from './route-guards/classes/ProductGuardService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //connectionService:any;
  isConnected:boolean;

  constructor(
    productGuardService: ProductGuardService
  ) {  }

  ngOnInit() {
    
  }

  title = 'testing';
}
