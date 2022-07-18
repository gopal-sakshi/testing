import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app69-circle13',
  templateUrl: './circle13.component.html',
  styleUrls: ['./circle13.component.scss']
})
export class Circle13Component implements OnInit {
  
  @Input() time:any;
  @Output() timerCompleted = new EventEmitter();

  FULL_DASH_ARRAY = 283;      // 2 * 3.14 * 45    // 45 is radius of circle
  WARNING_THRESHOLD = 10;
  ALERT_THRESHOLD = 5;
  intervalInstance:any;
  displayTimeLeft:any
  COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: this.WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: this.ALERT_THRESHOLD
    }
  };  
  remainingPathColor = this.COLOR_CODES.info.color;

  TIME:number = 55;
  timeLeft:any;

  constructor() { }

  ngOnInit(): void {
    // this.startTimer();
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    if(this.time) {
      this.TIME = this.time;                  // this.TIME = 120 seconds
                                                // this.time = 120, 119, 118, 117, so on....
      clearInterval(this.intervalInstance);
      this.startTimer();
    }
  }


  startTimer() {
    let timePassed = 0;
    let timeLeft = this.TIME;
    this.intervalInstance = setInterval(() => {
      timePassed = timePassed + 1;
      // console.log(timePassed);
      timeLeft = this.TIME - timePassed;
      // console.log(timeLeft);
      this.timeLeft = timeLeft;
      if(timeLeft == 1) {
        this.clearInterval();
      }
      console.log(this.timeLeft);
      this.formatTime(timeLeft);
      this.setCircleDasharray();
      this.setRemainingPathColor(timeLeft);
    }, 1000)
  }

  formatTime(time) {
    // console.log(time);
    const minutes = Math.floor(time / 60);
    let seconds:any = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    this.displayTimeLeft = `${minutes}.${seconds}`;
    // console.log(this.timeLeft);
  }

  calculateTimeFraction() {
    // console.log(this.timeLeft);
    // console.log(Number(this.timeLeft));    
    const rawTimeFraction = (Number(this.timeLeft) / this.TIME);    
    console.log(rawTimeFraction); 
    var blah = rawTimeFraction - (1 / this.TIME) * (1 - rawTimeFraction);
    // console.log(blah);
    // return blah;
    return rawTimeFraction
    // return (Number(this.timeLeft) / Number(`0.${this.TIME}`));
  }
    
  setCircleDasharray() {
    var blah = (this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0);
    // console.log(blah);
    const circleDasharray = `${blah} 283`;
    // const circleDasharray = `140 283`;
    console.log(circleDasharray);
    document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
    // document.getElementById("base-timer-path-remaining").setAttribute("strokeDasharray", circleDasharray);
  }

  setRemainingPathColor(timeLeft) {
    // console.log('remaining color');
    const { alert, warning, info } = this.COLOR_CODES;
    
    if (timeLeft <= alert.threshold) {
      document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
      document.getElementById("base-timer-path-remaining").classList.add(alert.color);
  
    // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    } else if (timeLeft <= warning.threshold) {
      document.getElementById("base-timer-path-remaining").classList.remove(info.color);
      document.getElementById("base-timer-path-remaining").classList.add(warning.color);
    }
  }

  // setCircleDasharray() {
  //   const circleDasharray = `${(this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
  //   document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
  // }

  clearInterval() {
    clearInterval(this.intervalInstance);
    this.timerCompleted.emit();
  }

}
