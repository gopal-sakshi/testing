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

/*********** providers23  ********/
import { PincodeInterceptor23 } from './classes/http-interceptor23';
import { HttpInterceptor24 } from './classes/http-interceptor24';
import { AuthInterceptor22 } from './auth23/classes/authInterceptor22';
import { AuthInterceptor23 } from './auth23/classes/authInterceptor23';
import { AuthInterceptor24 } from './auth23/classes/authInterceptor24';
import { JwtInterceptor11 } from './auth23/classes/jwtInterceptor11';
import { ErrorIntereptorService } from './common23/services/error-interceptor';
/*********** providers23  ********/



import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { i18Loader } from './i18Loader';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { Auth23Service } from './auth23/services/auth23.service';
import { RouteReuse11 } from './router16/classes/route-reuse11';
import { Router15Module } from './router15/router15.module';




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
        Router15Module,     // Adding here, coz RouteReuseStrategy doesnt work with LazyLoadedModules
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: (i18Loader),
                deps: [HttpClient]
            }
        }),
        RouterModule
    ],
    providers: [
        ProductGuardService,
        Auth23Service,        
        { provide: HTTP_INTERCEPTORS, useClass: PincodeInterceptor23, multi: true, },   // CORS
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor24, multi: true },      // console        
        // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor23, multi: true },    // expired token - ignore
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor11, multi: true },        // expired token - KPT        
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor24, multi: true },       // expired token - ignore
        { provide: HTTP_INTERCEPTORS, useClass: ErrorIntereptorService, multi: true },  // retry 2 times
        

        // { provide: RouteReuseStrategy, useClass: RouteReuse11 }         // DEFAULT Angular
        // https://stackoverflow.com/questions/42383546/angular2-doesnt-work-custom-reuse-strategy-with-lazy-module-loading
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
