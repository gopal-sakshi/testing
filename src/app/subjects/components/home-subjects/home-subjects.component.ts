import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.scss']
})
export class HomeSubjectsComponent implements OnInit {


  showSubjects: boolean = false;
  showReplaySubjects: boolean = false;


  constructor() { }

  ngOnInit(): void { }

  subjectAsObservor() {
    const subject23 = new Subject<number>();

    subject23.subscribe({
      next: (v) => console.log(`observerA _ value vachindi roi: ${v}`),
      error: (err) => {},
      complete: () => { console.log('overeeeeeeyyyyyyyyyyy')}
    });

    const observable54 = from([1, 2, 3]);                 // this observable54 emits values... asynchronously...

    observable54.subscribe(res => { console.log(res+'anon') });     // only next() cb is provided... that too anonymous 
    observable54.subscribe({next: res => { console.log(res+'named') }});    // only next() cb is provided... but namedFn
    observable54.subscribe(
      { 
        next: (res) => console.log(`${res}_all_3_cbs`),
        error: (error) => {},
        complete: () => { console.log('overeeeeeeyyyyyyyyyyy')}
      }
    );      // all 3 callbacks provided with named Functions... but the observor itself has no name...

    observable54.subscribe(subject23);                    // we provided an observor... with name "subject23"
  }

}
