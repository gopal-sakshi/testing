With TypeScript being a superset of JavaScript
- using it means compiling your TypeScript files down to pure JavaScript 
- before the V8 engine can understand them. 

node server/server.ts ========> throws ERROR                // Cannot use import statement outside a module
- Using Node to run TypeScript files returns an error.
-------------------------------------------------------------------------------------------------------------------

ts-node is an executable you can run
- there’s nothing to import or require in your scripts.



tsc ==============> transpile all the file according to your tsconfig.
ts-node ==========> will start from the entry file and transpile the file step by step through the tree based on the import/export.