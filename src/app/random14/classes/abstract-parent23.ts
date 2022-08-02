import { Directive, Input, OnChanges, OnInit } from "@angular/core";
import { GrandParent23 } from "./abstract-grand-parent23";

@Directive()
export abstract class Parent23 extends GrandParent23 implements OnInit, OnChanges {

    @Input() name23:string;
    constructor() {
        super();
        console.log('constructor parent23');
    }

    ngOnInit() {
        console.log('ngOnInit - parent23');
    }

    ngOnChanges() {
        console.log('ngOnChanges parent23 ',this.name23);
    }
}