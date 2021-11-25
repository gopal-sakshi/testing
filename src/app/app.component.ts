import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { ProductGuardService } from './classes/ProductGuardService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //connectionService:any;
  isConnected:boolean;

  constructor(
    public connectionService: ConnectionService,
    productGuardService: ProductGuardService
  ) {  }

  ngOnInit() {
    this.connectionService.monitor().subscribe((isConnected: boolean) => {
      console.log("subscribed...");
      this.isConnected = isConnected;
      console.log("connected toggle");
    });


  }

  title = 'testing';
}
