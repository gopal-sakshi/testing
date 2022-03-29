import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-typescript11',
  templateUrl: './typescript11.component.html',
  styleUrls: ['./typescript11.component.scss']
})
export class Typescript11Component implements OnInit {

  count23:number = 343;
  constructor() { }

  ngOnInit(): void {    
  }

  unionTypes() {
    console.log(this.count23);
    const result:String | Number| Promise<any> | boolean = this.returnNumberOrStringOrPromise(this.count23);
    console.log(result);
    console.log(typeof(result));
  }

  returnNumberOrStringOrPromise(num44:number):String | Number| Promise<any> | boolean {
    if(num44 < 200) {
      return 'less than 200'
    } else if (num44 > 200 && num44 < 300) {
      return 12
    } else if(num44 < 340) {
      return new Promise((resolve, reject) => {
        resolve('returned Promise Sir');
      });
    } else {
      return false;
    }
  }

}
