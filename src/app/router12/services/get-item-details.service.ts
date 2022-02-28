import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { itemDetail } from "../components/classes/item-detail";

@Injectable()
export class GetItemDetailsService {

    itemsListShort:itemDetail[] = [
        {id: 1, name: 'banana'},
        {id: 2, name: 'apple'},
        {id: 3, name: 'mango'},
        {id: 4, name: 'papaya'},
        {id: 5, name: 'guava'}        
    ];
    itemsListFull: [
        {id: 1, name: 'banana', img: '', price:100},
        {id: 2, name: 'apple', img: '', price:400},
        {id: 3, name: 'mango', img: '', price:900},
        {id: 4, name: 'papaya', img: '', price:950},
        {id: 5, name: 'guava', img: '', price:990}
    ];

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