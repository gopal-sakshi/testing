import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth23Service } from '../../services/auth23.service';

@Component({
  selector: 'app69-signup11',
  templateUrl: './signup11.component.html',
  styleUrls: ['./signup11.component.scss']
})
export class Signup11Component implements OnInit {

  signUpForm:FormGroup;

  constructor(private authService:Auth23Service, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForSignUp():void {
    let payload24 = {
      userName: this.signUpForm.get('userName').value,
      password: this.signUpForm.get('password').value
    }
    this.authService.signUp(payload24).pipe().subscribe(res => {
      console.log(res);
    })
  }


}
