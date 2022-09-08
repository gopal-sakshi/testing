import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/cognito-service';

@Component({
  selector: 'app69-cognito-home',
  templateUrl: './cognito-home.component.html',
  styleUrls: ['./cognito-home.component.scss']
})
export class CognitoHomeComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private cognitoService: CognitoService) {
      this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated()
    .then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/cognito23/signIn']);
    });
  }

}
