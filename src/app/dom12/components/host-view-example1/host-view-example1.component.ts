import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-view-example1',
  templateUrl: './host-view-example1.component.html',
  styleUrls: ['./host-view-example1.component.scss']
})
export class HostViewExample1Component implements OnInit {

  @Input() data1 = 'default value';
  constructor() { }

  ngOnInit(): void {
  }

}
