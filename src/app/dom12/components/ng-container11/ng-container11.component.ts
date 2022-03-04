import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container11',
  templateUrl: './ng-container11.component.html',
  styleUrls: ['./ng-container11.component.scss']
})
export class NgContainer11Component implements OnInit {

  items = [
    { id: 1, name:"casillas"},
    { id: 2, name:"arbeloa"},
    { id: 3, name:"pepe"},
    { id: 4, name: "ramos" },
    { id: 5, name: "marcelo" },
    { id: 6, name: "modric" },
    { id: 7, name: "alonso" },
    //{ id: 8, name: "khedira" },
    { name: "khedira" },
    { id: 9, name: "dimaria" },
    { id: 10, name: "benzema" },
    { id: 11, name: "ronaldo" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
