import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MiddleMan } from '../../classes/middle-man';
import { RxJsService } from '../../services/rx-js-service';

@Component({
  selector: 'app69-observable41',
  templateUrl: './observable41.component.html',
  styleUrls: ['./observable41.component.scss']
})
export class Observable41Component extends MiddleMan implements OnInit {


  @ViewChild('button24',{static:true}) button24;
  someObs1:Observable<any>;
  count:number = 0;

  constructor(private rxJsService:RxJsService) {
    super(rxJsService);
  }

  ngOnInit(): void {
    this.makeServiceCallsComp();
  }

  makeServiceCallsComp() {
    this.makeServiceCalls();
  }

  stopObservable() {}

  ngAfterViewInit() {
    this.someObs1 = fromEvent(this.button24.nativeElement, 'click');
  }

  startObservable() {

    this.someObs1.pipe(
      map((res) => {
        console.log('inside map')
        return interval(1000);
      })
    ).subscribe({
      next: res => {
        console.log(res);
        console.log('jing chak',+(++this.count));
      }
    })
  }
  // https://www.willtaylor.blog/rxjs-observables-hot-cold-explained/
}
