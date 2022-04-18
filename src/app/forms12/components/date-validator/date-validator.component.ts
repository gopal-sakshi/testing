import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app69-date-validator',
  templateUrl: './date-validator.component.html',
  styleUrls: ['./date-validator.component.scss']
})
export class DateValidatorComponent implements OnInit {
  
  dateRange1: FormGroup;
  
  toDate:Date = new Date();
  fromDate:Date;


  constructor() { }

  ngOnInit(): void {
    // console.log(this.toDate);
    this.fromDate = new Date(this.toDate.setDate(this.toDate.getDate() - 60));    
    this.dateRange1 = new FormGroup({
      to: new FormControl(''),
      from: new FormControl('')      
    });
    this.dateRange1.get('from').valueChanges.subscribe(res => {      
      this.toDate = new Date(res);
      this.toDate.setDate(this.toDate.getDate() + 60);      
    });
    this.dateRange1.get('to').valueChanges.subscribe(res => {      
      this.fromDate = new Date(res);
      this.fromDate.setDate(this.fromDate.getDate() - 60);      
    })
  }

  getDate() {
    console.log(this.dateRange1.get('from').value);
    console.log(this.dateRange1.get('to').value);
  }


}

