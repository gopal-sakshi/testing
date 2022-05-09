import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MiddleMan } from '../../classes/middle-man';
import { RxJsService } from '../../services/rx-js-service';

@Component({
  selector: 'app69-observable41',
  templateUrl: './observable41.component.html',
  styleUrls: ['./observable41.component.scss']
})
export class Observable41Component extends MiddleMan implements OnInit {

  
  constructor(private rxJsService:RxJsService) { 
    super(rxJsService); 
  }

  // this is for that auth kalgudi thingyy... token service getting called multiple times...
    // all 'blahblah functions' in some page calling --------> refresh auth token
    // but, refresh auth token must be called only ONCE... only then, these 'blahblah functions' can return
    // till token is refreshed, they must wait/await at refreshAuthToken() function itself ...
    
  ngOnInit(): void {
    this.makeServiceCallsComp();
  }

  makeServiceCallsComp() {
    this.makeServiceCalls();
  }

  startObservable() {

    const buttonId = document.getElementById('button24');
    const someObs = fromEvent(buttonId, 'click');
    // this.
  }

}
