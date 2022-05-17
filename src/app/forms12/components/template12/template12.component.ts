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
  domInput:string = 'dom arey';
  angularInput:string = 'angular arey';


  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.templateForm2.form.valueChanges.pipe().subscribe(res => {
      console.log('value changed');
      console.log(this.templateForm2);
    });
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

  changeFnAngular(event) {    
    this.angularInput = event;    
  }

  changeFnDOM(event) {
    console.log(event);
  }
}
