import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../classes/product.service';

@Component({
  selector: 'app-product-di',
  templateUrl: './product-di.component.html',
  styleUrls: ['./product-di.component.css'],
  providers: [ProductService]           // ProductService is registered with Injector_of_ProductDiComponent
                                          // remember that ProductDiComponent has an Injector of its own...
})
export class ProductDiComponent {

  products: Product[];

  // the component declares the dependencies they need in their constructor...
  // Injector reads dependencies from constructor of the consumer.. then, looks for the dependency in the provider


  // we need to tell angular, that our component needs dependency injection... so, we use @Injectable() decorator
  // but if we have @Component, @Pipe, @Directive... then, we wont need to use @Injectable director

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
