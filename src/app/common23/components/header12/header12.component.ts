import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header12',
  templateUrl: './header12.component.html',
  styleUrls: ['./header12.component.scss']
})
export class Header12Component implements OnInit {

  todayDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
