import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../../services/service-call.service';

@Component({
  selector: 'app69-service-calls',
  templateUrl: './service-calls.component.html',
  styleUrls: ['./service-calls.component.scss']
})
export class ServiceCallsComponent implements OnInit {

  constructor(private serviceCallService: ServiceCallService) { }

  ngOnInit(): void {
  }

  submitPost() {
    this.serviceCallService.addPost('#testing is my angular app - posts').subscribe(res => { console.log(res); });
  }

  submitQuote() {
    this.serviceCallService.addQuote('angular application - quote').subscribe(res => { console.log(res); });
  }

  showQuotes() {
    this.serviceCallService.getQuotes().subscribe(res => { console.log(res); });
  }

  showPosts() {
    this.serviceCallService.getPosts().subscribe(res => { console.log('Posts ', res); })
  }

  postWithParams() {
    this.serviceCallService.postWithParams().subscribe(res => { console.log('post with params', res); })
  }

}
/*
  I got this error... struggled a lot for like 2hrs... see bottom for ERROR
  from the backend serverless, everything is fine...
  even at frontEnd, I got the preview & response in browser...
  But its not printing in console...

  Research in the net showed ----> this error occurs when Angular is expecting JSON but gets something else instead

  Solutions
  - Either wrap your response in quotes at the backend, or change the responseType to 'text' in the front end


*/
