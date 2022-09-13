import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-cognito-sign-in-custom2',
  templateUrl: './cognito-sign-in-custom2.component.html',
  styleUrls: ['./cognito-sign-in-custom2.component.scss']
})
export class CognitoSignInCustom2Component implements OnInit {

  htmlContent:any;

  constructor(private httpClient:HttpClient ) { }

  ngOnInit(): void {
  }

  authorize() {
    const domain = 'https://gopal612-domain23.auth.us-east-1.amazoncognito.com/oauth2/authorize';
    var params = {
      client_id: '4kjd5vjp1u213ngc2mu2ermoia',
      response_type: 'code',
      redirect_uri: 'http://localhost:9999/cognito23/profile'
    }
    
    this.httpClient.get(domain, { params }).subscribe(res => {
      console.log(res);
    })
  }

  token() {}

  userInfo() { }

  login() { 
    const domain = 'https://gopal612-domain23.auth.us-east-1.amazoncognito.com/login';
    var params = {
      client_id: '4kjd5vjp1u213ngc2mu2ermoia',
      response_type: 'code',
      redirect_uri: 'http://localhost:9999/cognito23/profile'
    }
    
    this.httpClient.get(domain, { params, responseType: 'text' }).subscribe(res => {
      console.log(res);
      // this.htmlContent = res;
      var newWindow23 = window.open('', res, "resizable=yes");
      newWindow23.document.write(res);
    })
  }
}
