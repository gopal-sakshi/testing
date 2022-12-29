import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { itemDetail } from "../classes/item-detail";

@Injectable()
export class GetItemDetailsService {

    itemsListShort:itemDetail[] = [
        {id: 1, name: 'banana'},
        {id: 2, name: 'apple'},
        {id: 3, name: 'mango'},
        {id: 4, name: 'papaya'},
        {id: 5, name: 'guava'}        
    ];
    itemsListFull:any = [
        {id: 1, name: 'banana', img: 'assets/itemDetails/banana.jpg', price:100},
        {id: 2, name: 'apple', img: 'assets/itemDetails/apple.jpeg', price:400},
        {id: 3, name: 'mango', img: 'assets/itemDetails/mango.jpeg', price:900},
        {id: 4, name: 'papaya', img: 'assets/itemDetails/papaya.jpeg', price:950},
        {id: 5, name: 'guava', img: 'assets/itemDetails/guava.jpg', price:990}
    ];

    getItemById(id:number) {
        console.log(id);
        return of(this.itemsListFull.find(item => item.id == id));
        // return of({id: 5, name: 'guava', img: 'assets/itemDetails/guava.jpg', price:990});
        
    }

    getAllItemsFull() {
        return of(this.itemsListFull);
    }    

    getAllItemsShort() {
        return of(this.itemsListShort)
    }

    getItem(itemId:number):Observable<any> {
        // implement later 
        return of(null)
    }
}