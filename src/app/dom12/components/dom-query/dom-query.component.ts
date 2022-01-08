import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-query',
  templateUrl: './dom-query.component.html',
  styleUrls: ['./dom-query.component.css']
})
export class DomQueryComponent implements OnInit {

  @ViewChild("child1") firstChild: ElementRef;

  
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    console.log(this.element.nativeElement);
  }

  ngAfterViewInit() {
    console.log(this.firstChild.nativeElement);
  }

}
