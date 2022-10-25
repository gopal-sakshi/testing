import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app69-test-forms12',
  templateUrl: './test-forms12.component.html',
  styleUrls: ['./test-forms12.component.scss']
})
export class TestForms12Component implements OnInit {

  testForm1:FormGroup;
  totalAmount:number = 1000;
  localCopy:number;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.localCopy = this.totalAmount;
    
    this.testForm1 = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
    });

    this.testForm1.get('amount').valueChanges.subscribe(res => {
      console.log(res);
      this.totalAmount = this.localCopy + parseInt(res);
    })
  }

  
}
