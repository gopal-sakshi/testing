import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-bubble23',
  templateUrl: './bubble23.component.html',
  styleUrls: ['./bubble23.component.scss']
})
export class Bubble23Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rect1Handler(event) {     
    console.log(`event occured @ `, event.target);
  }
  rect2Handler(event) {
    console.log(event?.target?.id);
    if(event?.target?.id == 'rect3a') { event.stopPropagation(); console.log('event from 3a stopped'); }
  }
  rect3aHandler(event:any) { console.log(event?.target?.id); }
  rect3bHandler(event:any) { console.log(event?.target?.id); }

}