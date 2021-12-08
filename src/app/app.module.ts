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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor23,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
