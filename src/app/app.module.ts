import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsModule } from './subjects/subjects.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuardService } from './classes/ProductGuardService';
import { ConnectionService, ConnectionServiceModule } from 'ng-connection-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubjectsModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductGuardService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
