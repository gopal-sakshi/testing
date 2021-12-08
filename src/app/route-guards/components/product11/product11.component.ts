import { Component, OnInit } from '@angular/core';
import { Product11 } from '../../classes/Product11';
import { ProductService11 } from '../../classes/ProductService11';

@Component({
  selector: 'app-product11',
  templateUrl: './product11.component.html',
  styleUrls: ['./product11.component.css']
})
export class Product11Component implements OnInit {

  products: Product11[];

  constructor(private productService11: ProductService11) { }

  ngOnInit(): void {
    this.products = this.productService11.getProducts();

  }

}
