import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CircleTimerComponent } from '@flxng/circle-timer';

@Component({
  selector: 'app69-circle12',
  templateUrl: './circle12.component.html',
  styleUrls: ['./circle12.component.scss']
})
export class Circle12Component implements OnInit, AfterViewInit {

  @Input() time:any;  
  @ViewChild('timer', { static: false }) timer: CircleTimerComponent;
  duration:number = 120 * 1000;  
  viewInitialised:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.time) {      
      if(this.timer) {
        console.log('re-initialise timer');
        if(this.viewInitialised) {
          this.timer.init();
          // this.duration = this.time * 1000;
          this.timer.start();
        }        
      }      
    }
  }

  ngAfterViewInit() {
    this.viewInitialised = true;
    this.timer.start();
  }

  onTimerComplete() {
    console.log('timer completed');
  }

  getDetails() {
    // console.log(this.startDate);
    console.log(this.duration);
    console.log('minutes = ',(this.duration / (60 * 1000)));
  }

}
