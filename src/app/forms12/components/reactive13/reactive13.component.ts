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
  input1Sub:Subscription;
  input2Sub:Subscription;
  input3Sub:Subscription;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm13 = this.formBuilder.group({ input1: [''], input2: [''], input3: [''] });
    this.input1Sub = this.reactiveForm13.get('input1').valueChanges.subscribe(res => {console.log(res); });
    this.input2Sub = this.reactiveForm13.get('input2').valueChanges.subscribe(res => { console.log(res); });
    this.input3Sub = this.reactiveForm13.get('input3').valueChanges.subscribe(res => { console.log(res); });
  }

  onSubmit() { console.log(this.reactiveForm13); }

  ngOnDestroy() {
    console.log('unsubscribed');
    this.input1Sub.unsubscribe();
    this.input2Sub.unsubscribe();
    this.input3Sub.unsubscribe();
  }

}
