import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app69-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    variable23: string = 'default23';
    constructor() { }

    ngOnInit(): void {
        this.variable23 = "binding_ardham_ayindaa"
    }

}
