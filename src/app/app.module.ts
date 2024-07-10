import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuse23Service } from './router15/services/route-reuse23.service';
import { RouteReuse23 } from './classes/route-reuse23';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { i18Loader } from './i18Loader';
import { AuthInterceptor22 } from './auth23/classes/authInterceptor22';
import { RouterModule } from '@angular/router';
import { JwtInterceptor11 } from './auth23/classes/jwtInterceptor11';
import { Auth23Service } from './auth23/services/auth23.service';



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
    Common23Module,

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (i18Loader),
        deps: [ HttpClient ]
      }
    }),
    RouterModule
  ],
  providers: [
    ProductGuardService,
    Auth23Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PincodeInterceptor23,
      multi: true,
    },
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
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor11,         // to make expired auth token - refresh token - kpt way             
        multi: true 
    },
    // {
    //   provide: HTTP_INTERCEPTORS,    
    //   useClass: AuthInterceptor24,            // to show how to handle http errors... nothing else...
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorIntereptorService,
    //   multi: true
    // },

    // { provide: RouteReuseStrategy, useClass: RouteReuse23Service }
    // did not work... need to understand MOREEEEEEEE

    { provide: RouteReuseStrategy, useClass: RouteReuse23}
    //   useClass: AuthInterceptor22,            // to show how to handle http errors... nothing else...
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
