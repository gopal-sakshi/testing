// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import { cognito } from "config/aws-cognito";

export const environment = {

  production: false,
  envName: 'normal',
  APP_NAME: 'testing_normal',
  // cognito: cognito,

  firebaseConfig: {
    apiKey: "AIzaSyDk8xLeJ8OYP-7TIwu-qpuADPJBnYalOrQ",
    authDomain: "gopal61288-01.firebaseapp.com",
    projectId: "gopal61288-01",
    storageBucket: "gopal61288-01.appspot.com",
    messagingSenderId: "299268567166",
    appId: "1:299268567166:web:d0e8f532c81fc689cfe82f",
    measurementId: "G-HXLPCBYY2M"
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
