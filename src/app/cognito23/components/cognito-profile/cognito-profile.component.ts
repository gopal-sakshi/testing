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

  getTokens() {
    // this.cognitoService.getTokens1();
    this.cognitoService.getTokens2(this.responseCode);
  }
}
