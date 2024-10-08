import { Component, OnInit } from '@angular/core';
import { Confirmable23, unkoDecorator23 } from '../../decorators/confirmbale.decorator';
import { Football12 } from '../../decorators/football12.decorator';

@Component({
    selector: 'app-custom-decorator12',
    templateUrl: './custom-decorator12.component.html',
    styleUrls: ['./custom-decorator12.component.scss']
})
export class CustomDecorator12Component implements OnInit {

    striker23:string = "CR7";
    constructor() { }

    ngOnInit(): void {
    }

    /***************************************************************/
    @Confirmable23({
        title: 'Are you sureeey23 - customised',
        html: 'Do you want to delete this item?',
        icon: 'warning'
    })
    deleteItem1(): void {
        console.log("An item was deleted");
    }
    /***************************************************************/



    /***************************************************************/
    @Confirmable23({})
    deleteItem2(): void {
        console.log("item deleted2");
    }
    /***************************************************************/



    /***************************************************************/
    @unkoDecorator23({
        info23: 'em jarugutundi31'
    })
    addNum() { 
        console.log('sum =======> ', 23 + 44);
    }
    /***************************************************************/


    @Football12()
    footballDecorator() {
        console.log("triggered football decorator ", Date.now())
    }
}
