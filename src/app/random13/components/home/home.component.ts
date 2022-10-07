import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showCircle12:boolean = false;
  showCircle13:boolean = false;
  showCircle14:boolean = false;
  showCircle15:boolean = false;
  showUpload180Mb:boolean = false;
  showWaterMeter12:boolean = false;
  time:number = 60;
  lengthsArray:any = [
    [3,6,12],
    [2,4,1],
    [3,4,5],
    [6,1,1],
    [8,4,4],
    [12,6,4],
    [20,10,10],
    [1,4,3],
    [1,5,6],
    [9,9,9]
  ]
  lengths:number[] = [10,1,1];
  
  constructor() { }

  ngOnInit(): void {
  }

  modifyTime() {
    var time = (<HTMLInputElement>document.getElementById('modifyTime')).value;
    console.log(time)
    this.time = Number(time);
  }

  timerCompleted() {
    console.log('timer completed');
  }

  modifyWaters() {
    var max=9, min=0;
    var index = Math.floor(Math.random() * (max - min + 1) + min);        // generate random number between [1,5]    
    this.lengths = this.lengthsArray[index];    
  }
}
