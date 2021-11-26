import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../classes/product.service';

@Component({
  selector: 'app-product-di',
  templateUrl: './product-di.component.html',
  styleUrls: ['./product-di.component.css']
})
export class ProductDiComponent {

  products: Product[];
  
  constructor(private productService: ProductService) {}

}
