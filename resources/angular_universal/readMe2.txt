we can pre-render our application using renderModuleFactory. 

Pre-rendering can be used in multiple ways
- we can use pre-rendering in a backend Node server like Express
    to serve fully server-side rendered routes directly to the browser.
    Angular will then bootstrap itself and take over the page as a normal SPA
- or we can 
    call pre-rendering from a command line tool
    build a plain HTML version of a page 
    that we then upload and server from a CDN like Amazon Cloudfront


