import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-functions12',
  templateUrl: './functions12.component.html',
  styleUrls: ['./functions12.component.scss']
})
export class Functions12Component implements OnInit {

  /** need to work... see new_constructor in testing_backend */
  constructor() { }

  ngOnInit(): void {
    let result = this.add44(10,20);
    console.log(result); // 30
    console.log(result.target);
  
    // let obj = new this.add44(10,20);
    // console.log(obj);
    // console.log(obj.target);
  }

  add44(x, y) {
    return x + y;
  }

  thisExplained() {
    
  }

}
