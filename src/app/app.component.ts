import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Common23Service } from './common23/services/common23.service';
import Swal from 'sweetalert2';
import { TranslateSwalPipe } from './common23/Pipes/translate-swal.pipe';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isTesting:boolean = Date.now() % 2 == 0 ? true : false;         // isTesting will be true (or) false
  subscription44:Subscription;
  isConnected:boolean;  
  userName:string = '';
  constructor(
    private translate:TranslateService,
    private commonService:Common23Service
        /*
            It seems, Common23Service must be injected @ Root level... at not at module level
            because we are using subjects & observables... 
            app.component.ts ---> uses getMessage() method of Common23Service
            if Common23Service is injected @ Module level, it wont work
            so, we injected Common23Service @ Root level
              either providedIn: 'root'     (OR)    providers[] array of app.module.ts
        */
  ) {  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.userName = localStorage.getItem('userName') ? localStorage.getItem('userName') : '';
    this.subscription44 = this.commonService.getMessage().subscribe(
      res => { this.processLogin(res); },
      err => { console.log(err); },
      () => { console.log('observable completed'); }
    );

    this.useBrowserGlobalObjects();
    
  }

  changeLang() {
    if(this.translate.currentLang == 'te') {
        this.translate.use('en')
    } else {
        this.translate.use('te')
    }

  }

  useBrowserGlobalObjects() {
    
    // if(navigator.onLine) {
    //   console.log('you are connected to internet');
    // }

    // using navigator object
    if(navigator && typeof navigator !== 'undefined') {
      if(navigator.onLine) {
        console.log('you are connected to internet');
      }
    }

    // using window object
    if(window && typeof window !== 'undefined') {
      window.setTimeout(() => { console.log('window setTimeout exectuted after 2 seconds')}, 2000);
    }
    
    // using document object
    if(document && typeof document !== 'undefined') {
      document.getElementById('')
    }

    // using location object
  }

  processLogin(payload:any) {    
    console.log("processLogin23 ====> ", payload);
    this.userName = payload.userName;
    localStorage.setItem('userName', payload.userName);
    localStorage.setItem('access_token', payload.access_token ? payload.access_token : 'token ledu babai1');
    localStorage.setItem('refresh_token', payload.refresh_token ? payload.refresh_token : 'token ledu babai2');
  }

  showingSweetAlert() {
    
    var string44 = 'Baahubali';
    var string44_translated = '';
    this.translate.get(`${string44}`).subscribe(res => {
      console.log(res);
      string44_translated = res;
    })
    Swal.fire({
      title: 'testing translation',
      html: `${string44_translated}`
    })
    // localStorage.setItem('userName', payload.userName);
    // localStorage.setItem('password', payload.password);
    // localStorage.setItem('token', payload.token ? payload.token : 'token ledu babai');
  }

  testingWebWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.postMessage('hello');      
      worker.onmessage = workerResponse => { console.log(`page got message: ${workerResponse.data}`); };      
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}

