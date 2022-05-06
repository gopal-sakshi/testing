import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/sockets1.service';

@Component({
  selector: 'app69-sockets11',
  templateUrl: './sockets11.component.html',
  styleUrls: ['./sockets11.component.scss']
})
export class Sockets11Component {

  title = 'socketrv';
  content:any = '';
  received = [];
  sent = [];

  /* 
  The WebSocket API is an advanced technology that allows communication between the client's browser & the server
    both to send messages and to receive responses 
    without the need to make a new request to the server to get the answer.  
  */
  constructor(private websocketService: WebsocketService) { 
    websocketService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.push(message);
    this.websocketService.messages.next(message);
  }

}
