Parcel converts JS assets to ES5, which won't run in in the context of a <script type="module"> tag, 
so just use plain <script> tags with no type attribute in your source HTML.

Parcel has a development server built in
    which will automatically rebuild your app as you change files 
    supports hot module replacement for fast development. 
    
Point it at your entry file:
    parcel index.html
-----------------------------------------------------------------------------------------------------------------------
https://parceljs.org/features/development/


Dev server
- default server        = 1234 port
- -p 9966               = opens in 9966 port
- --open                = opens in browser automatically

Hot Reloading
- As you make changes to your code
    Parcel automatically rebuilds the changed files 
    and updates your app in the browser. 
    By default, Parcel fully reloads the page
- In some cases it may perform Hot Module Replacement (HMR)
    HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. 
    This means that application state can be retained as you change small things in your code.



Development Target
- When using the dev server, only a single target can be built at once
- By default, Parcel uses a development target that supports modern browsers
    --target legacy     = if u need to test in a older browser

Lazy mode
- dont wait for your entire app to build before the dev server starts up.
- --lazy CLI flag       = tell Parcel to defer building files until they are requested in the browser
                        = which can significantly reduce development build times. 
                        = The server starts quickly, and when you navigate to a page for the first time, 
                            Parcel builds only the files necessary for that page. 
                        = When you navigate to another page, that page will be built on demand.


Caching
- Parcel caches everything it builds to disk. 
- If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran
- Parcel automatically tracks all of the files, configuration, plugins, dev dependencies that are involved in your build
    and granularly invalidates the cache when something changes.


HTTPS
- Sometimes, you may need to use HTTPS during development. 
    you may need to use a certain hostname for authentication cookies, or debug mixed content issues.
- --https                                       = use an automatically generated self-signed certificate
- --cert certificate.cert --key private.key     = use custom certificate

API Proxy
- specify paths that should be proxied to another server
- mention them in .proxyrc.js (or) .proxyrc.json

Auto Install