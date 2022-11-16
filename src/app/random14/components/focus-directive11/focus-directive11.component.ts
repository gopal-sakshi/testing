import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-focus-directive11',
  templateUrl: './focus-directive11.component.html',
  styleUrls: ['./focus-directive11.component.scss']
})
export class FocusDirective11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doStuff23() {
    var name11 = (<HTMLInputElement>document.getElementById('name11')).value;
    console.log(name11);
  }

}
