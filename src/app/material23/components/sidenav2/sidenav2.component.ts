import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav2',
  templateUrl: './sidenav2.component.html',
  styleUrls: ['./sidenav2.component.css']
})
export class Sidenav2Component implements OnInit {
  
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
