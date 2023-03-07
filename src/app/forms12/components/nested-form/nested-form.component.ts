import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app69-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {

  productForm:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.productForm = this.fb.group({
      product:         [''],
      harvestedYear:   [''],      
      smartElements: this.fb.group({
        weight: this.fb.group({ unit: [''], value: [''], stateMatter: [''] }),
        color: ['']
      }),
    });

    // Different ways to look for valueChanges
    this.productForm.get('smartElements.weight.unit').valueChanges.subscribe(res => { console.log(res); });    
    this.productForm.get(['smartElements', 'weight', 'stateMatter']).valueChanges.subscribe(res => { console.log(res); })

  }

  submit() { console.log(this.productForm); }

}
