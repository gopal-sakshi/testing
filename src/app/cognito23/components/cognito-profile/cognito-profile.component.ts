import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CognitoService, IUser } from '../../services/cognito-service';
import AmazonCognitoIdentity, { CognitoUserPool } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app69-cognito-profile',
  templateUrl: './cognito-profile.component.html',
  styleUrls: ['./cognito-profile.component.scss']
})
export class CognitoProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;
  responseCode: string = '';
  identityPoolId:string = '';

  constructor(
    private cognitoService: CognitoService,    
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {

      this.loading = false;
      this.user = {} as IUser;
      this.responseCode = this.activatedRoute.snapshot.queryParams.code
      if (this.responseCode) {
        console.log(this.responseCode);
      }

  }

  public ngOnInit(): void {
    console.log(this.responseCode);
    if (!this.responseCode) {
      this.cognitoService.getUser()
        .then((user: any) => {
          console.log(user);                // see getUser() is nothing but --->    Auth.currentUserInfo... see currentUserInfo.json
          this.user = user.attributes;
        });
    } else {
      console.log('else...');
      this.identityPoolId = environment.identityPoolId;
      // this.doStuff();
      this.getJwtToken();
    }
  }

  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
      .then(() => {
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
  }



  doStuff() {
    var poolData = {
        UserPoolId : environment.cognito.userPoolId, // your user pool id here
        ClientId : environment.cognito.userPoolWebClientId // your client id here
    };  
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);       // see this file cognito-user-object.json
    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, result) {
		    if (result) {
          // console.log(result);
			    console.log('You are now logged in.');
          // Add the User's Id Token to the Cognito credentials login map.
			    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				    IdentityPoolId: 'us-east-1:725bcf26-29f7-48ae-a9e0-1c7d19875da3',
				    Logins: {              
					    'cognito-idp.us-east-1.amazonaws.com/us-east-1_fJnjgvQUe': result.getIdToken().getJwtToken()
				    }
			    });
		    } else {
          console.log(err);
        }
	    });
    }
  }

  getJwtToken() {
    var domain = 'gopal612-domain23.auth.us-east-1.amazoncognito.com';
    
    const url23 = `https://${domain}/oauth2/token`;
    var payload = {
      grant_type: 'authorization_code',
      client_id: '4kjd5vjp1u213ngc2mu2ermoia',
      redirect_uri: 'http://localhost:9999/cognito23/profile'
    }
    this.httpClient.post(url23, { payload }).subscribe(res => {
      console.log(res);
    })
  }

  getTokens() {
    this.cognitoService.getTokens();
  }
}
