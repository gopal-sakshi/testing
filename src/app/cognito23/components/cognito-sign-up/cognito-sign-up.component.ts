import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, CognitoService } from '../../services/cognito-service';

@Component({
  selector: 'app69-cognito-sign-up',
  templateUrl: './cognito-sign-up.component.html',
  styleUrls: ['./cognito-sign-up.component.scss']
})
export class CognitoSignUpComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(
    private router: Router,
    private cognitoService: CognitoService) {
      this.loading = false;
      this.isConfirm = false;
      this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/signIn']);
    }).catch(() => {
      this.loading = false;
    });
  }

}
