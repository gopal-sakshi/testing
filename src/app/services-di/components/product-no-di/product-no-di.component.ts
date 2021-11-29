 import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../classes/product.service';

@Component({
  selector: 'app-product-no-di',
  templateUrl: './product-no-di.component.html',
  styleUrls: ['./product-no-di.component.css']
})
export class ProductNoDiComponent {

  products: Product[];
  productService;
  blah:any = 'random argument to prevent errors';


  constructor() {

    // this is wrong... creating an instance of ProductService within the component...
    // ideally we should use DI & get instance of ProductService in the constructor of this ProductDiComponent.

                  // this would throw error, bcoz ProductService now expects 1 argument... loggerService
        // this.productService = new ProductService();
        this.productService = new ProductService(this.blah);


  }

  getProducts() {

    this.products = this.productService.getProducts();
  }

}
