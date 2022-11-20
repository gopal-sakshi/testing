import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireModule } from '@angular/fire/compat';
import { RouterModule, Routes } from "@angular/router";
import { environment } from "src/environments/environment";
import { ChatFirebaseComponent } from "./components/chat-firebase/chat-firebase.component";
import { HomeFirebaseComponent } from "./components/home-firebase/home-firebase.component";
import { FirebaseService } from "./services/firebase.service";

const routes:Routes = [
    { path: '', component: HomeFirebaseComponent }
]

@NgModule({
    declarations:[
        HomeFirebaseComponent,
        ChatFirebaseComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        // AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    exports: [

    ],
    providers:[
        FirebaseService
    ]
})
export class Firebase22Module {}


