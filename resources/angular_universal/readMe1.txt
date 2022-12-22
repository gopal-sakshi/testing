https://angular.io/guide/universal
    this tutorial is about Angular Universal
    express server ===> which serves html files                 // server-side rendering
    But the dist folder will have <app-root></app-root> only
    Just when index.html is being served from (expressEngine) server.ts
    it dynamically infuses content
    But since we are deploying our UI code in AWS S3, this is not much useful for us
    Hence we will go with second link ===> angular-app-shell

ng add @nguniversal/express-engine
- this command creates these changes
- see img1.png
- this is the commit
    https://github.com/gopal-sakshi/testing/commit/173489361abd03daa7a7022641f169a317cbd518

--------------------------------------------------------------------------------

https://blog.angular-university.io/angular-app-shell/



--------------------------------------------------------------------------------
Because a Universal application doesn't execute in the browser
- some of the browser APIs and capabilities might be missing on the server.
- For example, server-side applications can't reference browser-only global objects 
    window, document, navigator, location.
- Angular provides some injectable abstractions over these objects, such as Location or DOCUMENT; it might substitute adequately for these APIs. If Angular doesn't provide it, it's possible to write new abstractions that delegate to the browser APIs while in the browser and to an alternative implementation while on the server (also known as shimming).
--------------------------------------------------------------------------------