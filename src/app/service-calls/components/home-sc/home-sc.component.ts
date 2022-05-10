import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sc',
  templateUrl: './home-sc.component.html',
  styleUrls: ['./home-sc.component.scss']
})
export class HomeScComponent implements OnInit {

  
  showVideo11:boolean = false;
  showSimpleExpress:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
