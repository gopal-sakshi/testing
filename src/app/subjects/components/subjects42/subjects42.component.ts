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
  
  constructor(private middlemanService: MiddleManService) { }

  ngOnInit(): void {
    this.playerNameSubscription = this.middlemanService.getFootballMsg().subscribe(res => {
      this.playerNames.push(res.club);
    })
  }

  ngOnDestroy() {
    this.playerNameSubscription.unsubscribe();
  }

}
