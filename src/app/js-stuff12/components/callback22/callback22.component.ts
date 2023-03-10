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

    var blah1 = document.getElementById('inputValue1');
    blah1.addEventListener('change', this.callback01);      // callback01, a function ===> passed as argument

    // how to pass a "function with argument" as callback     THIS IS HOW WE DO IT
    var blah2 = <HTMLInputElement>document.getElementById('inputValue2');    
    blah2.addEventListener('change', this.callback01_withParam('ss'));


    // triggering event listener in case of 'keydown' & not 'change'  // coz, change gets triggered only when input element looses focus
    var blah3 = <HTMLInputElement>document.getElementById('inputValue3');
    blah3.addEventListener('keydown', this.callback01_withParam('sadf'));
  }

  callback01() { console.log('input changed'); }

  callback01_withParam(obj23:any) {
    return function() { console.log(obj23); }
  }

}
