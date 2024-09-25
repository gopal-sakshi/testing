import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-lifecycle12',
    templateUrl: './lifecycle12.component.html',
    styleUrls: ['./lifecycle12.component.css']
})
export class Lifecycle12Component implements OnInit {

    message: string;
    displayMessage: boolean;

    constructor(private router: Router,
        private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
        console.log("data_from_resolvers23 ===> ", this.activatedRoute.snapshot.data);
        this.router.events.subscribe(evt => {
            if (evt instanceof NavigationStart) {
                this.message = 'Loading...';
                this.displayMessage = true;
            }
            if (evt instanceof NavigationEnd) this.displayMessage = false;
        });
    }

}



