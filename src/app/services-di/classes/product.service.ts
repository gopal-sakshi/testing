import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { Product } from "./product";


@Injectable()               // bcoz, we are about to inject loggerService into this ProductService
export class ProductService {

    constructor(private loggerService:LoggerService) {}
    public getProducts() {

        let products: Product[];

        products = [
            new Product(1, 'Memory Card', 500),
            new Product(1, 'Pen Drive', 750),
            new Product(1, 'Power Bank', 100)
        ]

        return products;
    }
}