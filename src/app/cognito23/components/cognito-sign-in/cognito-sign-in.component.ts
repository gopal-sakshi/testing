import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../../services/cognito-service';

@Component({
  selector: 'app69-cognito-sign-in',
  templateUrl: './cognito-sign-in.component.html',
  styleUrls: ['./cognito-sign-in.component.scss']
})
export class CognitoSignInComponent {

  loading: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    console.log('gili gili');
    this.loading = true;
    this.cognitoService.signIn(this.user)
    .then(() => {
      this.router.navigate(['/cognito23/profile']);
    }).catch(() => {
      this.loading = false;
    });
  }
  
  public federatedSignIn():void {
    this.cognitoService.federatedSignIn().then(res => { console.log(res)} ).catch(err => { console.log(err) });
  }

  someSignout() {
    
  }
}
