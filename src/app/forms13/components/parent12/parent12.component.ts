import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app69-parent12',
  templateUrl: './parent12.component.html',
  styleUrls: ['./parent12.component.scss']
})
export class Parent12Component implements OnInit {

  userForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: [],
        email: [],
        age: []
      }),
      address: this.fb.group({
        street: [],        
        postal: [],
        company: []
      })
    });
  }

  submitForm() {
    console.log(this.userForm);
  }

}
