import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
// import BrowserAbstractions from './browser-abstractions';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TranslateInterceptor23 } from './translate-interceptor.service';

const routes: Routes = [ { path: 'shell', component: AppShellComponent }];
(global as any).navigator = window.navigator;
var navigator = {};

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: TranslateInterceptor23, multi: true }    
  // ],
  bootstrap: [AppComponent],
  declarations: [
    AppShellComponent
  ],
})
export class AppServerModule {}
