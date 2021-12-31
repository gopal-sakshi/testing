import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-params12',
  templateUrl: './params12.component.html',
  styleUrls: ['./params12.component.css']
})
export class Params12Component implements OnInit {

  constructor() { }

  products44 = [
    {
      id: 1,
      item: "apple"
    },
    {
      id: 2,
      item: "banana"
    },
    {
      id: 3,
      item: "chikoo"
    },
    {
      id: 4,
      item: "date"
    },
    {
      id: 5,
      item: "egg"
    }
  ]
  ngOnInit(): void {
  }

}
