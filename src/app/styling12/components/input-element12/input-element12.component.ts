import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element12',
  templateUrl: './input-element12.component.html',
  styleUrls: ['./input-element12.component.scss']
})
export class InputElement12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doStuff() {
    console.log("first name got input, hammayya")
  }
}
