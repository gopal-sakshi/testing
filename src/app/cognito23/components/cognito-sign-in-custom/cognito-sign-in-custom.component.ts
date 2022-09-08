import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app69-cognito-sign-in-custom',
  templateUrl: './cognito-sign-in-custom.component.html',
  styleUrls: ['./cognito-sign-in-custom.component.scss']
})
export class CognitoSignInCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToSignIn() {
    var customDomain:string = 'gopal612-domain23.auth.us-east-1.amazoncognito.com';
    var clientId:string = environment.cognito.userPoolWebClientId;
    var redirect_url1:string = 'http://localhost:9999/random12';
    var redirect_url2:string = 'http://localhost:9999/cognito23/profile';
    const url =`https://${customDomain}/login?response_type=code&client_id=${clientId}&redirect_uri=${redirect_url2}`
    // window.open(url, "_blank");   // opens in new tab
    window.open(url, "_self");    // opens in same tab
  }

}
