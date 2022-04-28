import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.scss']
})
export class HomeSubjectsComponent implements OnInit {

  showObservable2:boolean = false;
  showSwitchMap:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
