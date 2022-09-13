import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {

  private authenticationSubject: BehaviorSubject<any>;

  constructor(private httpClient:HttpClient) {
    // Amplify.configure({
    //   Auth: environment.cognito,
    // });

    Amplify.configure({
      Auth: {
       mandatorySignIn: true,
       userPoolId: environment.cognito.userPoolId,
       userPoolWebClientId: environment.cognito.userPoolWebClientId2,
       region: 'us-east-1',
       identityPoolId: 'us-east-1:90015d5d-f92a-4a63-820d-ea8a80ee9a44',
       oauth : {
         domain : 'gopal612-domain23.auth.us-east-1.amazoncognito.com',
         scope : ['email'],
         redirectSignIn: 'http://localhost:9999/cognito23/profile',
         redirectSignOut: 'http://localhost:9999/cognito23/profile',
         responseType: 'code'
       },
      }
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    return Auth.signIn(user.email, user.password)
    .then(() => {
      this.authenticationSubject.next(true);
    });    
  }

  public federatedSignIn() {
    return Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google}).then(cred => {      
        console.log(cred);
        localStorage.setItem('cred1', JSON.stringify(cred));
        Auth.currentAuthenticatedUser().then(res => {
          console.log(res);
          localStorage.setItem('cred2', JSON.stringify(res));
        }).catch(err => { console.log(err) });
    }).then(user => { console.log(user); }).catch(e => { console.log(e) });

  }


  public signOut(): Promise<any> {
    return Auth.signOut()
    .then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
      .then((user: any) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
    .then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

  public getTokens1() {
    Auth.currentSession().then(res => {
      let accessToken = res.getAccessToken();
      let jwtToken = accessToken.getJwtToken();
      console.log(accessToken);
      console.log(jwtToken);
    })
  }

  public getTokens2(authorization_code:string) {
    var domain = 'https://gopal612-domain23.auth.us-east-1.amazoncognito.com/oauth2/token';
    var params = {
      grant_type: 'authorization_code',
      code: `${authorization_code}`,
      redirect_uri: 'http://localhost:9999/cognito23/profile',
      // client_id: environment.cognito.userPoolWebClientId2,       
      // client_secret: environment.cognito.userPoolWebClientId2Secret,
      client_id: '3bra0ld4ioq3klh983j8929gct',
      // client_secret: '1b6vnjvcsp49467e6b1v4mcb0la11k6cl1g1gmivd3rpdtvhq3ob',
      code_verifier: 'CODE_VERIFIER'
    }

    let headers = new HttpHeaders({ 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic M2JyYTBsZDRpb3Eza2xoOTgzajg5MjlnY3Q6MWI2dm5qdmNzcDQ5NDY3ZTZiMXY0bWNiMGxhMTFrNmNsMWcxZ21pdmQzcnBkdHZocTNvYg'
    });

    this.httpClient.post(domain, params, { headers }).subscribe(res => {
      console.log(res);
    }, err => { console.log(err) });
  }

}


/*
  LINKS

  https://stackoverflow.com/questions/68020425/amplify-federated-sign-in-validation-exception

  redirect URI in google web application
  https://gopal612-domain23.auth.us-east-1.amazoncognito.com/oauth2/idpresponse

*/