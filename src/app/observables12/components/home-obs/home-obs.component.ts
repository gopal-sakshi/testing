import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-home-obs',
  templateUrl: './home-obs.component.html',
  styleUrls: ['./home-obs.component.scss']
})
export class HomeObsComponent implements OnInit {

  showObservable2:boolean = false;
  showSwitchMap:boolean = false;
  showObservable21:boolean = false;
  showObservable61:boolean = false;
  showMerge:boolean = false;
  showFutDb:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
