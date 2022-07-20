import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-forms12',
  templateUrl: './home-forms12.component.html',
  styleUrls: ['./home-forms12.component.scss']
})
export class HomeForms12Component implements OnInit {

  showDateValidator:boolean = false;
  showCustomValidator:boolean = false;  
  showTemplateForm:boolean = false;
  showReactiveForm12:boolean = false;
  showReactiveForm13:boolean = false;
  showFormArray:boolean = false; 
  showCustomFormControl:boolean = false; 
  showNestedForm:boolean = false;
  showAddressForms:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}

