import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app69-observable71',
  templateUrl: './observable71.component.html',
  styleUrls: ['./observable71.component.scss']
})
export class Observable71Component implements OnInit {

  timerSub23:Subscription; 
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  startTimer() {
    
    // timer ====> rxjs operator; emit data after specified time
    this.timerSub23 = timer(3000).pipe(
      switchMapTo(of(1,2,3))
    ).subscribe(res => { console.log(res) });

  }

  stopTimer() {
    console.log('timer stopped');
    this.timerSub23.unsubscribe();
  }



}
