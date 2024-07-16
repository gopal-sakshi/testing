import { Component, OnInit } from '@angular/core';
import { SimpleExpressService } from '../../services/simple-express.service';
import { HttpClientMockService } from '../../services/http-mock23.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app69-simple-express',
  templateUrl: './simple-express.component.html',
  styleUrls: ['./simple-express.component.scss']
})
export class SimpleExpressComponent implements OnInit {

  constructor(private simpleExpressService:SimpleExpressService) { }

  ngOnInit(): void {
  }

  
  makeApiCall() {
    // subscriber 1 in home component
    this.simpleExpressService.apiCall23('').subscribe(res => { console.log("res1 @ Api call ===> ", res) });

    // subscriber 2 in header component
    this.simpleExpressService.apiCall23('').subscribe(res => { console.log("res2 @ Api call ===> ", res) });
  }

  showStream() {
    this.simpleExpressService.showStream().pipe().subscribe(res => {
      console.log(res);
    })
  }

}
