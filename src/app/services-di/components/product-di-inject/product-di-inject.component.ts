import { Component, OnInit } from '@angular/core';
import { ProductTwiceService } from '../../classes/productTwice.service';

@Component({
    selector: 'app-product-di-inject',
    templateUrl: './product-di-inject.component.html',
    styleUrls: ['./product-di-inject.component.css'],
    providers: [ProductTwiceService]
})
export class ProductDiInjectComponent {

    products: any;
    constructor(private productTwiceService: ProductTwiceService) { }

    getProducts() {
        this.products = this.productTwiceService.getProducts();
    }

}
