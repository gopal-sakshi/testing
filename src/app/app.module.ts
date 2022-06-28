import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsModule } from './subjects/subjects.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuardService } from './route-guards/classes/ProductGuardService';

import { Common23Module } from './common23/common23.module';
import { HttpInterceptor24 } from './classes/http-interceptor24';
import { AuthInterceptor23 } from './auth23/classes/authInterceptor23';
import { AuthInterceptor24 } from './auth23/classes/authInterceptor24';
import { PincodeInterceptor23 } from './classes/http-interceptor23';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    SubjectsModule,
    FlexLayoutModule,

    BrowserAnimationsModule,
    Common23Module,
    RouterModule
  ],
  providers: [
    ProductGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PincodeInterceptor23,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptor24,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor23,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor24,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
