import { Component, OnInit } from '@angular/core';
import { FileMimeTypes } from '../../classes/types23';

@Component({
  selector: 'app69-home-r13',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeR13Component implements OnInit {

  items:any = FileMimeTypes;
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
