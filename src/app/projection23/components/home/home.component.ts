import { Component, HostListener, OnInit } from '@angular/core';

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

    @HostListener('window:beforeunload', ['$event'])
    onBeforeUnload(event) {
        console.log(`storing selected tab index___${Date.now()}`);
        localStorage.setItem('reload_chesina_time', new Date().toISOString())
        return true;
    }

    @HostListener('click')
    clickInside() {
        console.log("click jarigindi ", Date.now())
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if(event.target) {
            console.log("click out jarigindi ", Date.now())
        }
    }

}
