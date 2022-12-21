see `app-shell-errors.md` These are the errors
- navigator not defined
- XMLHttpRequest3.send

`Why`
- @ngx/translate won’t work on the server side 
    since it will try to get translations from file system

Solution
- In angular universal app you have the server app module which will be bundled for the server. 
- We need to use an interceptor, which will change request paths to load translations from the server.
- Add an HTTP interceptor to app.server.module.ts, so it will be bundled only in the server bundle.