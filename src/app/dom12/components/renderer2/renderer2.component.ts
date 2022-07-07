import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app69-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.scss']
})
export class Renderer2Component implements OnInit {

  constructor(private renderer: Renderer2, 
    private el: ElementRef) { }

  ngOnInit(): void {
  }

  doStuff1() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');
    var htmlElement = document.getElementById('mainContent');
    this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.appendChild(htmlElement, div);
  }

}

/*

The Renderer2 class
- an abstraction provided by Angular 
- in the form of a service
- that allows to manipulate elements of your app 
  without having to touch the DOM directly. 

This is the recommended approach because it then 
- makes it easier to develop apps 
- that can be rendered in environments that don’t have DOM access
  like on the server
  in a web worker
  native mobile.

*/