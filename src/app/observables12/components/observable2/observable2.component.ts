import { Component, OnInit } from '@angular/core';
import { FakeJsonStats } from '../../services/fake-json-stats';
import { Fake23Service } from '../../services/fake-api-service';
import { map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app69-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.scss']
})
export class Observable2Component implements OnInit {

  stats:any;

  constructor(private fakeJsonStats:FakeJsonStats,
    private fake23:Fake23Service
  ) { }

  ngOnInit(): void {

    // fetch the IP address from which request was made
    this.fakeJsonStats.fetchStats().subscribe(res => {
      console.log(res);
    });
 
  }

  mergeMap23() {
    this.fakeJsonStats.useMergeMap().subscribe(res => {
        console.log('make 1 API call, based on the response, make 2nd API call ', res);
      });
  }

  nestedApiCalls() {
    // this.fakeJsonStats.nestedApiCalls();
    this.fakeJsonStats.nestedApiCallsMergeMap();
  }

  forkJoin1() {
    const results = this.fakeJsonStats.useForkJoin1();
    console.log("if one observable fails ---> rest all will be cancelled ")
    console.log("fork join 1 ===> ", results);
  }

  forkJoin2() {
    this.fakeJsonStats.useForkJoin2().subscribe(res => {
        // if we handle error individually, then no problem... rest 3 API calls will be successful
        console.log('fork join 2 ===> ', res);
      });
  }

  fakeService() {

    // ITERATIVE    ---> HTTP calls are asynchronous 
    this.fake23.getMsgAfterTime(3, false).subscribe(res => { console.log('3 sec ===> ', res); });
    this.fake23.getMsgAfterTime(2, false).subscribe(res => { console.log('2 sec ===> ', res); });
    this.fake23.getMsgAfterTime(1, false).subscribe(res => { console.log('1 sec ===> ', res); });


    // USING MERGEMAP

    this.fake23.getMsgAfterTime(3)
    .pipe(
        map((message:any) => console.log("msg 3 sec ==> ", message)), 
        mergeMap(() => this.fake23.getMsgAfterTime(2)), 
        map((message) => console.log("msg 2 sec ===> ", message)), 
        mergeMap(() => this.fake23.getMsgAfterTime(1)), 
        map((message) => console.log("msg 1 sec ", message))
    ).subscribe(() => console.log('http calls made one after another23'));
  }

}
