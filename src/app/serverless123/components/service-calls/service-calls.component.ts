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
    this.serviceCallService.addPost('#testing is my angular app - posts').subscribe(res => {
      console.log('post added successfully');
    });
  }

  submitQuote() {
      this.serviceCallService.addQuote('angular application - quote').subscribe(res => {
      console.log('quote added successfully');
    });
  }

  showQuotes() {
    this.serviceCallService.getQuotes().subscribe(res => {
      console.log('Quotes ', res);
    });
  }

  showPosts() {
    this.serviceCallService.getPosts().subscribe(res => {
      console.log('Posts ', res);
    })

  }

  postWithParams() {
    this.serviceCallService.postWithParams().subscribe(res => {
      console.log('post with params', res);
    })
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

/**
 * ERROR
 *
 *   {
        "headers": {
            "normalizedNames": {},
            "lazyUpdate": null
        },
        "status": 200,
        "statusText": "OK",
        "url": "http://localhost:4000/dev/jingchak/jingchak/posts/showALL",
        "ok": false,
        "name": "HttpErrorResponse",
        "message": "Http failure during parsing for http://localhost:4000/dev/jingchak/jingchak/posts/showALL",
        "error": {
            "error": {},
            "text": "Real Madrid\r\nAtletico Madrid\r\nBarcelona\r\nSevilla won Europa League multiple times\r\nDani Parejo played for Valencia\r\nHala Madrid\r\nReal Madrid won record 13 Champions Leagues\r\nReal Madrid's present coach is Carlo Ancelotti\r\n"
        }
      }

 */
