import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimulateFirebase } from '../../classes/simulate-firebase';

@Component({
  selector: 'app69-observable72',
  templateUrl: './observable72.component.html',
  styleUrls: ['./observable72.component.scss']
})
export class Observable72Component extends SimulateFirebase implements OnInit {

  stream1$:Observable<any>;
  stream2$:Observable<any>;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  doFireBase() {
    this.stream1$ = this.simulateFirebase('STREAM', 3000);
    this.stream2$ = this.simulateFirebase('JC', 5000);
    
    this.stream1$.subscribe(
      res => { console.log(res); },
      err => { console.log(err); },
      () => { console.log('completed') }
    );

    this.stream2$.subscribe(
      res => { console.log(res); },
      err => { console.log(err); },
      () => { console.log('completed') }
    );

  }


}
