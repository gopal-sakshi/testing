import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app69-reactive12',
  templateUrl: './reactive12.component.html',
  styleUrls: ['./reactive12.component.scss']
})
export class Reactive12Component implements OnInit {

  reactiveForm1:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder.group({
      clubName: '',
      stadiumName: ''
    })
  }

  submitForm() {
    console.log(this.reactiveForm1);
  }

}
