import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app69-event-manager14',
  templateUrl: './event-manager14.component.html',
  styleUrls: ['./event-manager14.component.scss']
})
export class EventManager14Component implements OnInit {

  htmlElement:HTMLElement;

  constructor(private eventManager: EventManager) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.htmlElement = document.getElementById('button-element');
    this.eventManager.addEventListener(this.htmlElement,'dblclick',()=>{console.log('event listener triggered')});
  }

  doStuff() {
    console.log('do stuff happened');
    console.log(this.eventManager.getZone());
  };

}
