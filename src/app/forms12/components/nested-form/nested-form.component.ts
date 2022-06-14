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
        weight: this.fb.group({
          unit: [''],
          value: [''],
          enabled: [true]
        }),
      }),
    });

    this.productForm.get('smartElements.weight.unit').valueChanges.subscribe(res => {
      console.log(res);
      // this.productForm.get('smartElements.weight.unit').setValue(23);   // this line will take it infinite loop
                                                                          // whenever 'unit' changes, observable triggers... 
                                                                          // then again, you set the value of 'unit'
                                                                          // now again, observable gets triggered...
                                                                          // so, this goes into inifinite loop (or) 
                                                                          // internally, angular uses a lock and you cant set value of 'unit'
                                                                          // as long as observable isnt completed...
                                                                          // max call stack size reached
    });

    // this.productForm['smartElements'].child['weight'].child['value'].valueChanges.subscribe(res => {
    //   console.log(res);
    // })

    this.productForm.get(['smartElements', 'weight', 'value']).valueChanges.subscribe(res => {
      console.log(res);
    })

  }

  submit() {
    console.log(this.productForm);
  }

}
