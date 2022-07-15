import { Component, OnInit } from '@angular/core';
import { Master1Component } from '../../classes/master1.component';
import { Master2 } from '../../classes/master2';

@Component({
  selector: 'app69-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent extends Master2 implements OnInit {
// export class ParentComponent extends Master1Component implements OnInit {  
  displayName:string = 'Parent Component';

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('parent comp destroying - start');
    this.destroyStuff();
    console.log('parent comp destroying - end');
  }

}
