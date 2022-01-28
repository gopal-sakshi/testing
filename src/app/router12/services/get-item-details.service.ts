import { Observable, of } from "rxjs";
import { itemDetail } from "../components/classes/item-detail";

export class GetItemmDetailsService {

    itemsList:itemDetail[] = [
        {
            id: 1,
            name: 'banana',
            price: 200,
            img : ''
        }
    ]
    getAllItems() {

    }

    getItem(itemId:number):Observable<any> {
        return of(null)
    }
}