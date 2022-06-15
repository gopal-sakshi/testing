import { Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Inject26AService } from "../services/inject26a.service";
import { Inject26BService } from "../services/inject26b.service";

export class Inject26BaseClass {

    inject26AServiceInstance:Inject26AService;
    inject26BServiceInstance: any;
    router23:Router

    // APPROACH I ------------> in this case, we only need ONE parameter 'injector' in constructor... 
        // from this one parameter 'injector'  ----> we will get needed dependencies like Inject26AService, Inject26BService

    constructor(protected injector:Injector) { 
        this.inject26AServiceInstance = this.injector.get(Inject26AService);
        this.inject26BServiceInstance = this.injector.get(Inject26BService);
        this.router23 = this.injector.get(Router)
    }

    // APPROACH II ------------> instead, we need to manually inject both Inject26AService, Inject26BService dependencies
        // those 2 dependencies must be provided by the component that extends this class

    /* 
        
        ----------------> in Inject26Component
        constructor (private 26A: Inject26AService, private 26B: Inject26BService) {
            super(26A, 26B);        // this actually calls the constructor of Inject26BaseClass
        }     


        -----------> in Inject26BaseClass
        constructor(26AService, 26BService)

        Since, the above approach seems complex, we implement approach 1 ---> where we send injector to Inject26BaseClass
        // now Inject26BaseClass takes whatever dependencies it needs like Inject26AService, Inject26BService
        // infact, we imported router service too ...

    */

    get26AStuff():string {

        console.log('to show/prove that we can get router instance from Dependency Injection ------------->',this.router23.url);

        // because, we specified inject26AServiceInstance datatype (or) its type annotation as Inject26AService ---> intellisense works
        return this.inject26AServiceInstance.get26ANames();
    }

    get26BStuff():string {
        // type annotation = any -----> intellisense will not work (mostly)
        return this.inject26BServiceInstance.get26BNames();
    }
    
}