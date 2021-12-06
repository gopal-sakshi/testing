import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cors23',
  templateUrl: './cors23.component.html',
  styleUrls: ['./cors23.component.css']
})
export class Cors23Component implements OnInit {

  pincodes:any;
  myPincodes23:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeServiceCall(): Observable<any> {
    console.log('inside make service call')
    const baseUrl = `https://api.postalpincode.in/pincode/`;
    const requestUrl = baseUrl + '520012';

    this.http.get(requestUrl).subscribe(res => {
      console.log(res);      
      this.pincodes = res;
      console.log(this.pincodes);
      this.myPincodes23 = JSON.stringify(this.pincodes);

    });
    console.log('returning');
    return of(false);
  }
}
