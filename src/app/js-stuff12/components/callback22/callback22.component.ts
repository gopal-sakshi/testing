import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-callback22',
  templateUrl: './callback22.component.html',
  styleUrls: ['./callback22.component.scss']
})
export class Callback22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    // here this.callback01 ----> callback function... we are not invoking the function... we are just passing function reference
      // but what if we want to pass argument to this callback01 ??? 
      // how do we achieve that ------------> blah1.addEventListener('change', this.callback01(arg1));    // THROWS error
    var blah1 = document.getElementById('inputValue1');
    blah1.addEventListener('change', this.callback01);

    // THIS IS HOW WE DO IT
    var blah2 = <HTMLInputElement>document.getElementById('inputValue2');
    blah2.addEventListener('change', this.callbackWithParam('something2'));


    // triggering event listener in case of 'keydown' & not 'change'  // coz, change gets triggered only when input element looses focus
    var blah3 = <HTMLInputElement>document.getElementById('inputValue3');
    blah3.addEventListener('keydown', this.callbackWithParam('something3'));
  }

  callback01() {
    console.log('input changed');
  }

  callbackWithParam(obj23:any) {
    return function() {
      console.log(obj23);
    }
  }

}
