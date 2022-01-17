import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-di',
  templateUrl: './home-di.component.html',
  styleUrls: ['./home-di.component.css']
})
export class HomeDiComponent implements OnInit {

  count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("window resized... ",++this.count)
  }


}
