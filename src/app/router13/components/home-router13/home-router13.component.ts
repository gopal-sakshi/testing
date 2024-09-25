import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app69-home-router13',
    templateUrl: './home-router13.component.html',
    styleUrls: ['./home-router13.component.scss']
})
export class HomeRouter13Component implements OnInit {

    constructor(private router: Router, 
        private activatedRoute:ActivatedRoute
    ) { }

    ngOnInit(): void { }

    navigateToInbox() { 
        this.router.navigate(['/router13', 'inbox']); 
        // this.router.navigate(['router13', 'inbox']); 
        // this.router.navigate(['inbox'], {relativeTo: this.activatedRoute}); 
    }

    navigateToOutbox() { this.router.navigate(['/router13', 'outbox']); }
}