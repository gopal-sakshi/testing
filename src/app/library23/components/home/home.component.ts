import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showTest1:boolean = false;
  showTest2:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
