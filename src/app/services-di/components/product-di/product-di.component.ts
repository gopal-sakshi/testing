import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../classes/product.service';

@Component({            // STEP 03
    selector: 'app-product-di',
    templateUrl: './product-di.component.html',
    styleUrls: ['./product-di.component.css'],
    providers: [ProductService]     // STEP 01
})
export class ProductDiComponent {

    products: Product[];
    constructor(private productService: ProductService) { }         // STEP 02

    getProducts() {
        this.products = this.productService.getProducts();
    }

}

/*
    STEP 01     ProductService is registered with Injector_of_ProductDiComponent
                remember that ProductDiComponent has an Injector of its own...
  
    STEP 02     the component declares the dependencies they need in their constructor...
                Injector reads dependencies from constructor of the consumer.. 
                then, looks for the dependency in the provider


    STEP 03     we need to tell angular, that our component needs dependency injection... 
                so, we use @Injectable() decorator
                but if we have @Component, @Pipe, @Directive... 
                then, we wont need to use @Injectable director
*/