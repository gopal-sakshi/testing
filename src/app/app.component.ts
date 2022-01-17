import { Component } from '@angular/core';
import { ProductGuardService } from './route-guards/classes/ProductGuardService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //connectionService:any;
  isConnected:boolean;

  constructor(
    productGuardService: ProductGuardService
  ) {  }


}
