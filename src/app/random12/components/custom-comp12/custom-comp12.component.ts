import { Component, OnInit } from '@angular/core';
import { CustomCompDecorator } from '../../decorators/customComp.decorator';

// @CustomCompDecorator({
//   selector: 'app-custom-comp12',
//   templateUrl: './custom-comp12.component.html',
//   styleUrls: ['./custom-comp12.component.css']
// })
@Component({
  selector: 'app-custom-comp12',
  templateUrl: './custom-comp12.component.html',
  styleUrls: ['./custom-comp12.component.css']
})
export class CustomComp12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
