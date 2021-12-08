// import { Observable } from 'rxjs/Observable';

import { Product11 } from "./Product11";




export class ProductService11 {

    public getProducts() {

        let products: Product11[];

        products = [
            new Product11(1, 'Memory Card', 500),
            new Product11(2, 'Pen Drive', 750),
            new Product11(3, 'Power Bank', 100)
        ]

        return products;
    }


    public getProduct(id:any) {
        let products: Product11[] = this.getProducts();
        return products.find(p => p.productID == id);
    }


}