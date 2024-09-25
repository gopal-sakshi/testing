`STEP 01`
- ProductService is registered with Injector_of_ServicesDIModule
- now this ProductService is available across all the components of this module
- remember that ServicesDIModule has an injector of its own
- If ProductService is commented, it means 'ProductService' isnt available at module level... 
- but only in the component where its needed...
- See ProductDiComponent.ts (see providers[] array in @Component decorator)

`STEP 02`
- we used @Injectable() decorator in ProductTwiceService
- so, no need to add ProductTwiceService in providers[] array of NgModule
