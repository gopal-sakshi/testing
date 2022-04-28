import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app69-template12',
  templateUrl: './template12.component.html',
  styleUrls: ['./template12.component.scss']
})
export class Template12Component implements OnInit {

  @ViewChild('templateForm1')templateForm1:NgForm;
  addPlayers:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.templateForm1);    
  }

}
