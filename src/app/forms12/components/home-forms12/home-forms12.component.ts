import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-forms12',
  templateUrl: './home-forms12.component.html',
  styleUrls: ['./home-forms12.component.scss']
})
export class HomeForms12Component implements OnInit {

  showDateValidator:boolean = false;
  showReactiveForm:boolean = false;
  showTemplateForm:boolean = false;
  showCustomValidator:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
