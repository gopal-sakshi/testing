import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// I am not happy with this import... do something about it later...
import { Common23Service } from 'src/app/common23/services/common23.service';

import { Auth23Service } from '../../services/auth23.service';

@Component({
  selector: 'app69-signin11',
  templateUrl: './signin11.component.html',
  styleUrls: ['./signin11.component.scss']
})
export class Signin11Component implements OnInit {

  signInForm:FormGroup;

  constructor(private authService:Auth23Service,
    private commonService: Common23Service, 
          /* 
            we want to import Common23Service...
              Common23Service is in Common23Module
              but our signin11 component is in Auth23Module
              Question = how to import a service/component from module1 ---> module2
            APPROACH 1   ===> NgModule imports... a module depends on another module.
              import the module1 in "imports array of module2"
            APPROACH 2   ===> Typescript imports... they are to uniquely identify a class
              directly import the service/component into the signinComponent
          */
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
    this.authService.signIn(payload23).pipe().subscribe(res => {
      console.log(res);
      if(res.info == 'signIn success' && res.code == 200) {
        this.commonService.sendMessage(res);
      }
    });
  }

}
