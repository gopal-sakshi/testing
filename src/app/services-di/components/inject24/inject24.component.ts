import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app69-inject24',
  templateUrl: './inject24.component.html',
  styleUrls: ['./inject24.component.scss']
})
export class Inject24Component implements OnInit {

  /*
    trying to manually inject a class/service 
    - 
  */ 
  constructor(@Inject('someInjectionToken24') private inject24:any) { }

  ngOnInit(): void {
  }

  manualInject1() {
    console.log('insdeeee');
    var names = this.inject24.getNames();
    var subNames = this.inject24.getSubDepNames();
    console.log(names);
    console.log(subNames);
  }

}
