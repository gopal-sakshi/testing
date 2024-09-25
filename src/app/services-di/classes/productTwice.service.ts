import { Inject, Injectable } from "@angular/core";
import { LoggerTwiceService } from "./loggerTwice.service";
import { Product } from "./product";

/*
    We have to add @Injectable() decorator here; we cant go with Option2 like in 'LoggerTwiceService'
    Option2 == instead of decorator, add this class in providers[] of NgModule
    It would work, had "ProductTwiceService" itself has no dependencies, but alas its not the case
    "ProductTwiceService" DEPENDS on LoggerTwiceService; so we MUST add @Injectable() decorator
    if "ProductTwiceService" has no dependencies, then we can go with Option2 -- providers[] of NgModule
*/
@Injectable()
export class ProductTwiceService {

    constructor(
        /******* BOTH ARE SAME... we can inject the service in either WAY **********************/
        @Inject(LoggerTwiceService) private LoggerTwiceServiceInstance:any,         // Approach 01
        private LoggerTwiceServiceInstance_can_Use_This_Way_Also:LoggerTwiceService // Approach 02
    ) { }
    public getProducts() {

        this.LoggerTwiceServiceInstance.log('getProducts called');
        let products: Product[];
        products = [
            new Product(1, 'Memory Card', 500),
            new Product(1, 'Pen Drive', 750),
            new Product(1, 'Power Bank', 100)
        ]
        this.LoggerTwiceServiceInstance.log(products);
        return products;
    }
}
