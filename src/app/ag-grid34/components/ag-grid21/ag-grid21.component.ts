import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, Observable, of } from 'rxjs';
import { catchError, map, switchMap, toArray } from 'rxjs/operators';


// To make multiple API calls... using offset & limit
@Component({
  selector: 'app69-ag-grid21',
  templateUrl: './ag-grid21.component.html',
  styleUrls: ['./ag-grid21.component.scss']
})
export class AgGrid21Component implements OnInit {

  columnDefs: [];
  rowDefs: [];
  url = 'https://pokeapi.co/api/v2/ability';
  batchSize = 96;
  fetchMethodCalled: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchData().pipe().subscribe(result => {
      console.log(result);
    });
  }

  fetchData() {
    console.log('inside fetchData');

    console.log(this.url);
    return this.fetch(this.url, 0, this.batchSize).pipe(
      switchMap(res => this.hasItemsToGroup(res) ?  this.groupAndFetch(res, this.url) : of(res)),
    );
  }

  hasItemsToGroup(res:any):boolean {
    console.log('hasItemsToGroup',res);
    let someLength = 0;
    Object.assign(someLength, res.results.length);
    console.log('array length = ',someLength);
    return res.count ? res.count > res.results.length : false
  }

  groupAndFetch(res, url, fetchSequentially = true) {

    const obs: Observable<any>[] = this.splitApiCalls(url, +res.count);

    // Observable to fetch records sequentially
    const sequentialFetchObs = concat(of(res), ...obs).pipe(toArray());

    // Observable to make API calls in parallel
    const parallelFetchObs = combineLatest(of(res), ...obs);

    // Resultant observable to call based on the fetchSequentially param
    const resultantObs = fetchSequentially ? sequentialFetchObs : parallelFetchObs;

    return resultantObs
      .pipe(
        map(res => this.mergeList(res))
      );
  }

  mergeList(res) {
    console.log('mergeList ', res)
    const mergedResponse = res;
    return mergedResponse;
  }

  splitApiCalls(url:string, totalCount:Number) {
    const obs:Observable<any>[] = [];

    for (let offset = this.batchSize; offset < totalCount; offset+=this.batchSize) {
      console.log('split Api Calls ',offset,totalCount,this.batchSize)
      obs.push(
        this.fetch(url, offset, this.batchSize)
      );
    }
    return obs;   // obs = an array... not array of strings (or) array of numbers... but array of observables
                    // arrNum = [1,2,3,4]
                    // arrString = ["gopal", "priya", "sahasra"]
                    // arrObs = [obs1, obs2, obs3]
  }

  fetch(url:string, offset:Number, batchSize:Number):Observable<any> {

    const params = {
      offset: offset.toString(),
      limit: batchSize.toString()
    }
    console.log('url',url);
    console.log('params = ',params);
    console.log('inside fetch ',++this.fetchMethodCalled)
    return this.httpClient.get<any>(url, {params}).pipe(
      map(res => {console.log(res); return res}),
      catchError(err => {
        const dummyRes = {
          columnDefs: [],
          results: [],
        };
        return of(dummyRes);
      })
    );
  }

}
