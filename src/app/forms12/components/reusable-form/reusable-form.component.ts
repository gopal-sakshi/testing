import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app69-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ReusableFormComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ReusableFormComponent),
      multi: true
    }
  ]
})
export class ReusableFormComponent implements OnInit, ControlValueAccessor {

  userForm: FormGroup;
  formTouchFn;

  constructor(private formBuilder: FormBuilder,
    private ngForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: [''],
      email: ['']
    });
  }

  writeValue(obj: any): void {

    const emtptyForm = {
      firstName: null,
      lastName: null,
      email: null
    };

    const data = Object.assign(emtptyForm, obj);
    this.userForm.patchValue(data);
  }

  registerOnChange(fn: any): void {
    this.userForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.formTouchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.userForm.disable();
    } else {
      this.userForm.enable();
    }
  }

}
