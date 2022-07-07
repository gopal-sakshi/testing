import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app69-reactive13',
  templateUrl: './reactive13.component.html',
  styleUrls: ['./reactive13.component.scss']
})
export class Reactive13Component implements OnInit {

  reactiveForm13:FormGroup;
  input1Subscription:Subscription;
  input2Subscription:Subscription;
  input3Subscription:Subscription;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm13 = this.formBuilder.group({
      input1: [''],
      input2: [''],
      input3: [''],
    });

    this.input1Subscription = this.reactiveForm13.get('input1').valueChanges.subscribe(res => {
      console.log(res);
    });

    this.input2Subscription = this.reactiveForm13.get('input2').valueChanges.subscribe(res => {
      console.log(res);
    });

    this.input3Subscription = this.reactiveForm13.get('input3').valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  onSubmit() {
    console.log(this.reactiveForm13);
  }

  ngOnDestroy() {
    console.log('unsubscribed');
    this.input1Subscription.unsubscribe();
    this.input2Subscription.unsubscribe();
    this.input3Subscription.unsubscribe();
  }

}
