import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit {

  
  showSignin:boolean = false;
  showSignup:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.showSignin = !this.showSignin;
  }

  gotoSignUp() {
    this.showSignup = !this.showSignup;
  }

}
