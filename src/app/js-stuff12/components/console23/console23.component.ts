import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-console23',
  templateUrl: './console23.component.html',
  styleUrls: ['./console23.component.scss']
})
export class Console23Component implements OnInit {


  // Not clear here... see testing_backend for more clarity...
  @Input() input23:string = 'default_input23';
  constructor() { }

  ngOnInit(): void {
  }

  doStuff1() {
    console.log('doStuff1');
    console.log(this.input23);
  }

  doStuff2() {
    console.log('doStuff2');
    
    var A = [2, 1];
    var C = A;          // even though C is assigned A... C's value changes whenever A's value changes
    console.log(C); 
    A.sort();
    console.log(C); 
    A = [3,4,5];

    console.log(A);
    console.log(C);
  }

}
