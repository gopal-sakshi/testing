import { Component } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";
import { FireStoreService } from "../../services/firestore.service";

@Component({
    selector: 'app69-chat-firebase',
    templateUrl: './chat-firebase.component.html',
    styleUrls: ['./chat-firebase.component.scss']
})
export class ChatFirebaseComponent {
    
    constructor(private fireStoreService : FireStoreService,
      private firebase:FirebaseService) {}
    // constructor() {}
    
    ngOnInit() {
        this.subscribeToFirebase();
    }
    
    subscribeToFirebase() {
      this.fireStoreService.userChatsUpdated('user44').subscribe(res => {
        console.log(res);
      //   this.clubs = res;
      });
    }

    sendMessage() {
      var inputMessage = (<HTMLInputElement>document.getElementById('inputMessage'))?.value || 'empty String';
      var message = {
        sender: 'testing-app',
        receiver: 'user44',
        timeStamp: Date.now(),
        message: inputMessage
      }
      this.firebase.sendMessage(message).subscribe(res => {
        console.log(res);
      })
    }
}