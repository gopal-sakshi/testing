import { Inject, Injectable } from "@angular/core";
import { LoggerTwiceService } from "./loggerTwice.service";
import { Product } from "./product";


/*
    See, there is no @Injectable() decorator...
    ProductTwiceService is a class... Its a consumer of dependency named LoggerTwiceService
    I mean, ProductTwiceService has a dependency on LoggerTwiceService...
    But still, there is no @Injectable() decorator

    Since it threw error, I had to add @Injectable() decorator

*/
@Injectable()
export class ProductTwiceService {

    constructor(@Inject(LoggerTwiceService) private LoggerTwiceServiceInstance:any) { }
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
