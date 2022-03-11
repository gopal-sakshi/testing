import { Component, OnInit } from '@angular/core';
import { EventManager, Meta, TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app69-event-manager14',
  templateUrl: './event-manager14.component.html',
  styleUrls: ['./event-manager14.component.scss']
})
export class EventManager14Component implements OnInit {

  htmlElement:HTMLElement;

  constructor(private eventManager: EventManager,
    private meta:Meta,
    //private trasnferState:TransferState
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.htmlElement = document.getElementById('button-element');
    this.eventManager.addEventListener(this.htmlElement,'dblclick',()=>{console.log('event listener triggered')});
  }

  doStuff() {
    console.log('do stuff happened');
    console.log(this.eventManager.getZone());
  }

  doMetaStuff() {
    this.meta.updateTag({name:"viewport", content:"width=5000px, initial-scale=5"}, "name='viewport'");
    // The value "500px" for key "width" was truncated to its numeric prefix.
      // this is the message printed in console ????
    this.meta.addTag({httpEquiv:"refresh", content:"5"})  // this makes the page refresh every 5 seconds
  }

  doTransferStateStuff() {
    //this.trasnferState.set('usingTS', 'jingchak')
  }

}


/* 
    content: 
      width property 
      - controls the size of the viewport. 
      - It can be set to a specific number of pixels like width=600 or
      - to the special value device-width (width of the screen in CSS pixels at a scale of 100%)
    
      initial-scale property 
      - controls the zoom level when the page is first loaded. 
      - The maximum-scale, minimum-scale, user-scalable properties control how users are allowed to zoom the page in or out
    
*/
