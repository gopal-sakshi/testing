import { Component, Input, OnInit } from '@angular/core';
import { Parent23 } from '../../classes/abstract-parent23';


@Component({
  selector: 'app69-join-array',
  templateUrl: './join-array.component.html',
  styleUrls: ['./join-array.component.scss']
})
export class JoinArrayComponent extends Parent23 implements OnInit {

  @Input()join23:any;

  constructor() { 
    super();
    console.log('constructor - join array');
  }

  ngOnInit(): void {
    console.log('ngOnInit - join array ');
  }

  ngOnChanges() {
    console.log('ngOnChanges - join array ');
    if(this.join23) {
      // console.log(this.join23);
    }
  }

}
