import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zone11-outisde-angular',
  templateUrl: './zone11-outisde-angular.component.html',
  styleUrls: ['./zone11-outisde-angular.component.css']
})
export class Zone11OutisdeAngularComponent implements OnInit {

  @ViewChild('div', { static: true }) div: ElementRef

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {

    this.changeColor();
  }

  private setRandomColor() {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple'][Math.random() * 6 | 0];
  }
  private changeColor() {
    setInterval(_ => this.div.nativeElement.style.background = this.setRandomColor(), 50)
  }

  /*
    Suppose we have an animation in the application,
      a simple <div> element that changes its background every 50 ms using a simple setInterval.
      just wrap it with NgZone.runOutsideAngular
      Now we run timer outside NgZone and angular isn’t even “aware” that we fire these timers.

  */
}
