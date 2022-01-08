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
    // But, the direct usage of ElementRef is discouraged by Angular Team
      // because it directly provides the access to DOM which can make your application vulnerable to XSS attacks
      // plus, it creates tight coupling between your application and rendering layers 
        // which makes is difficult to run an app on multiple platforms.
  }

  ngAfterViewInit() {
    console.log(this.firstChild.nativeElement);
  }

}
