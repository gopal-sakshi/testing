import { Component, OnInit } from '@angular/core';
import { FakeJsonStats } from '../../services/fake-json-stats';


@Component({
  selector: 'app69-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.scss']
})
export class Observable2Component implements OnInit {

  stats:any;

  constructor(private fakeJsonStats:FakeJsonStats) { }

  ngOnInit(): void {

    // this.fakeJsonStats.fetchStats().subscribe(res => {
    //   console.log(res);
    // });

    // this.fakeJsonStats.fetchpostCodeStats().subscribe(res => {
    //   console.log(res);
    // });
    
    // this.fakeJsonStats.fetchDummyStats().subscribe(res => {
    //   console.log(res);
    // });

    // const results = this.fakeJsonStats.useForkJoin1();
    // console.log(results);

    this.fakeJsonStats.useForkJoin2().subscribe(res => {
      console.log(res);
    });

    
  }

}
