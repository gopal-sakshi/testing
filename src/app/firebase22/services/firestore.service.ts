import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FireStoreService {

    constructor(private fireDb: AngularFirestore) {}    

    // A firestore collection ===> contains documents and nothing else. 
    // It can't directly contain raw fields with values, and it can't contain other collections
    // A firestore document =====> contains fields
    
    userChatsUpdated(userId:string) {
        return this.userChats(userId).valueChanges().pipe();
    }

    /************************************************************************************************************* */
    private userChats(userId:string): AngularFirestoreDocument<any> {
        return this.fireDb.collection('testing_chats').doc(userId);        
    }

    /************************************************************************************************************* */
}