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

  time:number = 60;

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

}
