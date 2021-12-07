import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { Product } from "./product";


/**
 *
 * Injectable... then see providers[] Array in module... 1st way of adding this dependency to providersArray */

@Injectable()   // bcoz, we are about to inject loggerService into this ProductService
                // any component, service ---> if it has any external dependency, then we use @Injectable()
                // here ProductService has dependency on LoggerService
                  // (OR) ProductService is CONSUMER of LoggerService dependency
                  // We add @Injectable() decorator before consumer of dependency
                // for ProductService to get instantiated, it needs LoggerService (as argument in constructor)


/***    Injectable provided at root level... 2nd way of adding dependency to providersArray
 *
 *
  @Injectable({
    providedIn:'root'
      // providedIn: 'platform'
      // providedIn: any
  })

*/

/****
 *        3rd way of injecting a dependency
 *          using @Inject thingy...
 *          
 */
export class ProductService {

    /**
     * okay, now this loggerService is a dependency... productService needs this dependency
     * All dependencies must be included in providers array....
     *    if included in component providers array... the service is available only component & its children
     *    if included in module, service is available across the module
     *
     * As per Angular, we cant use providers Array in service class...
     * we must use providersArray in component (or) at the module
     *    anyway, lets use loggerService at module level
     */

    constructor(private loggerService:LoggerService) {}
    public getProducts() {

      this.loggerService.log('getProducts called');

        let products: Product[];

        products = [
            new Product(1, 'Memory Card', 500),
            new Product(1, 'Pen Drive', 750),
            new Product(1, 'Power Bank', 100)
        ]
        this.loggerService.log(products);
        return products;
    }
}
