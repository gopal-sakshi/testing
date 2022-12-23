import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-home-bootstrap',
  templateUrl: './home-bootstrap.component.html',
  styleUrls: ['./home-bootstrap.component.scss']
})
export class HomeBootstrapComponent implements OnInit {

  showBootstrapButtons:boolean = false;
  showLayout12:boolean = false;
  showLayout13:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
