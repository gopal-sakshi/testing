import { Component, OnInit } from '@angular/core';
import { FileMimeTypes } from '../../classes/types23';

@Component({
  selector: 'app69-home-r13',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeR13Component implements OnInit {

  showJoinArray:boolean = false;
  dynamicComponentCreation:boolean = false;
  showParent34:boolean = false;
  googleSearch:boolean = false;
  
  items1:any = FileMimeTypes;
  items2:string = 'Nayan';
  constructor() { }

  ngOnInit(): void {
    // console.log(this.items1);
  }

}
