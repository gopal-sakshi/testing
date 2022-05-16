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

  paginationPageSize: number = 5;
  pagination: boolean = true;
  paginationAutoPageSize: boolean = false;

  columnDefs:any = [
    { field: 'name', width: 150, sortable:true },
    { field: 'url', width: 150, resizable:true}
  ];
  rowDefs: any =  [];
  rowDefs2: any =  [];
  rowDefs3:any = [];
  url = 'https://pokeapi.co/api/v2/ability';
  batchSize = 96;
  fetchMethodCalled: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.fetchData().pipe().subscribe(result => {
      // console.log(result);
      result.forEach((item, index) => {
        this.rowDefs.push(...(item.results));
        // console.log(this.rowDefs);
      });
      console.log(this.rowDefs);
      console.log(this.rowDefs2);
      this.rowDefs3 = Object.assign({}, this.rowDefs);
      console.log(this.columnDefs);
    });   
  }

  showDiff() {
    this.rowDefs2 = [
      {"name": 'gopal', "url": 'gopal-url'},
      {name: 'kroos', url: 'kroos-url'},
      {name: 'modric', url: 'modric-url'},
      {name: 'casemiro', url: 'casemiro-url'},
      {name: 'alaba', url: 'alaba-url'},
      {name: 'militao', url: 'militao-url'},
      {name: 'mendy', url: 'mendy-url'},
    ];
    console.log(typeof this.rowDefs);
    console.log(typeof this.rowDefs2);
    console.log(typeof this.rowDefs[0]);
    console.log(typeof this.rowDefs2[0]);
    console.log(Object.keys(this.rowDefs[0]));
    console.log(Object.keys(this.rowDefs2[0]));
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
    console.log(obs);
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

