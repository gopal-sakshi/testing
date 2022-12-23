import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/********************************************** */
  // USE THIS

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
/********************************************** */

/************************************************************** 

// THIS IS ALL THE JUNK THAT GOT ADDED
  // when I uninstalled, installed nguniversal, app-shell to try again & again
  // with this all I am getting is blank page...


function bootstrap() {
  function bootstrap() {
    function bootstrap() {
      platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
    };


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

  };


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

};


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

************************************************************** */