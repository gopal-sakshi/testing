import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-circle13',
  templateUrl: './circle13.component.html',
  styleUrls: ['./circle13.component.scss']
})
export class Circle13Component implements OnInit {

  COLOR_CODES = {
    info: {
      color: "green"
    }
  };  
  remainingPathColor = this.COLOR_CODES.info.color;

  TIME:number = 55;
  timeLeft:string;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    let timePassed = 0;
    let timeLeft = this.TIME;
    setInterval(() => {
      timePassed = timePassed + 1;
      // console.log(timePassed);
      timeLeft = this.TIME - timePassed;
      console.log(timeLeft);
      this.formatTime(timeLeft)
    }, 1000)
  }

  formatTime(time) {
    console.log(time);
    const minutes = Math.floor(time / 60);
    let seconds:any = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    this.timeLeft = `${minutes}:${seconds}`;
    console.log(this.timeLeft);
  }

  // setCircleDasharray() {
  //   const circleDasharray = `${(
  //     calculateTimeFraction() * FULL_DASH_ARRAY
  //   ).toFixed(0)} 283`;
  //   document
  //     .getElementById("base-timer-path-remaining")
  //     .setAttribute("stroke-dasharray", circleDasharray);
  // }

}
