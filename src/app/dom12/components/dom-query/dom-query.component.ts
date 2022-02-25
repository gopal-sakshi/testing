import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-query',
  templateUrl: './dom-query.component.html',
  styleUrls: ['./dom-query.component.scss']
})
export class DomQueryComponent implements OnInit {

  @ViewChild("child1") firstChild: ElementRef;

  
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    console.log(this.element.nativeElement);

    /* this is the output... it prints the whole html of this "DomQueryComponent"

      <app-dom-query _nghost-yka-c72="">
        <div _ngcontent-yka-c72="">I am a dom query component</div>
        <div _ngcontent-yka-c72="">First Child</div>
      </app-dom-query>

    */
  }

  ngAfterViewInit() {
    console.log(this.firstChild.nativeElement);
  }

  /**
   * NOTE:
   * 
    the direct usage of ElementRef is discouraged by Angular Team
    because it directly provides the access to DOM which can make your application vulnerable to XSS attacks
    plus, it creates tight coupling between your application and rendering layers 
    which makes is difficult to run an app on multiple platforms.

   */
}
