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
import { PincodeInterceptor23 } from './classes/http-interceptor23';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuse23 } from './classes/route-reuse23';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { i18Loader } from './i18Loader';
import { RouterModule } from '@angular/router';



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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PincodeInterceptor23,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: RouteReuse23 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
