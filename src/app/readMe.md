# Angular 
- ability to develop an application in cross-platform because it doesn’t depend on DOM. 
- But it’s breakable easily. 
- If you use `window`,`document` or `anything browser-specific`, then of course your app will lose the ability.
    We often use `window` instance to get & set global variables.   
        window.localStorage, 
        window.load
- In browser platform, `window` is a single global context object. 
- In the other side, Node.js environment provides a global context as `global`. 
- To make our app platform-agnostic, we must absorb the difference.

