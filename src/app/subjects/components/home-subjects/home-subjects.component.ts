import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-subjects',
  templateUrl: './home-subjects.component.html',
  styleUrls: ['./home-subjects.component.scss']
})
export class HomeSubjectsComponent implements OnInit {


  showSubjects:boolean = false;
  showReplaySubjects:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
