import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects42',
  templateUrl: './subjects42.component.html',
  styleUrls: ['./subjects42.component.scss']
})
export class Subjects42Component implements OnInit {

  playerNameSubscription:Subscription;
  playerNames:any = [];
  observer42:any;

  constructor(private middlemanService: MiddleManService) { }

  ngOnInit(): void {
    this.observer42 = {
      next: (next) => {console.log('next called ',next); this.playerNames.push(next.player)},
      err: (err) => {console.log('errorey ')},
      complete: () => {console.log('observable complete... so, myself observer42 will not receive any more data')}
    };
    // Notice here, 'footballMsgSubject' is a Subject... its must send that data it reveived to 'this.observer42'
    // Similary, see, subject43 component... there the same subject will send the data it received to 'this.observer43'
    // Meaning... at this moment, footballMsgSubject ----> has TWO observers/subscribers...
    // whenever a next() method is called on footballMsgSubject ----> the corresponding next() callback is triggered in observer42 & observer43
    // whenever complete() is called on footballMsgSubject ---> complete() callback is triggered in those two observers/subscribers
    this.playerNameSubscription = this.middlemanService.getFootballMsg().subscribe(this.observer42);
  }

  ngOnDestroy() {
    this.playerNameSubscription.unsubscribe();
  }

}
