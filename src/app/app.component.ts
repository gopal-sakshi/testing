import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Common23Service } from './common23/services/common23.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subscription44:Subscription;
  isConnected:boolean;  
  userName:string = '';
  constructor(
    private commonService:Common23Service
        /*
            It seems, Common23Service must be injected @ Root level... at not at module level
            because we are using subjects & observables... 
            app.component.ts ---> uses getMessage() method of Common23Service
            if Common23Service is injected @ Module level, it wont work
            so, we injected Common23Service @ Root level
              either providedIn: 'root'     (OR)    providers[] array of app.module.ts
        */
  ) {  }

  ngOnInit() {
    console.log('ngOnInit');
    this.userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : '';
    this.subscription44 = this.commonService.getMessage().subscribe(
      res => {
        this.processLogin(res);        
      });
  }

  processLogin(payload:any) {    
    console.log(payload);
    this.userName = payload.userName;
    localStorage.setItem('userName', payload.userName);
    localStorage.setItem('password', payload.password);
    localStorage.setItem('token', payload.token ? payload.token : 'token ledu babai');
  }

}
