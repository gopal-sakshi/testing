import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent-dom',
    templateUrl: './parent-dom.component.html',
    styleUrls: ['./parent-dom.component.scss']
})
export class ParentDomComponent implements OnInit {

    time23:string = 'time23_string';
    interval23:any;
    constructor() { }

    ngOnInit(): void {
        this.interval23 = setInterval(() => {
            this.time23 = new Date().toISOString()
        }, 2000)
    }

    ngDestroy() {
        clearInterval(this.interval23);
    }

}
