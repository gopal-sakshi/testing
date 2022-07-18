import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-circle14',
  templateUrl: './circle14.component.html',
  styleUrls: ['./circle14.component.scss']
})
export class Circle14Component implements OnInit {

  timeLeft:any; 
  constructor() { }

  ngOnInit(): void {
    var time = 100;
    var initialOffset = '440';
    var i = 1;
    let timePassed = 0;
    let timeLeft = 0;
    
    document.querySelector('.circle_animation')
    document.getElementById('circle23').style.setProperty('stroke-dashoffset', initialOffset);
    setInterval(() => {
      timePassed = timePassed + 1;
      // console.log(timePassed);
      timeLeft = time - timePassed;
      // console.log(timeLeft);
      // this.formatTime(timeLeft)
      this.timeLeft = timeLeft;
    }, 1000)

  }

}
