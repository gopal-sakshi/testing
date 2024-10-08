import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app69-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    showAppGreeting: boolean = false;
    showFilter23: boolean = false;
    coldObs23: boolean = false;
    scheduler23: boolean = false;
    blink23:boolean = false;
    
    constructor() { }

    ngOnInit(): void { }

}
