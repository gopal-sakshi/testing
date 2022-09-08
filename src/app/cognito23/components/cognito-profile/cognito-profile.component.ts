import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CognitoService, IUser } from '../../services/cognito-service';
import AmazonCognitoIdentity, { CognitoUserPool } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';
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
    private activatedRoute: ActivatedRoute) {

      this.loading = false;
      this.user = {} as IUser;
      this.responseCode = this.activatedRoute.snapshot.queryParams.code
      if (this.responseCode) {
        console.log(this.responseCode);
      }

  }

  public ngOnInit(): void {
    if (!this.responseCode) {
      this.cognitoService.getUser()
        .then((user: any) => {
          this.user = user.attributes;
        });
    } else {
      console.log('else...');
      this.identityPoolId = environment.identityPoolId;
      this.doStuff();
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

  initStuff() {
    // AWS.config.region = 'us-east-1';
    // var poolData = {
    //   UserPoolId : environment.cognito.userPoolId, // your user pool id here
    //   ClientId : environment.cognito.userPoolWebClientId // your client id here
    // };    
    // var userData = {
    //   Username : '...', // your username here
    //   Pool : userPool
    // };
  }

  doStuff() {
    var poolData = {
        UserPoolId : environment.cognito.userPoolId, // your user pool id here
        ClientId : environment.cognito.userPoolWebClientId // your client id here
    };  
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
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

}
