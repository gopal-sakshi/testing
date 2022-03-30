import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth23Service } from '../../services/auth23.service';

@Component({
  selector: 'app69-signin11',
  templateUrl: './signin11.component.html',
  styleUrls: ['./signin11.component.scss']
})
export class Signin11Component implements OnInit {

  signInForm:FormGroup;

  constructor(private authService:Auth23Service, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForSignin() {
    let payload23 = {
      userName: this.signInForm.get('userName').value,
      password: this.signInForm.get('password').value
    }
    this.authService.signIn(payload23).pipe().subscribe(res => {console.log(res)});
  }

}
