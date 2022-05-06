import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { AnonymousSubject, Subject } from "rxjs/internal/Subject";
import { map } from "rxjs/operators";
import { Message } from "../classes/message";

const CHAT_URL = "ws://localhost:3054";


@Injectable({
    providedIn:'root'
})
export class WebsocketService {

    private subject: AnonymousSubject<MessageEvent>;
    public messages: Subject<Message>;

    constructor() {
        this.messages = <Subject<Message>>this.connect23(CHAT_URL).pipe(
            map((response:MessageEvent):Message => {
                console.log(response.data);
                let data = JSON.parse(response.data);
                return data;
            })
        )
    }

    public connect23(url:string):AnonymousSubject<MessageEvent> {
        if(!this.subject) {
            this.subject = this.create34(url);
            console.log('successfully connected');
        }
        return this.subject;
    }

    public create34(url:string):AnonymousSubject<MessageEvent> {
        
        let ws11 = new WebSocket(url);
        let observable23 = new Observable((obs11:Observer<MessageEvent>) => {
            ws11.onmessage = obs11.next.bind(obs11);
            ws11.onerror = obs11.error.bind(obs11);
            ws11.onclose = obs11.complete.bind(obs11);
            return ws11.close.bind(ws11);
        });
        let observer = {
            error: null,
            complete: null,
            next: (data:Object) => {
                console.log('message sent to websocket ',data);
                if(ws11.readyState === WebSocket.OPEN) {
                    ws11.send(JSON.stringify(data));
                }
            }
        }
        return new AnonymousSubject<MessageEvent>(observer,observable23);
    }

}
