import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app69-content-init',
  templateUrl: './content-init.component.html',
  styleUrls: ['./content-init.component.scss']
})
export class ContentInitComponent {

  
  @ViewChild('wrapper') wrapper:ElementRef;
  @ContentChild('myContent') content:ElementRef;


  ngAfterViewInit() {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
    console.log('ngAfterViewInit - content', this.content);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);            
    console.log('ngAfterContentInit - content', this.content);
  }

}
