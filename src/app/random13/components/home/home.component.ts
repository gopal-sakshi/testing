import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  showCircle13:boolean = false;  
  showUpload180Mb:boolean = false;  
  time:number = 60;  
  
  constructor() { }

  ngOnInit(): void {  }  

  timerCompleted() { console.log('timer completed'); }

}
