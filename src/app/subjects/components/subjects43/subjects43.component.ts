import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects43',
  templateUrl: './subjects43.component.html',
  styleUrls: ['./subjects43.component.scss']
})
export class Subjects43Component implements OnInit {

  clubNameSubscription: Subscription; 
  clubNames:any = [];
  
  constructor(private middlemanService: MiddleManService) { }

  ngOnInit(): void {
    this.clubNameSubscription = this.middlemanService.getFootballMsg().subscribe(res => {      
      this.clubNames.push(res.player);
    })
  }


  // In ngOnDestroy() lifecycle hook, we are unsubscribing from the subscription. 
    // If we don’t unsubscribe before the component gets destroyed, it can cause memory leaks.    
  ngOnDestroy() {
    this.clubNameSubscription.unsubscribe();
  }

}
