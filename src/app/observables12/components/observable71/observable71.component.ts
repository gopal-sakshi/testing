import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app69-observable71',
  templateUrl: './observable71.component.html',
  styleUrls: ['./observable71.component.scss']
})
export class Observable71Component implements OnInit {

  timerSub23:Subscription; 
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  startTimer() {
    
    this.timerSub23 = timer(3000).pipe(
      switchMapTo(of(1,2,3))
    ).subscribe(res => { console.log(res) });

    this.timerSub23 = timer(3000).pipe(
      switchMapTo(of(1,2,3))
    ).subscribe(res => { console.log(res) });

  }

  stopTimer() {
    console.log('timer stopped');
    this.timerSub23.unsubscribe();
  }

  kalgudiLogin() {
    const urlProd = 'https://outputs.kalgudi.com/v2/auth/login';
    const urlDev = 'https://devkalgudi.vasudhaika.net/v2/auth/login';
    let payloadProd = {
      password: "NjY2NjY2",
      sessionId: "",
      type: "mobile",
      userName: "+911111193925"
    };

    let payloadDev = {
      password: "MTIzNDU2Nzg=",
      sessionId: "",
      type: "email",
      userName: "first@ai.com"
    }
    // this.httpClient.post<any>(urlProd,payloadProd).subscribe(res => {
    //   console.log(res);
    // });
    this.httpClient.post<any>(urlDev,payloadDev).subscribe(res => {
      console.log(res);
    });
  }

}
