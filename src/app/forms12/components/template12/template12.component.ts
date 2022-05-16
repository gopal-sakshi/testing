import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app69-template12',
  templateUrl: './template12.component.html',
  styleUrls: ['./template12.component.scss']
})
export class Template12Component implements OnInit {

  @ViewChild('templateForm1')templateForm1:NgForm;
  @ViewChild('templateForm2')templateForm2:NgForm;
  addPlayers:boolean = false;
  iplClubName1:any;
  iplClubName2:any;

  constructor() { }

  ngOnInit(): void {
  }

  changeFromTs() {
    this.iplClubName1 = 'PSG';
  }

  submitForm1() {
    console.log(this.templateForm1);    
  }

  submitForm2() {
    console.log(this.templateForm2);    
  }
}
