import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-dom12',
  templateUrl: './home-dom12.component.html',
  styleUrls: ['./home-dom12.component.scss']
})
export class HomeDom12Component implements OnInit {

  showEncapsulation:boolean = false;
  showRenderer2:boolean = false;
  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('dom12');
  }

}
