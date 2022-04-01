import { Component, OnInit } from '@angular/core';
import { JsStuff12Service } from '../../services/js-stuff12.service';

@Component({
  selector: 'app69-promise44',
  templateUrl: './promise44.component.html',
  styleUrls: ['./promise44.component.scss']
})
export class Promise44Component implements OnInit {

  constructor(private jsService:JsStuff12Service) { }

  ngOnInit(): void {
  }

  // FOR SOME REASON, THE LOGS PRINTED IN CONSOLE ARE IN CONFUSING ORDER... RUN THIS doStuff1() AND SEE FOR YOURSELF
  doStuff1() {
    const totaley = this.addNumbers1(2,3,4);
    console.log(totaley);
    console.log('aa vacha entanta');    
  }

  doStuff2() {
    const totaley = this.multiplyNum(3,7);
    console.log(totaley);
    console.log('hello doc, doStuff2');
  }

  async multiplyNum(num1:number, num2:number):Promise<any> {
    // SYNTAX
      // const res = await someFunction()   ----> someFunction() must return a promise ideally...
  }

  async addNumbers1(num1:number, num2:number, num3:number):Promise<any> {
    await this.jsService.getMockData().subscribe(res => {
      console.log(res);
    });
    console.log('after await');
    // return num1+num2+num3;
    return "priya";
      // If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
  }
}
