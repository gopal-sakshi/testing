import { Component, OnInit } from '@angular/core';
import { CognitoService, IUser } from '../../services/cognito-service';

@Component({
  selector: 'app69-cognito-profile',
  templateUrl: './cognito-profile.component.html',
  styleUrls: ['./cognito-profile.component.scss']
})
export class CognitoProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;
    });
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
}
