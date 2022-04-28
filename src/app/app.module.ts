import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsModule } from './subjects/subjects.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuardService } from './route-guards/classes/ProductGuardService';
import { HttpInterceptor23 } from './classes/http-interceptor23';
import { Common23Module } from './common23/common23.module';
import { HttpInterceptor24 } from './classes/http-interceptor24';
import { AuthInterceptor23 } from './auth23/classes/authInterceptor23';
import { AuthInterceptor24 } from './auth23/classes/authInterceptor24';
import { AuthInterceptor22 } from './auth23/classes/authInterceptor22';



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

    BrowserAnimationsModule,
    Common23Module
  ],
  providers: [
    ProductGuardService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptor23,          // this is for pincode CORS stuff... presently disabling... enable it later...
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptor24,         // dummy interceptor... only for console.log... nothing else...
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor23,        // to make expired auth token requests again
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor24,            // to show how to handle http errors... nothing else...
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor22,            // to show how to handle http errors... nothing else...
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
