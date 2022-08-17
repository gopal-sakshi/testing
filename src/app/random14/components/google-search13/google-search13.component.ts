import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-google-search13',
  templateUrl: './google-search13.component.html',
  styleUrls: ['./google-search13.component.scss']
})
export class GoogleSearch13Component implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  searchSomething() {
    const url = `https://developers.google.com/custom-search/v1`
    var params = {
      // remove __blah23__AIza__
      key: '__blah23__AIza__AIzaSyDk8x__blah23__AIza__LeJ8OYP-7TIwu-qpuADP__blah23__AIza__JBnYalOrQ',
      cx: '017576662512468239146',
      q: 'real madrid'
    }; 

    this.httpClient.get(url, {params}).subscribe(res => {
      console.log(res);
    })
  }

}
