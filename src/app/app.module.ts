import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsModule } from './subjects/subjects.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuardService } from './classes/ProductGuardService';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SubjectsModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
